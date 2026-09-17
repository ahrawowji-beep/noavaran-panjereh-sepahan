import { NextResponse } from 'next/server';
import { getVideos, createVideo, updateVideo, deleteVideo } from '@/lib/db';
import { extractVideoInfo } from '@/lib/video';

export async function GET() {
  const videos = await getVideos();
  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const info = extractVideoInfo(body.videoUrl || '', body.platform || 'aparat');
    const newVideo = {
      ...body,
      videoId: info.videoId || body.videoId,
      thumbnail: body.thumbnail || info.thumbnail,
    };
    const created = await createVideo(newVideo);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create video' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updates } = await request.json();
    if (updates.videoUrl && updates.platform) {
      const info = extractVideoInfo(updates.videoUrl, updates.platform);
      updates.videoId = info.videoId || updates.videoId;
      if (!updates.thumbnail && info.thumbnail) {
        updates.thumbnail = info.thumbnail;
      }
    }
    const updated = await updateVideo(id, updates);
    if (!updated) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update video' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    const success = await deleteVideo(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete video' }, { status: 500 });
  }
}
