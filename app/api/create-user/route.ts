import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server' //Next objects for API routes

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { name } = await req.json()
  const user = await prisma.user.create({
    data: { name, studentId: 100 } 
  })  
  return NextResponse.json(user)
}
