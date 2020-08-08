import React, { useState } from "react";
import Navbar from "../../Navbar"
import Footer from "../../Footer";



function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Subject: " + subject);
      };

    return(
    <>
    <Navbar></Navbar>
       <section class="row mt-5 p-3 border-bottom border-dark bg-light rounded">
            
            <h1>
                Contact
            </h1>
                            
        </section>
                
        <section class="row rounded pb-3">
            
            <div class="col-12 col-md-8"> 
                <form action="action_page.php" onSubmit={handleSubmit}>
            
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." onChange={e => setName(e.target.value)}/>
                    
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email.." onChange={e => setEmail(e.target.value)}/>

                    <label for="subject">Subject</label>
                    {/* style={"height:200px"} */}
                    <textarea id="subject" name="subject" placeholder="Write something.."onChange={e => setSubject(e.target.value)}/>
                
                    <input type="submit" value="Submit" />

                </form>
            </div>     

            {/* style="width: 18rem;" */}
            <aside class="card col-12 col-md-4 border-bottom-0">    
                <div class="card-body text-center">
                    <h2 class="card-title border-bottom">External Links</h2>
                    <a href="https://github.com/erasersleeve" class="link">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/timwinters99/" class="link">LinkedIn</a>
                    <br></br>
                    <a href="https://github.com/erasersleeve/Responsive-Portfolio/blob/master/assets/supplemental/Resume.pdf" class="link">Resume</a>
                </div>
                   
            </aside>           
            
                        
        </section>

        <Footer></Footer>
    </>
    )
}

export default Contact