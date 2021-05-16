import React from 'react'; // eslint-disable-next-line
import { Container, Row, Col } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

const Home =() => {
    return(
        <section>
            
        <Container fluid className="home-section w-100 h-100 absolute cover-full " id="home">  
      
        <h1 className="Me name-title  align-items-center"  style={{ paddingTop : "15%", paddingLeft : "5%", fontSize: '10vh'}}>STCHETININE Océane </h1>
       <i><h2  style={{paddingLeft : "5%"}}>In Progress.... </h2></i>
        </Container>
        
        <div className="button" style={{ marginLeft:"80%",marginTop:"15%",borderRadius : "50px", border:"4px solid #20317D", justifyContent: "center", alignItems: "center"}}>
          <p>ART</p>
        </div>
      </section>
    )
}

export default Home;