import React from 'react';
import { Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css'

const About =() => {
    return(
        <Container fluid className=" containerfluid w-100 h-100 align-items-center">
            <div className="display">
                <div className="prez col-lg-8">
                    <h1 className="introduce">LET'S ME INTRODUCE MYSELF</h1>
                    <hr/>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus fringilla tincidunt. Praesent porttitor elit vitae sapien
                    interdum, sed molestie ante posuere. Suspendisse potenti.
                    Pellentesque tempor quam lectus, ut malesuada nisl semper vel. 
                    Aliquam erat volutpat. Suspendisse pharetra ac tortor tincidunt
                        mattis. Mauris maximus finibus odio sit amet laoreet. Ut auctor 
                        eleifend urna placerat gravida. Duis at tempor quam. Aenean
                        varius mollis libero, ac sollicitudin orci faucibus vel. 
                    </p>
                    <hr/>
                    <p> Any Idea contact me</p>
                    <p> Mon cv </p>

                    <div class="passions">
                    <h1 className="introduce passion">PASSIONS</h1> <hr/>
                        <div class="p">
                            <div class="p1"/>
                            <div class="p2"/>
                            <div class="p3"/>
                            <div class="p4"/>
                        </div>
                    </div>
                </div>    
                <div className="color col-lg-4">
                    <div className="rond"></div>
                    <p></p>
                    <div className="choose">
                        <div className="color1"></div>
                        <div className="color1"></div>
                        <div className="color1"></div>
                        <div className="color1"></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About;