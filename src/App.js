import React from 'react';
import './SiteContentDirectories/Resources/CssFiles/App.css';
import setSlides from './SiteContentDirectories/Utilities/SetSlides';

const SlideElements = ["Slide 1","Slide 2","Slide 3","Slide 4","Slide 5","Slide 6","SLide 7"];
const slides = [];


function App() {
  setSlides(SlideElements,slides);
  return (
    <div className="App">
      {slides}
    </div>
  );
}

export default App;
