import './App.css';
import WelcomeImage from './views/atoms/WelcomeImage';
import TabBar from './views/molecules/TabBar.js';
import WelcomeBanner from './views/molecules/WelcomeBanner';
import './images/undraw_1.png'

function App() {
  return (
    <div className="App">
      <TabBar/>
      <WelcomeBanner/>
      <WelcomeImage/>
    </div>
  );
}

export default App;
