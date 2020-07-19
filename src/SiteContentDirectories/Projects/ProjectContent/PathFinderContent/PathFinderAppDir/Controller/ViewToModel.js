/**
 * Will create events and dispact them to intended target. Functions in this module will be used
 * to reflect UI updated in the model.
*/

/**
 * Function will fire an event from the node chosen to be the starting point to the main app so
 * the nodeMatrix is updated to indicate the chosen node and startNode is set for algorithm.
 * @param {Number} node_iPost i coordinate of node in model matrix
 * @param {Number} node_jPost j coordinate of node in model matrix
 * @param {any} destinationRef refrence object to dispactch event to
 */
export function startPointSelected(node_iPost,node_jPost,destinationRef){
    let startSelectionEvent = new CustomEvent('startSE',{detail:{
        node_i : node_iPost,
        node_j : node_jPost
    }});

    destinationRef.current.dispatchEvent(startSelectionEvent);
}


/**
 * Function will fire an event from the node chosen to be the ending point to the main app so
 * the nodeMatrix is updated to indicate the chosen node and endNode is set for algorithm.
 * 
 * @param {Number} node_iPost i coordinate of node
 * @param {Number} node_jPost j coordinate of node
 * @param {any} destinationRef Reference to the main parent dom element where the node matrix is
 */
export function endPointSelected(node_iPost,node_jPost,destinationRef){
    let endSelectionEvent = new CustomEvent('endSE',{detail:{
        node_i : node_iPost,
        node_j : node_jPost
    }});
    destinationRef.current.dispatchEvent(endSelectionEvent);
}

/**
 * Fired to designate node as a 'block' node in the model
 * @param {Number} node_iPost 
 * @param {Number} node_jPost 
 * @param {any} destinationRef 
 */
export function blockSelected(node_iPost,node_jPost,destinationRef){
    let blockSelectionEvent = new CustomEvent('blockSE',{detail:{
        node_i : node_iPost,
        node_j : node_jPost
    }});
    destinationRef.current.dispatchEvent(blockSelectionEvent);
}


/**
 * Will send the app the unblocking event where a blocked block will become unblocked.
 * @param {Number} node_iPost 
 * @param {Number} node_jPost 
 * @param {Number} destinationRef 
 */
export function unBlockSelected(node_iPost,node_jPost,destinationRef){
    let unblockSelectionEvent = new CustomEvent('unBlockSE',{detail:{
        node_i : node_iPost,
        node_j : node_jPost
    }});
    destinationRef.current.dispatchEvent(unblockSelectionEvent);
}

