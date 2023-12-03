import storeItem from "../data/item.json"
import StoreItem from "../components/StoreItem"
import { Grid } from "@mui/material"
import { Card } from "@mui/material";




export function Store() { 
  return (
    <div>
      <Grid container spacing={4}>
        <> 
          {storeItem.map((item) => (
            <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
              <StoreItem {...item} />
            </Grid>
          ))}
        </>
      </Grid>
    </div>
  );
    
}

