import { CldImage } from 'next-cloudinary';


export default function Categorie(props){
  const url = " https://res.cloudinary.com/dsyvhttva/image/upload/v1703430079/gip/"

   return( 
  <>
    <div sm style={{textAlign:"left",marginRight:"0px",paddingBottom:"20px",width:"fit-content"}}>
      <a href={"/" + props.kind} style={{textDecoration:"none"}}>
      <div style={{position:"relative"}}>
        <img src={url + props.image} alt="" style={{paddingTop:"10px",paddingBottom:"10px",width:"400px",height:"400px"}}></img>
      </div>
      </a>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <p style={{color:"black"}}>{props.kind}</p>
      </div>
    </div>
  </>
   )
}