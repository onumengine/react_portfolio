import './App.css';
import TabBar from './views/molecules/TabBar.js';
import MainArticle from './views/molecules/MainArticle';
import ProjectsHeading from './views/molecules/ProjectsHeading';
import FooterSection from './views/organisms/FooterSection';
import WelcomeSection from './views/organisms/WelcomeSection';
import ProjectsSection from './views/organisms/ProjectsSection';

function App() {
  return (
    <div className="App">
      <TabBar/>
      <WelcomeSection/>
      <MainArticle/>
      <ProjectsHeading />
      <ProjectsSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
