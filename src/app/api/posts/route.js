//garder le nom route.js c'est obligatoire
import { NextResponse } from 'next/server.js';
import connect from '@/utils/db.js';
import Post from '@/models/Post';

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse('Db error', { status: 500 });
  }
};
