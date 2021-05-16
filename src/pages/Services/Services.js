import React from 'react';
import './Services.css';
import { Container } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
const Services =() => {
    return(
        <Container fluid className=" containerfluid w-100 h-100 align-items-center">
            <h1> Services </h1>
            <div className="container">
                <div className=" proj proj1"></div>
                <div className=" proj proj2"></div>
                <div className="proj proj3"></div>
                <div className=" proj proj4"></div>
                <div className=" proj proj5"></div>
                <div className=" proj proj6"></div>
            </div>
        </Container>
    )
}

export default Services;