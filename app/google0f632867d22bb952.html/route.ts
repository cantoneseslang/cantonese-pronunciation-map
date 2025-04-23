import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('google-site-verification: google0f632867d22bb952.html', {
    headers: {
      'Content-Type': 'text/html',
    },
  })
} 