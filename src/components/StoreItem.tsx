import { Button, Typography } from "@mui/material"
import Card from "@mui/material/Card"

type StoreItemprops={
    id:number,
    name:string,
    price:number,
    imgUrl:string
  }
  
  export default function StoreItem({id,name,price,imgUrl}:StoreItemprops){
    const quantity=1;
    return<>
       <Card  style={{height:300, objectFit:'cover',margin:5}}>
          <img style={{alignContent:"center"}} src={imgUrl} alt="" />
      </Card>
        <Card style={{display:'flex', justifyContent:'space-between',alignItems:'baseline',marginBottom:4}}>
            <Typography fontSize={20}>{name}</Typography>
            <Typography>{price}</Typography>
        </Card>
        <div>
        {quantity===1?(
               <Button variant="contained" fullWidth style={{marginTop:8}}>+ Add to Cart</Button>
            ):(
                <div style={{display:'flex', flexDirection:'column',alignItems:'center',gap:'.5rem'}}>
                    <div style={{display:"flex",alignItems:'center',gap:'.5rem'}}>
                        <Button variant="contained" size="small">-</Button>
                        <div>
                            <span>{quantity} in cart</span>
                        </div>
                        <Button variant="contained" size="small">+</Button>
                    </div>
                        <Button variant="contained" color="error" size="small">Remove</Button>
                </div>
            )}
        </div>
      </>


      
  }
  