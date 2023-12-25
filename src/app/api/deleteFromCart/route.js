import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import connectToDB from '../../database';


export async function POST(req){

    try {
        await connectToDB();
        const {name} = await req.json();
        cookies().delete(name);
        return NextResponse.json({
            success: true,
            message: "Logged in successfully"
        });
    } catch (error) {
        console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
    }

}