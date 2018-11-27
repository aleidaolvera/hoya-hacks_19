import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button } from 'reactstrap';
import Header from '../components/header.js'


const IndexPage = () => (
  <div>
    <Header></Header>
    <Jumbotron>
     <h1>Title Text</h1>
     <p>Subtitle Text</p>
     <Button color="primary">Learn more</Button>
   </Jumbotron>
   </div>
)


export default IndexPage
