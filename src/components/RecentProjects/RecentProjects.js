import React from 'react';
import { useHistory } from 'react-router-dom';

const RecentProjects = () => {
    const history = useHistory();
    const handleAllProjects = () => {
        history.push("/allProjects");

    }
        return (
            <div className="container ">
                <h2 style={{ color: "white", textAlign: "center", marginBottom: "80px" }}>Recent Projects</h2>
                <div class="card-deck ">
                    <div class="card bg-dark" style={{ boxShadow: "5px 5px 5px 5px white" }}>
                        <img src="https://i.ibb.co/b6VLfjk/4-Customar-status.png" class="card-img-top img-fluid" alt="..." />
                        <div class="card-body " style={{ color: "white" }}>
                            <h5 style={{ textAlign: "center" }} class="card-title">Creative Agency</h5>
                            <p class="card-text" >A service seller online full-stack agency web application where you can buy any services and can give feedback after firebase authentication.
                       </p>
                        </div>
                        <div class="card-footer">
                            <p style={{ color: "white", fontSize: "15px" }}> <span style={{ color: "white", fontSize: "17px" }}>
                                <b>Technology:</b>
                            </span>  React,React Router, JavaScript(ES6), Bootstrap-4 for front-end; Node.js, Express, Heroku for back-end; Firebase for hoisting and authentication; MongoDB for database.</p>

                            <a target="_blank" href="https://github.com/NusratJahanNisha/creative-agency-client"><button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2">
                                <b>   Github</b>
                            </button></a> <br />
                            <a target="_blank" href="https://creative-agency-522c7.web.app/"> <button type="button" style={{ width: "305px", marginBottom: "7px" }} class="btn btn-light ml-2">
                                <b>Website</b>
                            </button></a>
                            <a href="">
                                <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2"> <b>Visit All Projects</b> </button>
                            </a>
                        </div>
                    </div>
                    <div class="card bg-dark" style={{ boxShadow: "5px 5px 5px 5px white" }}>
                <img src="https://i.ibb.co/Z6cx4DQ/4-Event-Tasks.png" class="card-img-top" alt="..." />
                        <div class="card-body" style={{ color: "white" }}>
                            <h5 style={{ textAlign: "center" }} class="card-title">Volunteer Network</h5>
                            <p class="card-text">A social event management online full-stack application where you can register any event and can see all your registered events after firebase authentication.</p>
                        </div>
                        <div class="card-footer">

                            <p style={{ color: "white", fontSize: "15px" }}> <span style={{ color: "white", fontSize: "17px" }}>
                                <b>Technology:</b>
                            </span>  React,React Router, JavaScript(ES6), Bootstrap-4 and Material UI for front-end; Node.js, Express, for back-end; Firebase for hoisting and authentication; MongoDB for database. </p>
                            <a href="https://github.com/NusratJahanNisha/volunteer-network-client">
                                <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2"> <b>Github</b> </button>
                            </a> <br />
                            <a target="_blank" href="https://volunteer-network-client-a51f7.web.app"> <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-light ml-2"><b>Website</b></button>
                            </a>
                            <a href="">
                                <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2"> <b>Visit All Projects</b> </button>
                            </a>

                        </div>
                    </div>
                    <div class="card bg-dark" style={{ boxShadow: "5px 5px 5px 5px white" }}>
                        <img src="https://i.ibb.co/6wbN1PZ/Booking.png" class="card-img-top" alt="..." />
                        <div class="card-body" style={{ color: "white" }}>
                            <h5 style={{ textAlign: "center" }} class="card-title">Travel Guru</h5>
                            <p class="card-text">A hotel booking online application where you can book your desired destination with your suitable time and date.You can also explore the destination with the help of google map.</p>
                        </div>
                        <div class="card-footer">
                            <p style={{ color: "white", fontSize: "15px" }}> <span style={{ color: "white", fontSize: "17px" }}>
                                <b>Technology:</b>
                            </span>   React, React Router, JavaScript(ES6), Bootstrap-4 , Material UI, HTML and CSS3 for front-end; Firebase for hoisting and authentication; </p>

                            <a target="_blank" href="https://github.com/NusratJahanNisha/travel-guru "><button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2">
                                <b>   Github</b>
                            </button></a> <br />
                            <a target="_blank" href="https://travel-guru-8664d.web.app"> <button style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-light ml-2">
                                <b>Website</b>
                            </button></a>

                            <button onClick={handleAllProjects} style={{ width: "305px", marginBottom: "7px" }} type="button" class="btn btn-outline-light ml-2"> <b>Visit All Projects</b> </button>


                        </div>
                    </div>
                </div>


            </div>
        );
    };

    export default RecentProjects;