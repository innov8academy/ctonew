import { NextResponse } from 'next/server';
import { ApiResponse } from '@monorepo/common';

export async function GET() {
  const response: ApiResponse = {
    success: true,
    message: 'Hello from Next.js API route!',
    data: {
      timestamp: new Date().toISOString(),
    },
  };

  return NextResponse.json(response);
}
