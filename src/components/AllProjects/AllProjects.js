import React from 'react';

const AllProjects = () => {

    return (
        <div className="container"> <br />
            <div className="row" style={{ color: "white", boxShadow: "5px 5px 5px 5px white", borderRadius: "2px", padding: "50px" }}>
                <div className="col-md-6">
                    <h1>Creative Agency</h1>
                    <ul>
                        <li>This is a Service Seller Web Application</li>
                        <li>Developed this full-stack website in this way where it can detect the entrance of user or admin.</li>
                        <li>And also can show the result according to the user or admin.</li>
                        <li>Users can buy any services and give feedback.</li>
                        <li>Admin can make both services and admin. And also can see the detailed information of users.</li>
                        <li>All the interaction information is saved in the database and is loaded from the database.</li>
                    </ul>
                    <p>
                        <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase Authentication,Heroku,Bootstrap,CSS3,HTML5
                    </p>
                    <br />
                    <a target="_blank" href="https://github.com/NusratJahanNisha/creative-agency-client"><button style={{ width: "150px" }} type="button" class="btn btn-outline-light ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://creative-agency-522c7.web.app/"> <button type="button" style={{ width: "150px" }} class="btn btn-light ml-2">
                        <b>Website</b>
                    </button></a>

                </div>
                <div className="col-md-6">
                    {/* <img src="https://i.ibb.co/xX7r8nJ/oie-l9dk9i-K2f2-Gb.png" style={{ width: "100%" }} class="img-fluid w-100" alt="" /> */}


                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.ibb.co/xX7r8nJ/oie-l9dk9i-K2f2-Gb.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/ZMhQDYJ/oie-VJah5rf60o78.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/prKRBdh/oie-o-I7-AJtvd6i4-Y.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>







                </div>
            </div> <br />



            <div className="row" style={{ color: "white", boxShadow: "5px 5px 5px 5px white", borderRadius: "2px", padding: "50px" }}>
                <div className="col-md-6">
                    <h1>Volunteer Network</h1>
                    <ul>
                        <li> This is a Social Event Management Application.</li>
                        <li>Engineered the full-stack website so that users can choose any volunteer work.</li>
                        <li>Using the firebase authentication system, user can see all his/her registered volunteer work.</li>
                        <li>Besides admin can see all the user details and can create an event for everyone which is shown on the home page.</li>
                        <li>All the interaction information is saved in the database and is loaded from the database.MongoDB is used in this purpose.</li>
                    </ul>
                    <p>
                        <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase Authentication,Heroku,Bootstrap,CSS3,HTML5
                    </p>
                    <a href="https://github.com/NusratJahanNisha/volunteer-network-client">
                        <button style={{ width: "150px" }} type="button" class="btn btn-outline-light ml-2"> <b>Github</b> </button>
                    </a>
                    <a target="_blank" href="https://volunteer-network-client-a51f7.web.app"> <button style={{ width: "150px" }} type="button" class="btn btn-light ml-2"><b>Website</b></button>
                    </a>

                </div>
                <div className="col-md-6">








                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.ibb.co/Z6cx4DQ/4-Event-Tasks.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="  https://i.ibb.co/MknjJN6/3-Register-to-Volunteer.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="  https://i.ibb.co/Tc3t0nq/2-Login.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>





                </div>
            </div> <br />


            <div className="row" style={{ color: "white", boxShadow: "5px 5px 5px 5px white", borderRadius: "2px", padding: "50px" }}>
                <div className="col-md-6">
                    <h1>Travel Guru</h1>
                    <ul>
                        <li>    This is a Hotel Booking Application.</li>
                        <li>Created a travel website where users can book his/her suitable place.React router is used in this purpose.</li>
                        <li>After the authentication system, the user can see the rooms available in that place.Firebase authentication system is used to take user's information.</li>
                        <li>Besides the google map increased the user experience.</li>
                        <li>This site is capable of securing both user's and hotel's information.</li>

                    </ul>
                    <p>
                        <b>Technology:</b>
                        React,React RouterFirebase Authentication,Netlify,Material UI,Bootstrap,CSS3,HTML5
                    </p>
                    <a target="_blank" href="https://github.com/NusratJahanNisha/travel-guru "><button style={{ width: "150px" }} type="button" class="btn btn-outline-light ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://travel-guru-8664d.web.app"> <button style={{ width: "150px" }} type="button" class="btn btn-light ml-2">
                        <b>Website</b>
                    </button></a>

                </div>
                <div className="col-md-6">











                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src=" https://i.ibb.co/6wbN1PZ/Booking.png" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src=" https://i.ibb.co/6vLbmqQ/Search.png" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="   https://i.ibb.co/G92hmWj/Create-account.png" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">

                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div> <br />


            <div className="row" style={{ color: "white", boxShadow: "5px 5px 5px 5px white", borderRadius: "2px", padding: "50px" }}>
                <div className="col-md-6">
                    <h1>Panda Commerce</h1>
                    <ul>
                        <li>                    This is a SPA e-commerce Application.</li>
                        <li>Where the user can see the website on any device.</li>
                        <li>Bootstrap is used to make this website responsive.</li>
                        <li>Vanilla js is used to up grate the user experience.</li>
                        <li>CSS3 increased the visual look of the website</li>

                    </ul>
                    <p>
                        <b>Technology:</b> Vanilla JavaScript,Bootstrap-4,CSS3,HTML5,Github
                    </p>
                    <a target="_blank" href="https://github.com/NusratJahanNisha/panda-commerce "><button style={{ width: "150px" }} type="button" class="btn btn-outline-light ml-2">
                        <b>   Github</b>
                    </button></a>
                    <a target="_blank" href="https://nusratjahannisha.github.io/panda-commerce/"> <button style={{ width: "150px" }} type="button" class="btn btn-light ml-2">
                        <b>Website</b>
                    </button></a>
                </div>
                <div className="col-md-6">


                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://i.ibb.co/17nxL3D/shoe-1.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/qN90z9k/bag-1.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.ibb.co/6XnsqgG/headphone.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>












                </div>
            </div> <br /> <br />

        </div >
    );
};

export default AllProjects;