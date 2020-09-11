import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import Picture from "../../assets/images/head.jpg";

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

                        Hello and welcome to my portfolio site! I am Tim Winters, and I am a full stack web developer. My professional background is in education and the humanities, but I wanted to make a change and therefore completed the University of Pennslyvania's LPS Coding Bootcamp program. Web development, and coding in general, satisfies my problem solving tick whie also allowing for great creativity, collaboration, and curiosity. On my portfolio page one can find examples of my work, and contact information is available on the contact page.  
                    
                    </p>              
                </section>  
            </section>
      
          </main>     
            
        <Footer></Footer>
    </>
    )
}

export default About