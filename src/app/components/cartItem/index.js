'use client'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function CartItem(props){

  const handleClick = async () =>{
    const result = axios.post("/api/deleteFromCart",{
      name: props.title,
    }).then(function (response) {
      console.log(response.data.success);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const url = " https://res.cloudinary.com/dsyvhttva/image/upload/v1703430079/gip/"
    return (
      <>
          <tr>
            <td>
              <div style={{display:"flex"}}>
              <IconButton aria-label="delete" style={{marginRight:"10px"}}>
         <DeleteIcon onClick={handleClick} />
        </IconButton>
                  <img src={url+props.image} alt='art' style={{width:"75px",marginRight:"10px"}}></img>
                  <h5 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{props.title}</h5>
              </div>
            </td>
            <td style={{verticalAlign:"middle"}}>{props.price}</td>
            <td style={{verticalAlign:"middle"}}>{props.size}</td>
            <td style={{verticalAlign:"middle"}}>{props.price}</td>
          </tr>
      </>
    )
}