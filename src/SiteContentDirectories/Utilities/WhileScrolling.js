/**
 * Contains modules that are responsible for scroll snapping and finding slide that is most prominent on screen. 
*/

/**
 * Function used with the 'filter' method in 'whileScrolling()' to obtain the slides that are in the viewable range.
 * The viewable range is the content that the user can see, start at the top of the browser screen 
 * and ends at the bottom (not including toolbars & etc.). At most 2 slides will be in this range.  
 * @param {*} element The html element which will have its location tested
 * @param {*} index 
 * @param {*} array 
*/
export function inViewFilter(element,index,array){
    if( ((element.offsetTop)>=(window.scrollY - window.innerHeight)) && ((element.offsetTop)<=(window.scrollY + window.innerHeight)) ){
        return true;
    }
    return false;
}

/**
 * Obtains the slide that is will be snapped to after scrolling is done. closestViewReducer obtains the viewable slides from
 * 'inViewFilter()' and then checks which viewable slide has the most exposure in the screen and returns that slide.
 * @param {*} runningMin Current slide with the most exposure in screen.
 * @param {*} currentElement Slide that will be tested against runningMin for exposure.
 * @param {*} index 
 * @param {*} arr 
*/
export function closestViewReducer(runningMin,currentElement,index,arr){
    let currentPost = Math.abs(window.scrollY - (currentElement.offsetTop));
    let runningMinRelativePost = Math.abs(window.scrollY - runningMin);
    if(currentPost<runningMinRelativePost){
        return currentElement.offsetTop;
    }
    return runningMin;
}


/**
 * Action method called when user is scrolling and after user is done it has window snap to element that is most visible
 * in the screen (has most exposure). Done by calling internal method after timeout of 1.5 seconds, this method checks if
 * the scroll position has changed since the timeout started and if not then snaps to element. The scroll position not changing
 * indicates user has stopped scrolling. The method obtains element that will be in view by filtering slides with 'inViewFilter' and
 * fining the one with most exposure with 'closestViewReducer'.
*/
function whileScrolling(){
    let startPost = window.scrollY;
    setTimeout(()=>{
        if(startPost === window.scrollY){
            let stopPadding = 45; //may need to work on this for portability's sake
            let newPosition = (Array.from(document.getElementsByClassName("slideComponent"))).filter(inViewFilter).reduce(closestViewReducer,10000);
            window.scrollTo(0,(newPosition-stopPadding));
        }
    },1500);
}

export default whileScrolling;