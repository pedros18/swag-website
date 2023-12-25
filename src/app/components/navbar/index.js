"use client";

import { useState, useEffect } from "react";
import {Varta} from 'next/font/google';

const varta = Varta({subsets: ['latin']});
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../../styles/navbar.css"
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [shop, setShop] = useState(false);

  const [categories,setCategories] = useState(null);

  const getCategories = async () =>{
    const result = await axios.get("/api/getAllCategories");
    setCategories(result.data.data);
   }

   useEffect(()=>{
    getCategories();
   },[]);

  const handleCloseShop = () => setShop(false);
  const handleShowShop = () => setShop(true);

  const handleCloseMenu = () => setMenu(false);
  const handleShowMenu = () => setMenu(true);

  return (
    <>
      {/* DESKTOP NAVIGATION */}
       <div className="d-none d-lg-block" style={{backgroundColor:"#ece8e7"}}>
        <Nav className={varta.className} style={{paddingTop:"8px",paddingBottom:"8px",fontWeight:"bold"}}>
          <NavItem className="logo" style={{marginRight:"auto"}}>
            <Nav.Link href="/">
              <img src="/logo.png" style={{width:"80px"}} alt="logo"></img>
            </Nav.Link>
          </NavItem>
          <NavItem
            className="dropbtn"
            style={{ display: "flex", alignItems: "center" , marginRight:"80px" , color:"black" }}
          >
              <div className="dropdown">
               CATEGORIES
                <div className="dropdown-content">
                {categories === null ? "" :
                categories.map((categorie)=>{
                  return(
                  <a href={"/"+categorie.title}>
                   {categorie.title}
                  </a>
                  )
                })
                }
                </div>
              </div>
          </NavItem>
          <NavItem style={{marginRight:"80px",display:"flex",alignItems:"center"}}>
          <Nav.Link href="/cart" style={{color:"black"}}>CART</Nav.Link>
          </NavItem>
        </Nav>
      </div> 

      {/* MOBILE NAVIGATION */}
      <div className="d-lg-none" style={{backgroundColor:"#ece8e7"}}>
        <Nav style={{ paddingTop: "10px" }}>
          <Nav.Item
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "15px",
            }}
          >
            <MenuIcon className="shop_icon" onClick={handleShowMenu} />
          </Nav.Item>
          <Offcanvas show={menu} onHide={handleCloseMenu}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Brand name</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link href="/" className="mb-3">
                HOME
              </Nav.Link>
              <hr></hr>
              {categories === null ? "" : 
              categories.map((categorie)=>{
                return(
                  <Nav.Link href={"/"+categorie.title} className="mb-3">
                {categorie.title}
              </Nav.Link>
                )
              })
              }
            </Offcanvas.Body>
          </Offcanvas>
          <Nav.Item className="mx-auto">
            <Nav.Link href="/">
              <img src="/logo.png" alt="logo" style={{height:"50px",marginLeft:"15px"}}></img>
            </Nav.Link>
          </Nav.Item>
          <NavItem style={{ display: "flex", alignItems: "center" }}>
            <Nav.Link style={{ color: "black" }} href="/cart"> 
              <ShoppingBagOutlinedIcon
                className="shop_icon"
              ></ShoppingBagOutlinedIcon>
            </Nav.Link>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}
