'use client'

import { useState,useEffect} from 'react'
import Navbar from '../navbar';
import Container from 'react-bootstrap/Container';
import "../../styles/specificarticle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';


import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import axios from 'axios';
import { ContentPasteOffSharp } from '@mui/icons-material';


export default function SpecificArticle(props){


  const [article,setArticle] = useState(null); 

  const [message,setMessage] = useState(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [color,setColor] = useState("");
  const onColorSelect = (e)=>{
    setColor(e.target.value);
  }
  const [size,setSize] = useState("");
  const onSizeSelect = (e)=>{
    setSize(e.target.value);
  }

  const url = "https://res.cloudinary.com/dsyvhttva/image/upload/v1703432812/gip/";

  const addToCart = async () =>{
    if(props.article.sizeInStock.existing === true || props.article.pointureInStock.existing === true){
      if(size === ""){
        setMessage("Please select a size !")
      }
      else{
        setMessage("Successfully added to cart !")
        const result = await axios.post("/api/addToCart",{
          title: props.article.title,
          id: props.article._id,
          size: size,
      })
      .then(function (response) {
          console.log(response.data.success);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
    else{
    setMessage("Successfully added to cart !")
    const result = await axios.post("/api/addToCart",{
      title: props.article.title,
      id: props.article._id,
      size: size,
  })
  .then(function (response) {
      console.log(response.data.success);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }

  return (
    <>
    {/* Mobile Navigatiom */}
    <div className='d-md-none' style={{paddingTop:"30px",backgroundColor:"white"}}>
    <Container className='d-flex justify-content-center mobile'>
    <Swiper 
         pagination={{
          clickable: true,
           }} 
        modules={[Pagination]} >
         
         <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src={url + props.article.mainImage} alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
        {props.article.images.map((image)=>{
          return(
            <SwiperSlide style={{justifyContent:"center",alignItems:"center",display:"flex"}}>
        <img src={url + image} alt='product' style={{width:"400px"}}></img>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
    <p style={{textAlign:"center",marginTop:"20px"}}>{props.title}</p>
    <p style={{textAlign:"center",marginTop:"10px"}}>{props.price}</p>
   
    {props.article.sizeInStock.existing === false ? ""
    :
    <>
    <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
      <Form.Select value={size} onChange={onSizeSelect}>
       Select Size   
       {props.article.sizeInStock.num.s > 0 && <option value="s">S</option>}
       {props.article.sizeInStock.num.m > 0 && <option value="m">M</option>}
       {props.article.sizeInStock.num.l > 0 && <option value="l">L</option>}
       {props.article.sizeInStock.num.xl > 0 && <option value="xl">XL</option>}
       {props.article.sizeInStock.num.xxl > 0 && <option value="xxl">XXL</option>}
      </Form.Select>
    </>
    }
    {props.article.pointureInStock.existing === false ? ""
    :
    <>
    <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
      <Form.Select value={size} onChange={onSizeSelect}>
       Select Size   
       {props.article.pointureInStock.num.point35 > 0 && <option value="35">35</option>}
       {props.article.pointureInStock.num.point36 > 0 && <option value="36">36</option>}
       {props.article.pointureInStock.num.point37 > 0 && <option value="37">37</option>}
       {props.article.pointureInStock.num.point38 > 0 && <option value="38">38</option>}
       {props.article.pointureInStock.num.point39 > 0 && <option value="39">39</option>}
       {props.article.pointureInStock.num.point40 > 0 && <option value="40">40</option>}
       {props.article.pointureInStock.num.point41 > 0 && <option value="41">41</option>}
       {props.article.pointureInStock.num.point42 > 0 && <option value="42">42</option>}
       {props.article.pointureInStock.num.point43 > 0 && <option value="43">43</option>}
       {props.article.pointureInStock.num.point44 > 0 && <option value="44">44</option>}
       {props.article.pointureInStock.num.point45 > 0 && <option value="45">45</option>}
      </Form.Select>
    </>
    }
    <div className="d-grid gap-2" style={{marginTop:"20px"}}>
      <Button onClick={addToCart} variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
        Add to Cart
      </Button>
      <a href='/checkout' style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"}}>
      <Button variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available"}}>
        Buy Now
      </Button>
      </a>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>
    <p>{message}</p>
    </div>
    </div>

    {/* DESKTOP NAVIGATION */}
    <div className='d-none d-md-block' style={{paddingTop:"30px",paddingBottom:"40px",backgroundColor:"white"}}>
    <Container style={{display:"flex"}}>
    <Container>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
       <SwiperSlide>
          <img src={url + props.article.mainImage} alt='phot' />
        </SwiperSlide>
      {props.article.images.map((image)=>{
        return(
          <SwiperSlide>
          <img src={url + image} alt='phot' />
        </SwiperSlide>
        )
      })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
       <SwiperSlide>
          <img src={url + props.article.mainImage} alt='phot' />
        </SwiperSlide>
      {props.article.images.map((image)=>{
        return(
          <SwiperSlide>
          <img src={url + image} alt='phot' />
        </SwiperSlide>
        )
      })}
      </Swiper>
      </Container>
      <Container>
        <h1>{props.article.title}</h1>
        <h3>{props.article.price}</h3>
        <form>
          <p style={{marginLeft:"20px",marginTop:"20px"}}>Size</p>
          <div className='d-flex justify-content-start'>
      {props.article.sizeInStock.existing === false ? ""
    :
    <>
      <Form.Select value={size} onChange={onSizeSelect}>
       Select Size   
       {props.article.sizeInStock.num.s > 0 && <option value="s">S</option>}
       {props.article.sizeInStock.num.m > 0 && <option value="m">M</option>}
       {props.article.sizeInStock.num.l > 0 && <option value="l">L</option>}
       {props.article.sizeInStock.num.xl > 0 && <option value="xl">XL</option>}
       {props.article.sizeInStock.num.xxl > 0 && <option value="xxl">XXL</option>}
      </Form.Select>
    </>
    }

    {props.article.pointureInStock.existing === false ? ""
    :
    <>
      <Form.Select value={size} onChange={onSizeSelect}>
       Select Size   
       {props.article.pointureInStock.num.point35 > 0 && <option value="35">35</option>}
       {props.article.pointureInStock.num.point36 > 0 && <option value="36">36</option>}
       {props.article.pointureInStock.num.point37 > 0 && <option value="37">37</option>}
       {props.article.pointureInStock.num.point38 > 0 && <option value="38">38</option>}
       {props.article.pointureInStock.num.point39 > 0 && <option value="39">39</option>}
       {props.article.pointureInStock.num.point40 > 0 && <option value="40">40</option>}
       {props.article.pointureInStock.num.point41 > 0 && <option value="41">41</option>}
       {props.article.pointureInStock.num.point42 > 0 && <option value="42">42</option>}
       {props.article.pointureInStock.num.point43 > 0 && <option value="43">43</option>}
       {props.article.pointureInStock.num.point44 > 0 && <option value="44">44</option>}
       {props.article.pointureInStock.num.point45 > 0 && <option value="45">45</option>}
      </Form.Select>
    </>
    }
          </div>
          <div className="d-grid gap-2" style={{marginTop:"20px"}}>
            <Button onClick={addToCart} variant="light" size="lg" style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px",borderRadius:"0",borderWidth:"2px"}}>
             Add to Cart
            </Button>
            <a href='/checkout' style={{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"}}>
             <Button variant="dark" size="lg" style={{borderRadius:"0",borderWidth:"2px",width:"-webkit-fill-available"}}>
              Buy Now
             </Button>
            </a>
          </div>
        </form>
        <p style={{marginTop:"30px"}}>{message}</p>
      </Container>
      </Container>
    </div>
    </>
  )
}