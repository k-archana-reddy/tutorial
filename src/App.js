import './App.css';
import reviews from './data';
import ReviewList from './ReviewList.js';
  

function App() {
 
  return (
      <div className="main">
        <div className="info">
          <p className="info-title">What our <br />customers says</p>
          <p className="info-body">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Join now</button>
        </div>
        
          <ReviewList reviews={reviews} />
        
          
      </div>
     
);
}

export default App;
