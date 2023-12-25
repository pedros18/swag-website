import mongoose from "mongoose";
import connectToDB from "../../database"
import { NextResponse } from "next/server";
import Categorie from "../../models/catgorie"


export async function GET(){

    try {
        await connectToDB();
        const result = await Categorie.find({});

        return NextResponse.json({
            data: result,
            success: true,
            message: "success !",
          });
        
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    

}