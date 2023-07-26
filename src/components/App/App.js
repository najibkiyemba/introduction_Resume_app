import './App.css';
import ResumeIntroduction from '../resumeIntroduction/ResumeIntroduction';
import ContactInformation from '../contactInformation/ContactInformation';
import ProfessionalExperience from '../professionalExperience/ProfessionalExperience';
import Skills from '../skills/Skills';
import Education from '../education/Education';
//import TrainingCertification from '../optionalParts/trainingCertificationLicenses/TrainingCertification';
//import ProjectsFreelanceWork from '../optionalParts/projectsFreelanceWork/ProjectsFreelanceWork';
//import VolunteerWork from '../optionalParts/volunteerWork/VolunteerWork';
//import AwardsAndHonor from '../optionalParts/awardsAndHonors/AwardsAndHonor';
//import HobbiesInterests from '../optionalParts/hobbiesAndInterests/HobbiesInterests';
import Footer from '../footer/footer';
//import { UseContextApi } from '../hooksFolder/contextFolder/contextApi';


function App() {
    return (
        //<UseContextApi>
            <div className="App">
                <ContactInformation/>
                <ResumeIntroduction/>
                <Skills/>
                <ProfessionalExperience/>
                <Education/>
                <Footer/>
            </div>
        //</UseContextApi>
    );
}

export default App;
