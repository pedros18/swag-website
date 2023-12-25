import mongoose from "mongoose";
import connectToDB from "../../../../database";
import { NextResponse } from "next/server";
import Categorie from "../../../../models/catgorie"


export async function POST(req){


    try {
      await connectToDB();
        const {cat,image} = await req.json();

        const result = await Categorie.insertMany({
            title: cat,
            image: image,
            articles: [],
        });
        
        return NextResponse.json({
            success: true,
            message: "Section Added"
          });
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }



