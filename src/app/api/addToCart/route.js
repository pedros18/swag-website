import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';


export async function POST(req){

    try {
        const { title, id, size } = await req.json();

        const oneDay = 24 * 60 * 60 * 1000
      
        cookies().set(title,id  , { expires: Date.now() + oneDay });
        cookies().set(id,size , { expires: Date.now() + oneDay });
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