import React, {useState, useEffect} from "react";
import "./resumeIntroduction.css";
import {MdOutlineSummarize} from "react-icons/md";
//import {MdWavingHand} from "react-icons/md";



const resumeData = {
    introduction: `Hi there, my name is Najib. Am a React Engineer with 2+ years of experience writing software using JavaScript, React, and other technologies. Am currently working on several projects and hosting them on Netlify. Am confident to debug and build programs that uses async, await, promises, asynchronous, prop drilling in React components, React Hooks, Error Boundaries, useContext, Updating states using event handlers, and much more. Before web development, I worked as a technician for Makula Company located in Uganda. My role was to repair phones and computers and other IT devices in both hardware and software. During this position, I used to work on different devices from customers. Most of these devices, had different problems such as replacing charging systems, networking, phone heating, cable installation in computers, water damage, software upgrading, data recovery, replacing damaged parts, and more. Through hard working and good communication skills, I became popular, and I was ranked among the best 5 technicians in that company. On top of that, am also pursuing a career as an IT support specialist and CompTia A+ Certification through Amazon. `
}

const ResumeIntroduction = (props) => {
    const [count, setCount] = useState([0, '']);
    //const [index1, setIndex1] = useState(0);
    useEffect(() => {
        function handleTimeOut() {
            //const indexValue = setTimeout(() => setIndex1(prev => prev + 1), 100);
            let summary = resumeData.introduction;
            if(count[0] < summary.length -1 ) {
                setTimeout(() => setCount(prev => [
                    prev[0] + 1, prev[1] + summary[prev[0]], ...prev
                ]), 70);
            }
        }
        return clearTimeout(handleTimeOut());

    });

    function handleChange() {

    }
    
    return (
        <div className="resumeIntro">
            <div className="introduction divBody">
                <div className="group-one">
                    <h2 className='educationHead' >{<MdOutlineSummarize className="educ-image"/>} INTRODUCTION</h2>
                </div>
                <br/>
                <textarea
                    onChange={handleChange}
                    value={count[1]}
                    rows='5'
                    className="introduction" 
                    id='summary'>
                </textarea>
            </div>
        </div>
    );
};

export default ResumeIntroduction;