import React  from "react";
import "./projectsFreelanceWork.css";
import {GoProject} from "react-icons/go";
import validation from "../../../assets/validation.jpg";
import restaurnt from "../../../assets/restaurnt.jpg";
import portfolio from "../../../assets/portfolio.jpg";
import shopping from "../../../assets/shopping.jpg";
import generationUSA from "../../../assets/generationUSA.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const projects = [
    {
        projectName: "VALIDATION APP",
        description: "The main purpose of this application is to validate user data.",
        Image: validation,
        link: "https://najibkiyemba.github.io/validationFormApp/"
    },
    {
        projectName: "RESTAURANTS FINDER",
        description: "This application fetch data from adifferent website using api and it help users find near by restaurants.",
        Image: restaurnt,
        link: ""
    },
    {
        projectName: "PERSONAL BLOG",
        description: "I developed a personal blog using JavaScript and React. It explains more about me and my role in tech.",
        Image: portfolio,
        link: "https://najibkiyemba.github.io/myReactPortfolio/"
    },
    {
        projectName: "ONLINE SHOPPING APP",
        description: "Under development...",
        Image: shopping,
        link: ""
    },
    {
        projectName: "ONLINE SURVEY FORM",
        description: "This application help students to give feedback on there experience in learning how to code.",
        Image: generationUSA,
        link: "https://najibkiyemba.github.io/onlineSurveyForm/"
    }
];

const ProjectsFreelanceWork = () => {
    
    return (
        <div id="bigDiv">
            <div className="trainingCerti">
                
                <div className="training">
                    <h2 className='educationHead' >{<GoProject className="educ-image"/>} PROJECTS & FREELANCE WORK</h2>
                    <Slide
                        nextArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} prevArrow={<button style={{
                        background: 'none',
                        border: '0px',
                        width: '0px'
                      }}><svg fill="#000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}
                     slidesToScroll={2} slidesToShow={2} indicators={true}
                    >
                    {
                        projects.map((pro, id) => (
                            <div key={id} className="items">
                                <h4 className="image-header">{pro.projectName}. <a target="-blank" href={pro.link}><strong id="viewer">view</strong></a> project</h4>
                                <img alt="#" src={pro.Image}/>
                            </div>
                        ))
                    }
                    </Slide>
                </div>
            </div>
        </div>
        ); };
        
        
export default ProjectsFreelanceWork;
