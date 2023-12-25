'use client'

import { UserButton } from "@clerk/nextjs";
import "../../styles/global.css"
import { useEffect , useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { CldUploadWidget } from 'next-cloudinary';

export default function CategorieAdmin(){
    const params = useParams();
    const categorie = params.categorie;
    const router = useRouter();
    const href = "/uploads/" + categorie + "/addArticle"

    const [articles,setArticles] = useState(null);
    const [stockType,setStockType] = useState(null);
    const [title,setTitle] = useState(null);
    const [price,setPrice] = useState(null);
    const [image,setImage] = useState(null);
    const [mainImage,setMainImage] = useState(null);
    const [allImages,setAllImages] = useState([]);
    const [stock,setStock] = useState(null);
    const [warning,setWarning] = useState(null);


    useEffect(()=>{
       getArticles();
    },[]);

    const getArticles = async () => {
        const result = await axios.get("/api/getAllCategoriesArticles/" + categorie,
        {
            params: {
                cat: categorie,
            }
        });
        setArticles(result.data.data);
    }

    const handleDelete = async (e)=>{
       await axios.post("/api/admin/uploads/deleteArticle",{
        article: e,
        cat: categorie
       })
    }

   
   return(
   <>
   <Link href={href}>Add article</Link>
   {articles === null ?
   <div className="fl">
    <h1>Loading ...</h1>
   </div>
   :
   articles.map((article)=>{
    return(
    <>    
    <h1>{article.title}</h1>
    <p>{article.price}</p>
    <button onClick={(e)=>handleDelete(article._id)}>Delete</button>
    </>
    )
   })
   }
   </>
   )
}