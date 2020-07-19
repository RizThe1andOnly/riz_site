import {inViewFilter} from '../../Utilities/WhileScrolling';

/**
 * Functions that will be the onEvent actions for the up and 
 * down button. They will be used to change slides.
*/


//constants for calculating padding of the reposition:
const TOP_PADDING = window.innerHeight * 0.05;


/**
 * Gets the slide currently in view. If there are two slides then get the one with the most
 * exposure to the screen; this is the same principle followed by the scrolling function (nearly same code as well).
*/
function getCurrentSlide(){
    let elems = Array.from(document.getElementsByClassName("slideComponent"));
    let currentElement = elems.filter(inViewFilter).reduce((runningMin,currentElem)=>{
        if(runningMin === null){
            return currentElem;
        }
        let currentPost = Math.abs(window.scrollY - (currentElem.offsetTop));
        let runningMinRelativePost = Math.abs(window.scrollY - runningMin.offsetTop);
        let toBeReturned = (currentPost<runningMinRelativePost) ? currentElem:runningMin;
        return toBeReturned;
    },null);

    return currentElement;
}


/**
 * Triggered when up button is pressed and will go to slide above the current one.
*/
export function transitionUp(){
    let currentElement = getCurrentSlide();
    let newPosition = window.scrollY;
    if((currentElement.previousElementSibling) != null){
        newPosition = (currentElement.previousElementSibling.offsetTop) - TOP_PADDING;
    }
    window.scrollTo(0,newPosition);
}


/**
 * Triggered when down button is pressed and will go to slide below the current one.
*/
export function transitionDown(){
    let currentElement = getCurrentSlide();
    let newPosition = window.scrollY;
    if((currentElement.nextElementSibling)!=null){
        newPosition = currentElement.nextElementSibling.offsetTop - TOP_PADDING;
    }
    window.scrollTo(0,newPosition);
}

