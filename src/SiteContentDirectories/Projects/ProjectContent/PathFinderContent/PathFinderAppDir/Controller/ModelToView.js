/**
 * Functions that will be used during different phases of the Dijsktra Algorithm to fire events at nodes.
 * The events are primarily to change node color to indicate progression through the algorithm.
*/

const TIMER_SCALE_CONSTANT = 1;
const BACK_TRACK_SCALE =  100;

/**
 * When model "visits" a node -> the node is in the list of adjacent elements for another node, this event will be fired.
 * Will cause a color change in the node receiving the event.
 * 
 * @param {string} domElemId identification within dom so that event can be dispatched to it.
 */
export function visited(domElemId){
    setTimeout(()=>{
        let visitedEvent = new Event("beingVisited");
        document.getElementById(domElemId).dispatchEvent(visitedEvent);
    },TIMER_SCALE_CONSTANT);
}

/**
 * Will be called by model when a node is being inspected for its relation to its neighbors.
 * Indicates that a node has been processed. 
 * 
 * Will cause color change.
 * 
 * @param {string} domElemId string to search for dom node to fire event at
 */
export function extracted(domElemId){
    setTimeout(()=>{
        let extractedEvent = new Event("beingExtracted");
        document.getElementById(domElemId).dispatchEvent(extractedEvent);
    },TIMER_SCALE_CONSTANT);
    
}


/**
 * Will be called when the end node is reached to make it clear that it is the destination at the end of the
 * process.
 * 
 * @param {string} domElemId id of dom element
 */
export function isEndNode(domElemId){
    setTimeout(()=>{
        let isEnd = new Event("isEnd");
        document.getElementById(domElemId).dispatchEvent(isEnd);
    },BACK_TRACK_SCALE);
}

/**
 * Will be called when path to destination is being back tracked so that it can be higlighted
 * with a different color than other elements.
 * 
 * will cause a color change within affected element.
 * 
 * @param {string} domElemId id of dom element
 */
export function isInpath(domElemId){
    setTimeout(()=>{
        let isPath = new Event("isInPath");
        document.getElementById(domElemId).dispatchEvent(isPath);
    },BACK_TRACK_SCALE);
}

export function resetNode(domElemId){
    let resetEvent = new Event("reset");
    document.getElementById(domElemId).dispatchEvent(resetEvent);
}