import './App.css';
import Lottie from "lottie-react";
import aniJson from './animation/aniJson.json';
import coding1 from './animation/coding1.json';
import success from './animation/success.json';
import tea from './animation/tea.json';
import website from './animation/website.json';
import website2 from './animation/website2.json';
import website3 from './animation/website3.json';
import coding2 from './animation/coding2.json';


function App() {
  return (
    <div>
      <div className="App">
      
        <div className='center-line'>
          <Lottie animationData={aniJson} loop={true} />
        </div>
        <div className='center-line'>
          <Lottie animationData={coding1} loop={true} />
        </div>
        <div className='center-line'>
          <Lottie animationData={success} loop={true} />
        </div>
        <div className='center-line'>
          <h1>animation</h1>
          <Lottie animationData={tea} loop={true} />
        </div>

        <div className='center-line'>
          <Lottie animationData={website} loop={true} />
        </div>
        <div className='center-line'>
          <Lottie animationData={website2} loop={true} />
        </div>
        <div className='center-line'>
          <Lottie animationData={website3} loop={true} />
        </div>
        <div className='center-line'>
          <Lottie animationData={coding2} loop={true} />
        </div>
      </div>
     


    </div>
  );
}

export default App;
