import React from "react";
import Navbar from "../../Navbar"
import Footer from "../../Footer";
import Picture from "../../../assets/images/head.jpg";

function About() {
    return(
    <>
        <Navbar></Navbar>
        <main className="container">
            
            <section className="row mt-5 p-3 border-bottom border-dark bg-light rounded">   
              <h1>
                About Me
              </h1>
            </section>
                  
            <section className="row pt-3 pb-3 rounded">
                <section className="col-7">   
                    <img src={Picture} alt="headshot" className="headshot pr-3"/>
                    <p>
                        Hello and welcome! My name is Tim Winters and this is my portfolio site. I'm a 26 year old with a background in education and the humanities trying to start a new career path. On my portfolio page you can find some examples of my work, and if you want to know more or reach out to me you can find links to my other accounts as well as a form to send me a message on the Contact page. 
                    
                    </p>              
                </section>  
            </section>
      
          </main>     
            
        <Footer></Footer>
    </>
    )
}

export default About