import { NextRequest, NextResponse } from 'next/server'

export default function middleware(error) {
  
  console.log(error.statusCode);
  console.log(error.message);
}

export const config = {
    matcher: '/auth/:path*',
  }