function inViewFilter(element,index,array){
    if( ((element.offsetTop)>=(window.scrollY - window.innerHeight)) && ((element.offsetTop)<=(window.scrollY + window.innerHeight)) ){
        return true;
    }
    return false;
}

function closestViewReducer(runningMin,currentElement,index,arr){
    let currentPost = Math.abs(window.scrollY - (currentElement.offsetTop));
    let runningMinRelativePost = Math.abs(window.scrollY - runningMin);
    if(currentPost<runningMinRelativePost){
        return currentElement.offsetTop;
    }
    return runningMin;
}

function whileScrolling(){
    let startPost = window.scrollY;
    setTimeout(()=>{
        if(startPost === window.scrollY){
            let newPosition = (Array.from(document.getElementsByClassName("slideComponent"))).filter(inViewFilter).reduce(closestViewReducer,10000);
            window.scrollTo(0,newPosition);
        }
    },2000);
}

export default whileScrolling;