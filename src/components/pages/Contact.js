import React from "react";

function Contact() {
    return(
    <>
       <section class="row mt-5 p-3 border-bottom border-dark bg-light rounded">
            
            <h1>
                Contact
            </h1>
                            
        </section>
                
        <section class="row rounded pb-3">
            
            <div class="col-12 col-md-8"> 
                <form action="action_page.php">
            
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." />
                    
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email.." />

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"/>
                
                    <input type="submit" value="Submit" />

                </form>
            </div>     

            <aside class="card col-12 col-md-4 border-bottom-0" style="width: 18rem;">    
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
    </>
    )
}

export default Contact