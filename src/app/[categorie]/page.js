'use client'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../components/navbar";
import Article from "../components/article";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

export default function CatArticles(){
  const params = useParams();
  const categorie = params.categorie;
  const url = "/api/getAllCategoriesArticles/" + categorie;

   const [articles,setArticles] = useState(null);

   const getArticles = async ()=>{
    const result = await axios.get("/api/getAllCategoriesArticles/" + categorie,
    {
        params: {
            cat: categorie,
        }
    });
    setArticles(result.data.data);
   }

   useEffect(()=>{
    getArticles();
   },[]);


   return(
    <>
        {articles === null ? "" :
        <>
        <Navbar />
        <div className="d-none d-md-block" style={{marginTop:"40px",height:"auto"}}>
        <Container>
          <Row>
          {articles.map((article)=>{
            return(
              <Col>
              <Article image={article.mainImage} title={article.title} price={article.price} id={article._id} />
            </Col>
            )
          })
          }
          </Row>
        </Container>
        </div>
        <div className="d-md-none" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"30px"}}>
        {articles.map((article)=>{
          return(
            <Article image={article.mainImage} title={article.title} price={article.price} id={article._id} />
          )
        })
        }
        </div>
        </>
        }
    </>
   )
}