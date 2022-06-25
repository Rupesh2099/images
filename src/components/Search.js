import React from "react";
import {Container, Row, Col, Form,Button, Alert } from "react-bootstrap";

const Search = ({handleSubmit,word,setWord}) => {
  return (
    <Container>
      <Row>
        <Col>
       <Form onSubmit={handleSubmit}> 
         <Form.Row>
           <Col>
           <Form.Control
           type="text"
           value={word}
           onChange= {
             (e)=>
             setWord
               (e.target.value)}

           
            
           
            placeholder="Search Images For"></Form.Control>
           </Col>
           <Col><Form.Control placeholder="google"  onChange= {
             (e)=>
             setWord
               (e.target.value +"Welcome")}value={word}></Form.Control></Col>
           <Col><Form.Control placeholder="facebook" value={word}></Form.Control></Col>
           <Col>
           <Button variant="primary" type="submit">
            Search
             </Button>
           </Col>
         </Form.Row>
       </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default Search;
