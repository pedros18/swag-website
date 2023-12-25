import mongoose from "mongoose";
import connectToDB from "../../../../database"
import { NextResponse } from "next/server";
import Categorie from "../../../../models/catgorie"


export async function POST(req){


    try {
      await connectToDB();
        const {data , cat} = await req.json();

       const result = await Categorie.findOne({title: cat,});

        result.articles.push({
            
                title: data.artTitle,
                price: data.artPrice,
                mainImage: data.artMainImage,
                images: data.artImages,
                stock: {
                  existing: data.artstock.exists,
                  num: data.artstock.num
                },
                sizeInStock: {
                existing: data.artSizeInStock.exists,
                num: data.artSizeInStock.num,
              },
              pointureInStock: {
               existing: data.artPointureInStock.exists,
               num: data.artPointureInStock.num
              },
             
        });

        result.save();
        
        return NextResponse.json({
            success: true,
            message: "Article Added"
          });
       
      } catch (e) {
        console.log(e);
    
        return NextResponse.json({
          success: false,
          message: "Something went wrong!",
        });
      }
    }