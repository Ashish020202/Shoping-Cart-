import { Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate = useNavigate();
    return <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"whitesmoke",height:"60px",boxShadow:"initial" }}>
        <div style={{marginTop:"10px"}}>
        <Button onClick={()=>{
            navigate('./Home')
        }}>Home</Button>
        <Button onClick={()=>{
            navigate('./Store')
        }}>Store</Button>
        <Button onClick={()=>{
            navigate('./About')
        }}>About</Button>
        </div>
      <div style={{marginTop:"10px"}}>
        <div style={{marginRight:'20px'}}>
        <ShoppingCartIcon/>
        <Badge badgeContent={4} color="secondary"/>
        </div>
      </div>
    </div>
}