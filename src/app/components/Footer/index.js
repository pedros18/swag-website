import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer(){
    return(
        <>
            <div style ={{display:"flex",justifyContent:"center",height:"200px",backgroundColor:"black",marginTop:"100px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",marginRight:"auto",marginLeft:"20px"}}>
              <h6 style={{paddingLeft:"15px",paddingRight:"15px"}}>Help</h6>
              <p style={{fontSize:"13px",color:"gray"}}>Contact us</p>
              <p style={{fontSize:"13px",color:"gray"}}>Order status</p>
              <p style={{fontSize:"13px",color:"gray"}}>Returns</p>
    
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",marginLeft:"auto",marginRight:"auto"}}>
              <h6>About us</h6>
              <p style={{fontSize:"13px",color:"gray"}}>News</p>
              <p style={{fontSize:"13px",color:"gray"}}>Careers</p>
              <p style={{fontSize:"13px",color:"gray"}}>Purpose</p>
    
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white",marginLeft:"auto",marginRight:"auto"}}>
              <h6>Promotions</h6>
              <p style={{fontSize:"13px",color:"gray"}}>Student</p>
              <p style={{fontSize:"13px",color:"gray"}}>Coupons</p>
              <p style={{fontSize:"13px",color:"gray"}}>Events</p>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"20px"}}>
             <FacebookIcon style={{width:"30px",height:"30px",marginBottom:"10px"}}/>
             <InstagramIcon style={{width:"30px",height:"30px",marginTop:"10px",marginBottom:"10px"}}/>
             <TwitterIcon style={{width:"30px",height:"30px",marginTop:"10px"}}/>
            
            </div>
            </div>
        </>
    )
}