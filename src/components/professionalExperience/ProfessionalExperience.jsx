import React from "react";
import "./professionalExperience.css";
import {FaHistory} from "react-icons/fa";

import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const workExperience = [
    {
        head: 'WEB DEVELOPER',
        paragraph: 'Projects. Feb 2022 - Present',
        experience: 'Working night and day on personal frontend projects using Javascript and React. Through this concept, I improved and developed a strong understanding of React and Javascript syntax of promises, asynchronous programming, and more. I have worked on different projects and measure their performace using React Hooks such as useMemo.'

    },
    {
        head: 'PHONE & COMPUTER TECHNICIAN',
        paragraph: 'Makulu Tech(MK). Aug 2018',
        experience: `I didn't go to school to learn how to repair phones and computers in both hardware and software. I was naturally gifted by God with all skills required to repair IT devices with different problems such as water damage, installing latest software on computers and phones, network problems, and replacing charging systems. Before coding my role was to fix damaged phones, computers, and other devices recieved from customers. Through communication and strong attention to details, I satisfied clients needs, and I was ranked among the best employees.`
    
    },
    {
        head: 'GENERAL CONTRACTOR',
        paragraph: 'Jommai Property Consultant. Jun 2016',
        experience: `Before the technician role, I worked as general contractor on low level. During this position, I was expected to perform basic construction on site. Such as, mixing gravels, sand, cement, record keeping, and helping engineers with measuments at start and end of the shift.`
    },
    {
        head: 'WAREHOUSE ASSOCIATE',
        paragraph: 'Amazon.com, Inc. 2020',
        experience: `At the start of the shift, all associates were required to perform physical and body streching for about 10 - 20 minutes during stand up meetings. These shifts were for 10 hours and invloved of walking almost every where in the warehouse, standing up and down for long hours, stawing packages to their assigned containers, and loading items to the coveyor belt. It was a physical position that required strength and hard working to be considered productive by managers.`
    },
]

const ProfessionalExperience = () => {

    function handleChange() {

    }

    


    return (
            <div className="history resumeIntro">
                 <div className="slide-container">
                    <h2 className='educationHead' >{<FaHistory className="educ-image"/>} WORK EXPERIENCE</h2>
                    <Slide
                        nextArrow={<button style={{
                            background: 'none',
                            border: '0px',
                            width: '10px',
                          }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                            background: 'none',
                            border: '0px',
                            width: '10px'
                          }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
        
                    {
                        workExperience.map((item, id) => {
                            return (
                              <div key={id} className="each-slide-effect">
                                    <div className="group-one slide-headers">
                                        <h4 className="schooltitle">{ item.head}</h4>
                                        <p className="schooltitle">{ item.paragraph}</p>
                                    </div>
                                       <textarea
                                            onChange={handleChange}
                                            rows='4'
                                            className="introduction" 
                                            id='summary'
                                            value={item.experience}
                                       ></textarea>
                                </div>
                            );
                        })
                    }
                    </Slide>
                 </div>
            
        </div>
    );
};

export default ProfessionalExperience;