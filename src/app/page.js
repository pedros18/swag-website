'use client'

import Navbar from "./components/navbar"
import Landing from "./components/landing"
import HomeCategories from "./components/homeCategories"
import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./components/Footer"

export default function Home() {

  const [categories,setCategories] = useState(null);

  const getCategories = async () =>{
   const result = await axios.get("/api/getAllCategories");
   setCategories(result.data.data);
  }

  useEffect(()=>{
   getCategories();
  },[]);


  return (
    <>
      {categories === null ? "" 
      :
        <>
      <Navbar />
      <Landing />
      <HomeCategories categories={categories}/>
      <Footer />
      </>
      }
    </>
  )
}
