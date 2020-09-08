import React, { Profiler } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Project from "../../components/Project";

import Abacus from "../../assets/images/Projects/abacus.png"
import Multimedia from "../../assets/images/Projects/multimedia.png"
import Budget from "../../assets/images/Projects/budget.png"
import Directory from "../../assets/images/Projects/directory.png"
import NoteTaker from "../../assets/images/Projects/notetaker.png"
import Workout from "../../assets/images/Projects/workout.png"
import Google from "../../assets/images/Projects/google.png"





function Portfolio() {
    return (
    <>
        <Navbar></Navbar>

        <main className="container">
            
            <section className="row mt-5 p-3 border-bottom border-dark bg-light rounded">
                    
            <h1>
              Portfolio
            </h1>
                    
        </section>
        
        <section className="row rounded pb-3">
                <Project image={Abacus} alt={"Abacus"} title={"Abacus"} deployed={"https://guarded-cliffs-90664.herokuapp.com/"} repo={"https://github.com/erasersleeve/Abacus"}/>
                <Project image={Multimedia} alt={"Multimedia Search"} title={"Read it, Watch it!"} deployed={"https://erasersleeve.github.io/Multimedia-Search-Engine/"} repo={"https://github.com/erasersleeve/Multimedia-Search-Engine"}/>
                <Project image={Budget} alt={"Budget Tracker"} title={"Budget Tracker"} deployed={"http://safe-spire-11167.herokuapp.com/"} repo={"https://github.com/erasersleeve/Progressive-Budget-Tracker"}/>
                <Project image={Directory} alt={"Employee Directory"} title={"Employee Directory"} deployed={"https://ancient-chamber-45912.herokuapp.com/"} repo={"https://github.com/erasersleeve/Employee-Directory"}/>
                <Project image={Google} alt={"Google Books"} title={"Google Books Search"} deployed={"https://radiant-shore-36280.herokuapp.com/"} repo={"https://github.com/erasersleeve/Google-Books-Search"}/>
                <Project image={Workout} alt={"Work Out Tracker"} title={"Work Out Tracker"} deployed={"https://stark-reaches-68321.herokuapp.com/"} repo={"https://github.com/erasersleeve/Workout-Tracker"}/>
                

        </section>
        
    </main>
        <Footer></Footer>
    </>    
    );
}
export default Portfolio