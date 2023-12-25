'use client'

import CartItem from "../cartItem"
import Navbar from "../navbar";
import "../../styles/checkout.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer";

export default function Cart(){
    
    const [articles,setArticles] = useState(null);
    const [price,setPrice] = useState(0);
    const [sizes,setSizes] = useState(null);

    const getArticles = async () =>{
        const result = await axios.get("/api/cartItems");
        setArticles(result.data.data);
        setPrice(result.data.price);
    }

    useEffect(()=>{
      getArticles();
    },[articles])




    return (
        <>
        {articles === null ? "" :
        articles === undefined ? "" :
        articles.length === 0 ? 
        <>
          <Navbar />
          <div style={{display:"flex",justifyContent:"center",marginTop:"150px",height:"50vh"}}>
             <h1>Cart is empty</h1>
          </div>
          <Footer />
        </>
         :
           <>
           <Navbar />
         <div className='main' style={{marginTop:"40px",height:"50vh"}}>
         <div className='tab'>
         <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {articles === null || articles.length === 0 ? "" :
          articles.map((item)=>{
            return(
            <CartItem size={item.size} image={item.article.mainImage} title={item.article.title} price={item.article.price} id={item.article._id} />
            )
          })
          }
          </tbody>
        </Table>
        </div>
        <div>
        <Card className='commande'>
          <Card.Body>
            <Card.Title>Total Panier</Card.Title>
            <hr></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Sous Total</p>
            <p>{price}</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <a href='/checkout'>
            <Button variant="primary">Commander</Button>
            </a>
            </div>
            
          </Card.Body>
        </Card>
        </div>
         </div>  
         <Footer />
           </>
        }
        </>
      )
}