import Header from "../component/header";
import Sidebar from "../component/sidebar";
import Products from "../component/product";
import { Box } from "@mui/material";

export default function page(){
    return(
        <>

        <Header/>
        <Box sx={{display:'flex'}}>

            <Sidebar/>
            <Box sx={{margin:{xs:0,md:'10px'}, width:{xs:'100%',md:'90%'}}}>
                <Products/>
            </Box>
            
        </Box>
        
        </>
    )
}