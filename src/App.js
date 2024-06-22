import './App.css';
import { useState } from 'react';

function App() {
return (
      <div className="main">
        <div className="info">
          <p className="info-title">What our <br />customers says</p>
          <p className="info-body">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Join now</button>
        </div>
        <div className="reviews-container">
          <div className="scroll-bar">
          <div className="review 1">
            <div className="image">
              <img src="./images/reviewer-1.jpeg" />
            </div>
            <div className="review-body">
              <p className="reviewer-name">Chaitanya Varma</p>
              <p className="reviewer-text">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum.</p>
            </div>
          </div>
          <div className="review 2">
            <div>
              <img src="./images/reviewer-2.jpeg" />
            </div>
            <div className="review-body">
              <p className="reviewer-name">Chaitanya Varma</p>
              <p className="reviewer-text">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum.</p>
            </div>
          </div>
          <div className="review 3">
            <div>
              <img src="./images/reviewer-3.jpeg" />
            </div>
            <div className="review-body">
              <p className="reviewer-name">Chaitanya Varma</p>
              <p className="reviewer-text">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum.</p>
            </div>
          </div>
          <div className="review 3">
            <div>
              <img src="./images/reviewer-3.jpeg" />
            </div>
            <div className="review-body">
              <p className="reviewer-name">Chaitanya Varma</p>
              <p className="reviewer-text">Lorem <span>ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default App;
