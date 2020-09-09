import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import github from "../../assets/images/icons/github.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import cv from "../../assets/images/icons/cv.svg"
import { set } from "mongoose";





function Contact() {
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        message: ""
      });
    const [alert, setAlert] = useState("");
    
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.message) {
          API.saveMessage({
            name: formObject.name,
            email: formObject.email,
            message: formObject.message,
          })
    
            .then((res) => {
              console.log(res);
              setAlert("Sign Up Successful!");
              setFormObject({
                name:"",
                email:"",
                message:""
              });
              if (res.data) {
                console.log("form submitted: ", formObject);
    
              } else {
                console.log("Error sending message to database");
              }
            })
            .catch((err) => {console.log(err)});
        }
      }


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        // console.log(formObject)
        setFormObject({ ...formObject, [name]: value });
  }

    return(
    <>
    <Navbar></Navbar>
    <main className="container">

       <section className="row mt-5 p-3 border-bottom border-dark bg-light rounded">
            
            <h1>
                Send me a Message
            </h1>
            <h6 className={alert.includes("Invalid") ? "alert-danger" : "alert-success"}>{alert}</h6>

                            
        </section>
                
        <section className="row rounded pb-3">
            
            <div className="col-12 col-md-8"> 
                <form className="Message">
                    
                    
                                          {/* onClick needs the () => function() format so the function actally waits for the button click */}
                                          {/* onChange={e => setName(e.target.value)} */}
                    <input type="text" name="name" value={formObject.name} placeholder="Your name" onChange={handleInputChange}/>
                    
                    
                    <input type="text" name="email" value={formObject.email} placeholder="Email" onChange={handleInputChange}/>

                    
                    {/* style={"height:200px"} */}
                    <textarea id="message" name="message" value={formObject.message} placeholder="Message" onChange={handleInputChange}/>

                    <button className="btn" disabled={!formObject.name && formObject.email && formObject.message} onClick={handleFormSubmit}>Send</button>
                    <br></br>
                    <br></br>
                    <h3>Or reach me at timwinters99@gmail.com</h3>

                </form>
            </div>     

            {/* style="width: 18rem;" */}
            <aside className="card col-12 col-md-4 border-bottom-0">    
                <div className="card-body text-center">
                    <h2 className="card-title border-bottom">External Links</h2>
                                        
                    <a href="https://github.com/erasersleeve" className="link">
                      <img src={github} width="50" height="50"></img>
                    </a>

                    <br></br>
                    <br></br>

                    <a href="https://www.linkedin.com/in/timwinters99/" className="link">
                      <img src={linkedin} width="50" height="50"></img>
                    </a>

                    <br></br>
                    <br></br>

                    <a href="https://github.com/erasersleeve/React-Portfolio/blob/master/client/src/assets/supplemental/Resume.pdf" className="link">
                      <img src={cv} width="50" height="50"></img>
                    </a>

                    <br></br>
                    <br></br>

                    
                </div>
                   
            </aside>           
            
                        
        </section>
    </main>

        <Footer></Footer>
    </>
    )
}

export default Contact