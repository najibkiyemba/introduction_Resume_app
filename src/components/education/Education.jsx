import React from "react";
import "./education.css";
import {FaUserGraduate} from "react-icons/fa";

const education = {
    highSchool: `During my time of high school, I was teaching myself how to code in python and other programming languages through Cousera learning platform. I was on and off in coding due to the pressure I had from school courses and excitement to graduate as soon as possible to join college and pursue a degree in Software development. Thankfully, I graduated high school with flying colors and archived Safety & Health Fundamental certification through OSHA.`,
    college: `Upon graduating high school, I attended Ivy Tech community college in South Bend Indiana to pursue a degree in Software development. This was for only one semester after discovering several alternative ways of landing a career in software development. I completed web development courses, wrote 3+ essays, and my overall experience at college was great.`
};

const Education = () => {

    function handleChange() {

    }

    return (
        <div>
            <div className="resumeIntro">
                <div className="introduction divBody">
                    <h2 className='educationHead' >{<FaUserGraduate className="educ-image"/>} EDUCATION</h2>
                    <div className="group-one">
                        <h4 className="schooltitle">HIGH SCHOOL DIPLOMA</h4>
                        <p className="schooltitle">Excel Center South Bend, Idiana. Aug 2021</p>
                    </div>
                    <br/>
                    <textarea
                        onChange={handleChange}
                        value={education.highSchool}
                        rows='4'
                        className="introduction" 
                        id='summary'>
                    </textarea>
                </div>
            </div>

            <div className="resumeIntro">
                <div className="introduction divBody">
                    <h2 className='educationHead' >{<FaUserGraduate className="educ-image"/>} EDUCATION</h2>
                    <div className="group-one">
                        <h4 className="schooltitle">ASSOCIATES OF APPLIED SCIENCE.</h4>
                        <p className="schooltitle">Ivy Tech Community College USA. Expected 2024</p>
                    </div>
                    <br/>
                    <textarea
                        onChange={handleChange}
                        value={education.college}
                        rows='4'
                        className="introduction" 
                        id='summary'>
                    </textarea>
                </div>
            </div>
        </div>
    );
};

export default Education;