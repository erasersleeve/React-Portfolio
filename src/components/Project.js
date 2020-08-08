import React from "react";

function Project(props) {
    return (
            
            <section className="portbtn col-12 col-md-6">
            <div className="card mx-auto mt-5">
                <h2 className="text-center">{props.title}</h2>
                <img src={props.image} className="card-img-top" alt={props.alt} />
                    <div className="d-flex">
                        <a href={props.deployed} className="btn btn-info deployed">Deployed App</a>
                        <a href={props.repo}  className="btn btn-info repo">Repository</a>
                    </div>
            
            </div>
            </section>
    );
}

export default Project;

  
