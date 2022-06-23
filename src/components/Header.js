import React from "react";
import { Navbar } from "react-bootstrap";
const Headers = ({title})=>{
    
    //const {title}=props;
    return(
    
        <Navbar bg="dark" expand="lg">
 
            <Navbar.Brand href="">{title}</Navbar.Brand>
    
   
</Navbar>
    )
    

}
export default Headers;