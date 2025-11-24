//takes inputted name, creates new user, returns created row

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server' //Next objects for API routes

const prisma = new PrismaClient() //create new prisma client w access to all models, functions

export async function POST(req: NextRequest) { //HTTP method POST = send data to serve, function runs on POST request
  const { name } = await req.json() //wait for request, analyze request as JSON (type for sending data b/w client & server), create name with data
  const user = await prisma.user.create({ //insert new row into User table
    data: { name, studentId: 100 } //data: what cols to set
  })  
  return NextResponse.json(user) //send back created user as JSON, front-end can access name, studentID, etc.
}
