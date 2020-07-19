/**
 * Provide functions to create and operate on a min heap.
*/


/** Define an edge between two nodes aside from already existing one
 * @typedef {Object} edge
 * @property {node} otherNode node at the other side of edge
 * @property {Number} weight value of edge to be used in distance calculations
 */

/** Define the node type to be used for calculations for the model.
 * @typedef {Object} node
 * @property {Number} distanceFromSource current distance value of node
 * @property {node} parent node which connects to current node
 * @property {Number} i coordinate of node
 * @property {Number} j coordinate of node
 * @property {any} domId string representing the dom id for the node
 * @property {Boolean} visited boolean value representing wheter this node has been visted already
 * @property {Array<edge>} edges that exist between nodes aside from the regular distance between them
 * @property {Boolean} isBlock true if node is a block, false if not
*/


/**
 * Creates the min heap from given array
 * @param {node} node element
 */
export function constructMinHeap(nodeElem){
    return [nodeElem];
}

/**
 * Inserts node element into the running min heap (priority queue) and places into correct location within heap
 * @param {node} nodeElem object with properties of a node in the dijsktra algo
 * @param {Array<node>} nodeHeap min heap containing nodes based on their 'd' value
 */
export function insertElement(nodeElem,nodeHeap){
    nodeHeap.push(nodeElem)
    siftUp((nodeHeap.length - 1),nodeHeap)
}

/**
 * Compares newly inserted value to other elements and changes location of the element if value is less than that
 * of previous elements. After switch will recursively call itself with the current location of the new value to continue
 * checking and placing into correct location.
 * @param {Number} i index of element that has to be shifted up
 * @param {Array<node>} nodeHeap array containing the heap of inserted node elements
 */
function siftUp(i,nodeHeap){
    if(i===0) return; //base case for recursive sift up

    let child = nodeHeap[i];
    let parentLoc = Math.floor((i-1)/2);
    let parent = nodeHeap[parentLoc];
    
    if(parent.distanceFromSource > child.distanceFromSource){
        let temp = nodeHeap[parentLoc];
        nodeHeap[parentLoc] = child;
        nodeHeap[i] = temp;
        siftUp(parentLoc,nodeHeap);
    }
}


/**
 * Will return the node element with the current least 'd' value; d = distance property required for the dijskta algorithm.
 * Before returning element will fix the heap so that it remains a valid min heap.
 * @param {Array<node>} nodeHeap min heap containing the node elements that are being operated on 
 */
export function extractMin(nodeHeap){
    let toBeReturned = nodeHeap[0];
    if(nodeHeap.length > 1){
        nodeHeap[0] = nodeHeap.pop();
        siftDown(0,nodeHeap);
    }
    else{
        nodeHeap.pop();
    }
    return toBeReturned;
}


/**
 * Will repair the heap after extraction so that it remains a min heap.
 * @param {Number} i the location of the value that needs its position in the heap validated or changed
 * @param {Array<node>} nodeHeap min heap that needs to be fixed after losing an element.
 */
function siftDown(i,nodeHeap){
    let limit = Math.floor(nodeHeap.length/2) - 1;
    if(i>limit) return;

    let parent = nodeHeap[i];
    let childLoc = (2*i+1); //by default the left child, if right child exists and is less than then will replace
    let child = nodeHeap[childLoc]; //by default the left child, if right child exists and is less than then will replace
    let rChildLoc = 2*i+2;
    if(rChildLoc<nodeHeap.length){
        childLoc = (child.distanceFromSource<nodeHeap[rChildLoc].distanceFromSource) ? childLoc : rChildLoc;
        child = nodeHeap[childLoc];
    }

    if(child.distanceFromSource<parent.distanceFromSource){
        nodeHeap[i] = child;
        nodeHeap[childLoc] = parent;
        siftDown(childLoc,nodeHeap);
    }
}


/**
 * Will update the heap to maintain min heap property as values in nodes are updated.
 * @param {Array<node>} nodeHeap 
 */
export function updateHeap(nodeHeap){
    let updatedNodeHeap = [];
    nodeHeap.forEach(currentnode=>insertElement(currentnode,updatedNodeHeap));
    return updatedNodeHeap;
}