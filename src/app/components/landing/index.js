import {Merriweather_Sans} from 'next/font/google';
import Button from 'react-bootstrap/Button';
const meri = Merriweather_Sans({subsets: ['latin']});


export default function Landing(){
    return(
        <>
            <div className='d-none d-lg-block' style={{width:"100%",height:"80vh",backgroundColor:"#ece8e7",overflow:"hidden"}}>
              <div style={{display:"flex"}}>
               <div className={meri.className} style={{marginTop:"70px",marginLeft:"150px",marginRight:"auto"}}>
               <div style={{backgroundColor:"white",textAlign:"center",rotate:"-2deg",display:"inline-block",paddingRight:"8px",paddingLeft:"8px"}}>
               <h1 style={{marginBottom:"0",rotate:"2deg",fontWeight:"900",fontSize:"45px",letterSpacing:"2px"}}>CLASSIC</h1>
               </div>
               <h1 style={{fontWeight:"900",marginLeft:"8px",marginBottom:"0",fontSize:"45px",letterSpacing:"2px"}}>WITH</h1>
               <div style={{backgroundColor:"#ff8900",textAlign:"center",rotate:"-2deg",display:"inline-block",paddingRight:"8px",paddingLeft:"8px"}}>
               <h1 style={{marginBottom:"0",rotate:"2deg",fontWeight:"900",fontSize:"45px",letterSpacing:"2px"}}>NATURAL</h1>
               </div>
               <h1 style={{fontWeight:"900",marginLeft:"8px",fontSize:"45px",letterSpacing:"2px"}}>TWIST</h1>
               <p style={{marginLeft:"8px",marginTop:"30px",marginBottom:"30px",fontWeight:"lighter"}}>Find your classic style now !</p>
               <div style={{display:"flex",justifyContent:"center"}}>
               <Button variant="dark" size='lg'>Shop now</Button>
               </div>
               </div>
               <div style={{marginRight:"200px",marginTop:"0px"}}>
                <img style={{height:"583px"}} src="landing2.png"></img>
               </div>

               </div>
              </div>
              <div className='d-lg-none' style={{display:"flex",justifyContent:"center",width:"100%",height:"500px",backgroundColor:"#ece8e7",overflow:"hidden"}}>
              <div style={{display:"flex",marginTop:"50px"}}>
               <div className={meri.className} style={{marginTop:"70px",marginLeft:"10px",marginRight:"auto"}}>
               <div style={{backgroundColor:"white",textAlign:"center",rotate:"-2deg",display:"inline-block",paddingRight:"8px",paddingLeft:"8px"}}>
               <h1 style={{marginBottom:"0",rotate:"2deg",fontWeight:"900",fontSize:"30px"}}>CLASSIC</h1>
               </div>
               <h1 style={{fontWeight:"900",marginLeft:"8px",marginBottom:"0",fontSize:"30px"}}>WITH</h1>
               <div style={{backgroundColor:"#ff8900",textAlign:"center",rotate:"-2deg",display:"inline-block",paddingRight:"8px",paddingLeft:"8px"}}>
               <h1 style={{marginBottom:"0",rotate:"2deg",fontWeight:"900",fontSize:"30px"}}>NATURAL</h1>
               </div>
               <h1 style={{fontWeight:"900",marginLeft:"8px",fontSize:"30px"}}>TWIST</h1>
               <p style={{marginLeft:"8px",marginTop:"20px",marginBottom:"20px",fontWeight:"lighter"}}>Find your classic style<br></br> now !</p>
               <div style={{display:"flex",justifyContent:"center"}}>
               <Button variant="dark" size='lg'>Shop now</Button>
               </div>
               </div>
               <div style={{marginTop:"50px"}}>
                <img style={{height:"250px"}} src="landing2.png"></img>
               </div>

               </div>
              </div>
        </>
    )
}