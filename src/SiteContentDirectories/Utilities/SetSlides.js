import React from 'react';
import SlideComponent from '../CustomComponents/ContainerComponents/SlideComponent';

function setSlides(contentArray,slidesArray){
	contentArray.map((elems,index)=>{
		//for now just put elems in a slide, later though will have to adjust and stuff
		slidesArray.push(<SlideComponent key={index}>{elems}</SlideComponent>);
		return null;
	});
}

export default setSlides;