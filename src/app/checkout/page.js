'use client'


import Navbar from '../components/navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/checkout.css"


export default function Checkout(){
    return (
        <>
        <Navbar />
        <div className="main" style={{marginTop:"40px"}}>
        <div style={{marginRight:"100px"}}>
        <h2 style={{marginLeft:"100px"}}>Order Details</h2>
        <div style={{display:"flex",marginLeft:"100px",marginBottom:"50px",flexDirection:"column"}}>
            <div style={{marginRight:"20px"}}>
               <p>Prenom</p>
               <input></input>
            </div>
            <div>
               <p>Nom</p>
               <input></input>
            </div>
        </div>
        <div style={{marginLeft:"100px"}}>
        <Form.Select style={{marginBottom:"20px",width:"100%"}}>
          <option>Wilaya</option>
          <option value="1">Adrar</option>
          <option value="2">Chlef</option> 
          <option value="3">Laghouat</option>
          <option value="4">Oum El Bouaghi</option>
          <option value="5">Batna</option>
          <option value="6">Bejaia</option>
          <option value="7">Biskra</option>
          <option value="8">Bechar</option>
          <option value="9">Blida</option>
          <option value="10">Bouira</option>
          <option value="11">Tamanrasset</option>
          <option value="12">Tebessa</option>
          <option value="13">Tlemcen</option>
          <option value="14">Tiaret</option>
          <option value="15">Tizi Ouzou</option>
          <option value="16">Alger</option>
          <option value="17">Djelfa</option>
          <option value="18">Jijel</option>
          <option value="19">Setif</option>
          <option value="20">Saida</option>
          <option value="21">Skikda</option>
          <option value="22">Sidi Bel Abbes</option>
          <option value="23">Annaba</option>
          <option value="24">Guelma</option>
          <option value="25">Constantine</option>
          <option value="26">Medea</option>
          <option value="27">Mostaganem</option>
          <option value="28">M'Sila</option>
          <option value="29">Mascara</option>
          <option value="30">Ouargla</option>
          <option value="31">Oran</option>
          <option value="32">El Bayadh</option>
          <option value="33">Illizi</option>
          <option value="34">Bordj Bou Arreridj</option>
          <option value="35">Boumerdes</option>
          <option value="36">Tarf</option>
          <option value="37">Tindouf</option>
          <option value="38">Tissemsilt</option>
          <option value="39">El Oued</option>
          <option value="40">Khenchla</option>
          <option value="41">Souk Ahras</option>
          <option value="42">Tipaza</option>
          <option value="43">Mila</option>
          <option value="44">Ain Defla</option>
          <option value="45">Naama</option>
          <option value="46">Ain Temouchent</option>
          <option value="47">Ghardaia</option>
          <option value="48">Relizane</option>
          <option value="49">Timimoun</option>
          <option value="50">Bordj Badji Mokhtar</option>
          <option value="51">Ouled Djellal</option>
          <option value="52">Beni Abbes</option>
          <option value="53">In Salah</option>
          <option value="54">In Guezzam</option>
          <option value="55">Touggourt</option>
          <option value="56">Djanet</option>
          <option value="57">El M'Ghair</option>
          <option value="58">El Meniaa</option>
        </Form.Select>
        <p>Commune</p>
        <input style={{width:"100%"}}></input>
        <p style={{marginTop:"20px"}}>Telephone</p>
        <input style={{width:"100%"}}></input>
        <p style={{marginTop:"20px"}}>Email</p>
        <input style={{width:"100%"}}></input>
        </div>
        </div>
        <div>
        <Card className='commande'>
          <Card.Body>
            <Card.Title>Votre Commande</Card.Title>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Produit</p>
            <p>Sous Total</p>
            </div>
            <hr style={{marginTop:"0"}}></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>SweathShirt Gray New</p>
            <p style={{marginLeft:"auto"}}><strong>$100</strong></p>
            </div>
            <hr style={{marginTop:"0"}}></hr>
            <div style={{display:"flex"}}>
            <p style={{marginRight:"auto"}}>Total</p>
            <p><strong>$100</strong></p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button variant="primary">Commander</Button>
            </div>
            
          </Card.Body>
        </Card>
        </div>
        </div>
        </>
      )

}