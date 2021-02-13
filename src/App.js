import './App.css';
import WelcomeImage from './views/atoms/WelcomeImage';
import TabBar from './views/molecules/TabBar.js';
import WelcomeBanner from './views/molecules/WelcomeBanner';
import './images/undraw_1.png'
import MainArticle from './views/molecules/MainArticle';
import ProjectsHeading from './views/molecules/ProjectsHeading';

function App() {
  return (
    <div className="App">
      <TabBar/>
      <WelcomeBanner/>
      <WelcomeImage/>
      <MainArticle/>
      <ProjectsHeading/>
    </div>
  );
}

export default App;
