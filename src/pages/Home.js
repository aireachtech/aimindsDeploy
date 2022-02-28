
import './Home.css';
import Header from '../components/Header.js';

function Home() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="top-margin"></div>
        <Header className="header"/>
        < div class="middle-text">
            <div class="middle-top-div"></div>
            <h1>Hire Trained Candidates Quickly From Us!</h1>
            <h4>Connect with us to explore our candidate pool who are trained in Tech Companies' Emerging Tech Skill<br></br>requirements like ML, AI, AR based hands on projects.</h4>
          </div>
        <div class="middle-image">

        </div>
      </header>

      <div className="Looking-For-Engineers">
        <div className="Looking-For-Engineers-Top"></div>
          <h1>Looking for First-Class ML Engineers?</h1>
        </div>

      <div className="We-Are-Here">
        <div className="left-here"></div>
        <div className="right-here">
          <div className="right-right-here">
            
          </div>
        </div>
      </div>

      </div>
    
  );
}

export default Home;
