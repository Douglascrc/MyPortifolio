import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';


const App = () => (
  <>
  <Navbar/>
  <div className="container">
    <Hero/>
    <Skills/>
    <WorkExperience/>
    <ContactMe/>
  </div>
  
  </>
);

export default App
