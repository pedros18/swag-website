'use client'


import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/navbar";
import SpecificArticle from "../../../components/specificArticle";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Art(){
    const params = useParams();
    const categorie = params.categorie;
    const id = params.id;
    const [article,setArticle] = useState(null);
 
    const getArticle = async ()=>{
     const result = await axios.get("/api/getSpecificArticle/" + categorie + "/" + id,
     {
         params: {
             id: id,
             categorie: categorie,
         }
     });
     setArticle(result.data.data)
    }
 
    useEffect(()=>{
     getArticle();
    },[])

    return(
        <>   
            {article === null ? ""
            :
            <> 
            <Navbar />
            <SpecificArticle article={article}/>
            </>
            }
        </>
    )
}