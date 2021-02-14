import './App.css';
import WelcomeImage from './views/atoms/WelcomeImage';
import TabBar from './views/molecules/TabBar.js';
import WelcomeBanner from './views/molecules/WelcomeBanner';
import MainArticle from './views/molecules/MainArticle';
import ProjectsHeading from './views/molecules/ProjectsHeading';
import ProjectItem from './views/organisms/ProjectItem';
import FooterSection from './views/organisms/FooterSection';

function App() {
  return (
    <div className="App">
      <TabBar/>
      <WelcomeBanner/>
      <WelcomeImage/>
      <MainArticle/>
      <ProjectsHeading />
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <FooterSection/>
    </div>
  );
}

var descriptionObject = {
  "name": "KumManie's store",
  "description": "Online store dealing in perfumes of all scents, delivering nationwide",
  "buildTools": "HTML/CSS/JS and Django"
}

export default App;
