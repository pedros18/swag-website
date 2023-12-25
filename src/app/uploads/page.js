'use client'

import { UserButton } from "@clerk/nextjs";
import "../styles/global.css"
import { useEffect , useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CldUploadButton } from 'next-cloudinary';


export default function Uploads({data}){
    const [categories,setCategories] = useState(null);
    const [categorieName,setCategorieName] = useState(null);
    const [categorieImage,setCategorieImage] = useState(null);
    const router = useRouter();

    useEffect(()=>{
       getCategories();
    },[categories]);

    const getCategories = async () => {
        const result = await axios.get("/api/getAllCategories");
        setCategories(result.data.data);
    }

    const handleOnChangeTitle = (e) =>{
       setCategorieName(e.target.value);
    }

    const handleOnChangeImage = (e) =>{
      setCategorieImage(e.target.value);
   }

    const handleSubmit = async ()=>{
        const inputField = document.getElementById("input");
        inputField.value = "";
        const inputField2 = document.getElementById("input2");
        inputField2.value = "";
        const result = await axios.post("/api/admin/uploads/addCategorie",{
            cat: categorieName,
            image: categorieImage,
        })
        .then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
        };

        const handleDelete = async (e) =>{
          const del = await axios.post("/api/admin/uploads/deleteCategorie",{
            id : e,
          }).then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
        };
        
    

    return (
        <>
            <UserButton afterSignOutUrl="/"/>
            {categories === null ? 
             <div className="fl">
              <h1>Loading ...</h1>
              </div>
               
            :        
           <div className="fl" style={{flexDirection:"column"}}>
           <div>
           <label style={{marginRight:"20px"}}>Enter new categorie :</label>
           <input required id="input" type="text" placeholder="enter categorie name" onChange={handleOnChangeTitle} className="mb" style={{marginBottom:"20px"}}></input>
           </div>
           <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Categorie image :</label>
       <CldUploadButton
  uploadPreset="zkmldp3q"
/>
</div>
           <div>
           <label style={{marginRight:"20px"}}>Enter categorie image title :</label>
           <p>Please enter the exact same image title with the .extension (ex: image.png)</p>
           <input pattern=".+\.(jpg|jpeg|png|gif|bmp|svg)$" required id="input2" type="text" placeholder="enter categorie image title" onChange={handleOnChangeImage} className="mb" style={{marginBottom:"20px"}}></input>
           </div>
           <button style={{marginBottom:"50px"}} onClick={handleSubmit}>Submit</button>
         
           {categories.map((categorie)=>{
            return(
                <>
            <div style={{display:"flex",marginBottom:"15px"}}>
            <Link key={categorie._id} className="mb" href={"/uploads/"+categorie.title}>{categorie.title}</Link>
            <button onClick={(e)=>handleDelete(categorie._id)}>Delete</button>
            </div>
               </>
            )
           })
           }
           </div>
            }
        </>
    )
}