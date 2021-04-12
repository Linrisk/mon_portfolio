import React from 'react'; // eslint-disable-next-line
import { Container, Row, Col } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const Home =() => {
    return(
        <section>
            
        <Container fluid className="home-section w-100 h-100 absolute cover-full " id="home">  
        
       
        <h1 className="Me name-title  align-items-center"  style={{ paddingTop : "27%", paddingLeft : "5%", fontSize: '10vh'}}>STCHETININE Océane 🐟:</h1>
       <i><h2  style={{paddingLeft : "5%"}}>Web development Fullstack Student by day, Artist by night </h2></i>
        </Container>
      </section>
    )
}

export default Home;