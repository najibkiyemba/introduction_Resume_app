import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./trainingCertification.css";
import {TbCertificate} from "react-icons/tb";
import IMGRevature from "../../../assets/IMGRevature.jpg";
import pythonBasics from "../../../assets/pythonBasics.jpg";
import Grammar from "../../../assets/Grammar.jpg";
import gettingPyt from "../../../assets/gettingPyt.jpg";
import pyFunction from "../../../assets/pyFunction.jpg";
import Aws from "../../../assets/Aws.jpg";
import HTML from "../../../assets/HTML.jpg";
import generation from "../../../assets/generation.jpg";
import W3school from "../../../assets/W3school.jpg";
import MLessentials from "../../../assets/MLessentials.jpg";
import MLbusiness from "../../../assets/MLbusiness.jpg";
import MLterminolog from "../../../assets/MLterminolog.jpg";
import Demystifying from "../../../assets/Demystifying.jpg";
import ExploringML from "../../../assets/ExploringML.jpg";
import PMcrisp from "../../../assets/PMcrisp.jpg";
import ProjectsFreelanceWork from "../projectsFreelanceWork/ProjectsFreelanceWork";




const trainingCertification = [
    {
        id: 1,
        title: "JAVA TRAINING",
        company: "Revature. 2022",
        role: `Spend about 400 - 500 hours learning the core fundamentals of Java proramming language
                and developed a project which divide tasks equally among a group of family members 
                and it was accepted by recruters at Revature.`,
        Image: IMGRevature
    }, 
    {
        id: 2,
        title: "PYTHON BASICS",
        company: "University of Michigan. 2020",
        role: ``,
        Image: pythonBasics
    },
    {
        id: 3,
        title: "GETTING STARTED WITH PYTHON",
        company: "University of Michigan. 2020",
        role: ``,
        Image: gettingPyt
    },
    {
        id: 4,
        title: "INTRODUCTION TO HTML",
        company: "Cousera Project Network. 2020",
        role: ``,
        Image: HTML
    },
    {
        id: 5,
        title: "PYTHON FUNCTIONS & DICTIONARIES",
        company: "UNIVERSITY OF MICHIGAN. 2020",
        role: ``,
        Image: pyFunction
    },
    {
        id: 6,
        title: "AMAZON WEB SERVICES",
        company: "AWS Platform 2020",
        role: ``,
        Image: Aws
    },
    {
        id: 7,
        title: "Grammar & Punctuation",
        company: "Division of Continuing Education. 2020",
        role: ``,
        Image: Grammar
    },
    {
        id: 8,
        title: "Certified JavaScript Developer",
        company: "W3school Training. 2022",
        role: ``,
        Image: W3school
    },
    {
        id: 10,
        title: "JUNIOR WEB DEVELOPER",
        company: "South Seattle College. 2022",
        role: ``,
        Image: generation
    },
    {
        id: 11,
        title: "MACHINE LEARNING ESSENTIALS FOR BUSINESS",
        company: "AWS Training. 2020",
        role: ``,
        Image: MLessentials
    },
    {
        id: 12,
        title: "PROCESS MODEL ON AWS STACK",
        company: "AWS Training. 2020",
        role: ``,
        Image: PMcrisp
    },
    {
        id: 13,
        title: "ML BUSINESS CHALLENGES",
        company: "AWS Training. 2020",
        role: ``,
        Image: MLbusiness
    },
    {
        id: 14,
        title: "EXPLORING THE MACHINE LEARNING TOOLSET",
        company: "AWS Training. 2020",
        role: ``,
        Image: ExploringML
    },
    {
        id: 15,
        title: "MACHINE LEARNING TERMINOLOGY & PROCESS",
        company: "AWS Training. 2020",
        role: ``,
        Image: MLterminolog
    },
    {
        id: 16,
        title: "DEMYSTIFYING AL/ML/DL",
        company: "AWS Training. 2020",
        role: ``,
        Image: Demystifying
    },

];

const TrainingCertification = () => {

    return (
        <div className="trainingCerti">
            <div className="training">
                <h2 className='educationHead' >{<TbCertificate className="educ-image"/>} TRAINING & CERTIFICATION</h2>
                <Slide
                    slidesToScroll={2} slidesToShow={2} indicators={true}
                    nextArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#ooo" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
                    {
                        trainingCertification.map((task) => (
                            <div key={task.id} className="items">
                                <img alt="revature" src={task.Image}/>
                            </div>
                        ))
                    }
                </Slide>
            </div>
            {
                <ProjectsFreelanceWork/>
            }
        </div>
    )
};

export default TrainingCertification;