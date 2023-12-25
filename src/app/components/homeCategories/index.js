'use client'
import { useState, useEffect } from "react";
import Categorie from "../categorie"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation } from 'swiper/modules';
import axios from "axios";
import {Merriweather_Sans} from 'next/font/google';
const meri = Merriweather_Sans({subsets: ['latin']});



export default function HomeCategories(props){
    return(
        <>
        <h5 className={meri.className} style={{marginTop:"100px",marginBottom:"50px",marginLeft:"30px",fontWeight:"bolder"}}>CATEGORIES</h5>   
     <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween:30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
      {props.categories === null ? "" : 
      props.categories.map((categorie)=>{
        return(
          <SwiperSlide style={{width:"fit-content"}}><Categorie kind={categorie.title}  image={categorie.image}/></SwiperSlide>
        )
      })
      }
      </Swiper>
      </div> 
        </>
    )
}