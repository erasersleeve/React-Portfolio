import React from "react";

function About() {
    return(
    <>
        <section class="row mt-5 p-3 border-bottom border-dark bg-light rounded">   
            <h1>
            About Me
            </h1>
        </section>
                
        <section class="row pt-3 pb-3 rounded">
            <section class="col-7">            
            <img class="headshot pr-3" src="https://github.com/erasersleeve/Responsive-Portfolio/blob/master/assets/images/head.jpg?raw=true" alt="Headshot" />     
            <p>
                Hello and welcome! My name is Tim Winters and this is my portfolio site. I'm a 26 year old with a background in education and the humanities trying to start a new career path. On my portfolio page you can find some examples of my work, and if you want to know more or reach out to me you can find links to my other accounts as well as a form to send me a message. 
                
                </p>
            </section>  
        </section>
    </>
    )
}

export default About