
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req:NextRequest) {
// @ts-ignore 
  const reqBody = await req.json();
  console.log(reqBody);
  const {userMessage} = reqBody;
  console.log(userMessage);
  
  
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that gives answers to questions',
        },
        {
          role: 'user',
          content:
            `Answer the following question- ${userMessage}`
        },
      ],
      model: 'gpt-3.5-turbo',
    });
    
    return NextResponse.json({ data: completion.choices, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while processing your request.', status: 500 });
  }
}