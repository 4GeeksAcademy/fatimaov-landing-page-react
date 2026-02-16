import React from "react";

function Jumbotron() {
    return (
        <div className="row">
            <div className="col-12 p-2">
                <div className="card p-5 bg-light border-0">
                    <div className="card-body">
                        <h1 className="display-2 my-3 fw-normal">A Warm Welcome!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ex et assumenda porro voluptas officiis, earum odio aliquam ab mollitia optio dolorem tempora corporis eum quos debitis pariatur dolore nemo.</p>
                        <button className="btn btn-lg btn-primary fw-bold " type="button">
                            Call to action!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;