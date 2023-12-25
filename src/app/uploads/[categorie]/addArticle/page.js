'use client'

import { UserButton } from "@clerk/nextjs";
import "../../../styles/global.css"
import { useEffect , useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

export default function AddArticle(){
    const params = useParams();
    const categorie = params.categorie;
    const router = useRouter();

    // const [articles,setArticles] = useState(null);
    const [stockType,setStockType] = useState(null);
    const [title,setTitle] = useState(null);
    const [price,setPrice] = useState(null);
    const [image,setImage] = useState(null);
    const [mainImage,setMainImage] = useState(null);
    const [allImages,setAllImages] = useState([]);
    const [stock,setStock] = useState(null);
    const [warning,setWarning] = useState(null);


    const submitImage = ()=>{
        setAllImages((prev)=> [...prev,image]);
        setImage(null);
        const input = document.getElementById("imageName");
        input.value = "";
    }

    const handleSubmitArticle = async () =>{
        if(title != null && price != null && mainImage != null && stock != null){
        if(stockType === "all"){
        const article = {
            artTitle: title,
            artPrice: price,
            artMainImage: mainImage,
            artImages: allImages, 
            artstock: {
                exists: true,
                num: stock,
            },
            artSizeInStock:{
                exists: false,
                num: {}
            },
            artPointureInStock: {
                exists: false,
                num: {}
            }
        }
        const result = await axios.post("/api/admin/uploads/addArticle",{
            data: article,
            cat: categorie
        }).then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    else if(stockType === "size"){
        const article = {
            artTitle: title,
            artPrice: price,
            artMainImage: mainImage,
            artImages: allImages, 
            artstock: {
                exists: false,
                num: 0
            },
            artSizeInStock:{
                exists: true,
                num: stock
            },
            artPointureInStock: {
                exists: false,
                num: {}
            }
        }
        const result = await axios.post("/api/admin/uploads/addArticle",{
            data: article,
            cat: categorie
        }).then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    else if(stockType === "pointure"){
        const article = {
            artTitle: title,
            artPrice: price,
            artMainImage: mainImage,
            artImages: allImages, 
            artstock: {
                exists: false,
                num: 0
            },
            artSizeInStock:{
                exists: false,
                num: {}
            },
            artPointureInStock: {
                exists: true,
                num: stock,
            }
        }
        const result = await axios.post("/api/admin/uploads/addArticle",{
            data: article,
            cat: categorie
        }).then(function (response) {
            console.log(response.data.success);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    router.push("/uploads");
}
else{
    console.log("fill everything")
}
    }



   return(
   <>
   {/* {articles === null ?
   <div className="fl">
    <h1>Loading ...</h1>
   </div>
   : */}
    <div className="fl" style={{flexDirection:"column"}}>
     <h1 className="inputsMarginBtn">{categorie}</h1>
     <label className="inputsMarginBtn">Enter new article</label>
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Title :</label>
     <input onChange={(e)=>setTitle(e.target.value)} required className="inputsMarginBtn" type="text" placeholder="enter article title"></input>
     </div>
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Price :</label>
     <input onChange={(e)=>setPrice(parseFloat(e.target.value))} required className="inputsMarginBtn" type="text" placeholder="enter article price"></input>
     </div>
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Main image :</label>
       <CldUploadButton
  uploadPreset="zkmldp3q"
/>
     
     </div>
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Main image title :</label>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>You must enter the exact same name of the image <br></br> with the .extension 'ex: image.png'</label>
     <input pattern=".+\.(jpg|jpeg|png|gif|bmp|svg)$" required onChange={(e)=>setMainImage(e.target.value)} className="inputsMarginBtn" type="text" placeholder="enter main image title"></input>
     </div>
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>All images :</label>
       <CldUploadButton
  uploadPreset="zkmldp3q"
/>
</div>

<div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>all images titles :</label>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>You must enter the exact same name of the image <br></br> with the .extension 'ex: image.png'</label>
     <input pattern=".+\.(jpg|jpeg|png|gif|bmp|svg)$" id="imageName" onChange={(e)=>setImage(e.target.value)} className="inputsMarginBtn" type="text" placeholder="enter an image title"></input>
     <button onClick={submitImage} className="inputsMarginBtn" style={{marginLeft:"20px"}}>Submit</button>
     </div>
     {allImages.length === 0 ? "" : 
     allImages.map((image)=>{
        return(
       <ul>
        <li key={image}>{image}</li>
        <button onClick={()=>setAllImages((prev)=>prev.filter(item => item != image))}>Delete</button>
       </ul>
        )
     })
     }
     
     <label className="inputsMarginBtn">Choose how to manage your stock :</label>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button style={{marginRight:"15px"}} id="all" onClick={(e)=>setStockType(e.target.id)}>Number of all items</button>
        <button style={{marginRight:"15px",marginLeft:"15px"}} id="size" onClick={(e)=>setStockType(e.target.id)}>Number of items by size</button>
        <button style={{marginLeft:"15px"}} id="pointure" onClick={(e)=>setStockType(e.target.id)}>Number of items by pointures</button>
      </div>
     {stockType === "all" &&
     <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Number of items in stock :</label>

     <input onChange={(e)=>setStock(parseFloat(e.target.value))} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
     </div>
     }
     <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     {stockType === "size" &&
     <div style={{marginRight:"30px"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Number of items by sizes</label>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>S :</label>
      <input onChange={(e)=>setStock({...stock,s:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>M :</label>
      <input onChange={(e)=>setStock({...stock,m:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>L :</label>
      <input onChange={(e)=>setStock({...stock,l:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>XL :</label>
      <input onChange={(e)=>setStock({...stock,xl:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>XXL :</label>
      <input  onChange={(e)=>setStock({...stock,xxl:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      </div>
     }
     {stockType === "pointure" &&
      <div style={{marginRight:"30px"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>Number of items by pointures</label>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      {/* <div style={{marginRight:"15px"}}> */}
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>35 :</label>
      <input onChange={(e)=>setStock({...stock,point35:parseFloat(e.target.value)})} className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>36 :</label>
      <input onChange={(e)=>setStock({...stock,point36:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>37 :</label>
      <input onChange={(e)=>setStock({...stock,point37:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>38 :</label>
      <input onChange={(e)=>setStock({...stock,point38:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>39 :</label>
      <input onChange={(e)=>setStock({...stock,point39:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>40 :</label>
      <input onChange={(e)=>setStock({...stock,point40:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      {/* </div> */}
      {/* <div style={{marginLeft:"15px"}}> */}
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>41 :</label>
      <input onChange={(e)=>setStock({...stock,point41:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>42 :</label>
      <input onChange={(e)=>setStock({...stock,point42:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label className="inputsMarginBtn" style={{marginRight:"15px"}}>43 :</label>
      <input onChange={(e)=>setStock({...stock,point43:parseFloat(e.target.value)})}  className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label onChange={(e)=>setStock({...stock,point44:parseFloat(e.target.value)})}  className="inputsMarginBtn" style={{marginRight:"15px"}}>44 :</label>
      <input className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      <div className="inputsMarginBtn" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <label onChange={(e)=>setStock({...stock,point45:parseFloat(e.target.value)})}  className="inputsMarginBtn" style={{marginRight:"15px"}}>45 :</label>
      <input className="inputsMarginBtn" type="text" placeholder="enter number of items"></input>
      </div>
      </div>
      </div> 
     }
      </div>
      <button onClick={handleSubmitArticle}>Submit Article</button>
    </div>
   {/* } */}
   </>
   )
}