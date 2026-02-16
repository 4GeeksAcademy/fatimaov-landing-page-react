import React from "react";

function CardOne() {
    return (
        <div className="col-auto p-2">
            <div className="card text-center" style={{ height: "500px", width: "300px" }} >
                <div className="card-img-top d-flex align-items-center justify-content-center h2" style={{ minHeight: "200px", background: "lightgray", color: "grey" }} >
                    500 x 325
                </div>
                <div className="card-body">
                    <h5 className="card-title h2 fw-bold">Card title</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim nulla laudantium non illo natus</p>
                </div>
                <div className="card-footer text-body-secondary bg-white">
                    <a href="#" className="btn btn-primary my-3 fw-bold">Find Out More!</a>
                </div>
            </div>
        </div>


    )
}

export default CardOne;