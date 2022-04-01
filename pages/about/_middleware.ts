import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {

  console.log(`Inside poc-a about middleware`);
  console.log(`request cookies are ${req.cookies}`);
  return NextResponse.rewrite('https://rewrite-edge-poc-b.vercel.app')

}