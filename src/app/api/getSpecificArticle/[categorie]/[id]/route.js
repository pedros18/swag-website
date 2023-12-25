import mongoose from "mongoose";
import connectToDB from "../../../../database";
import { NextResponse } from "next/server";
import Categorie from "../../../../models/catgorie";


export async function GET(req, {params}){
    try {

        await connectToDB();
        const {categorie,id} = params;
        const result = await Categorie.find({title: categorie});

        const allArticles = result[0].articles;

        const specific = allArticles.find(x => x._id.toString() === id);




        return NextResponse.json({
            data: specific,
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