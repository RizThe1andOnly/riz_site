/**
 * Will access the arrays pertaining to Dijsktra's Algorithm and carry out the necessary operations to find
 * paths. While carrying out operations will use functions from Controller to change view to indicate progress.
*/

import {constructMinHeap,insertElement,extractMin,updateHeap} from './Heap'; //heap operations required for model processing
import {NUMBER_OF_NODES} from '../PathFinderApp';
import {visited,extracted,isInpath,isEndNode,resetNode} from '../Controller/ModelToView';

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

var startNode_Global = null;

/**
 * Populate 
 */
export function constructNodePropArray(){
    let nodeModelMatrix = [];
    for(let m=0;m<NUMBER_OF_NODES;m++){
        nodeModelMatrix.push([]);
        for(let n=0;n<NUMBER_OF_NODES;n++){
            let idDom = m + "-" + n;
            nodeModelMatrix[m].push({distanceFromSource:Number.MAX_VALUE,parent:null,i:m,j:n,
                                        domId:idDom,visited:false,extraWeight:0,edges:[],isBlock:false});
            resetNode(idDom);
        }
    }
    return nodeModelMatrix;
}


/**
 * Will run the pathfinding algorithm and determine shortest paths. Will first find the start and end points and set them aside for operations.
 * @param {Array<node>} nodeModelMatrix matrix holding all of the nodes according to their positions
 * @param {node} startNode 
 * @param {node} endNode 
*/
export function RunDijsktraAlgo(nodeModelMatrix,startNode,endNode){
    //create the initial heap:
    startNode_Global = startNode;
    let minHeap = constructMinHeap(startNode);
    let testCounter = 10; //for testing purposes
    while(minHeap.length>0){
        let minElem = extractElement(minHeap);
        extracted(minElem.domId); // have extracted element change color !!!!!!!!

        if(minElem.domId === endNode.domId){
            onEnd(endNode,nodeModelMatrix);
            break;
        }
        let adjElems = getAdjacentNodesNonDiagonal(minElem,nodeModelMatrix);
        adjElems.forEach((adjElem)=>{minHeap = visitAdjacentNode(minElem,adjElem,minHeap)});
        
        //for testing purposes
        testCounter = testCounter - 1;
        if(testCounter===0){
            console.log("test counter triggered");
            //break;
        }
    }
}


/**
 * Extracts the min element from heap and sets its visited value to true. Also fires color change event for visited elements.
 * @param {Array<node>} minHeap 
 */
function extractElement(minHeap){
    let minElem = extractMin(minHeap);
    minElem.visited = true;
    //fire visited color change event here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return minElem;
}

/**
 * Get all adjacent nodes; in this particular case it will be all connected tiles -> ([-1+i,1+i],[-1+j,1+j]) exculding the srcNode itself
 * @param {node} srcNode node for which the adjacent node elements are being returned
 * @param {Array<node>} nodeMat node model matrix
 */
function getAdjacentNodes(srcNode,nodeMat){
    let adjNodes = [];
    for(let m=-1;m<2;m++){
        for(let n=-1;n<2;n++){
            let x = srcNode.i + m;
            let y = srcNode.j + n;
            if((m===0)&&(n===0)) continue;
            if((x<0)||(x>=NUMBER_OF_NODES)) continue;
            if((y<0)||(y>=NUMBER_OF_NODES)) continue;
            //fire a temp color change event here !!!!!!!!!!!!!!!!!!!!!!!!
            adjNodes.push(nodeMat[x][y]);
        }
    }
    return adjNodes;
}

/**
 * Will get all nodes to which the src node is adjacent to. This version will not add diagonal
 * nodes to the list, to allow only for movement along either x or y axis not both at once.
 * @param {node} srcNode the node for which adjacent nodes are being checked
 * @param {node} nodeMat matrix with all the nodes
 */
function getAdjacentNodesNonDiagonal(srcNode,nodeMat){
    let adjNodes = [];
    
    for(let m=-1;m<2;m++){
        let x = srcNode.i + m;
        if(m===0) continue;
        if((x<0)||(x>=NUMBER_OF_NODES)) continue;
        adjNodes.push(nodeMat[x][srcNode.j]);
    }

    for(let n=-1;n<2;n++){
        let y = srcNode.j + n;
        if((n===0)) continue;
        if((y<0)||(y>=NUMBER_OF_NODES)) continue;
        adjNodes.push(nodeMat[srcNode.i][y]);
    }

    return adjNodes;
}

/**
 * Receives a list of adjacent nodes to the source node and performes the relax operations on each of them.
 * After each relax operation the heap is then updated.
 * @param {node} srcNode 
 * @param {node} adjNode 
 * @param {Array<node>} minHeap 
 */
function visitAdjacentNode(srcNode,adjNode,minHeap){
    if(adjNode.isBlock === true){
        return minHeap;
    }
    
    if(srcNode.domId !== startNode_Global.domId) visited(adjNode.domId);
    adjNode = relax(srcNode,adjNode);
    minHeap = runHeapUpdate(adjNode,minHeap);
    
    return minHeap;
}


/**
 * Will check current 'd' value of nodeB with the possible 'd' value (d2) obtained if path is created from nodeA. If the possible value is
 * less than the current value then the current value is replaced with the possible value and nodeB's current parent will be
 * replaced with nodeA. This indicates the shortest path to nodeB is from nodeA.
 * 
 * This function will be called by every node (nodeA) on their adjacent nodes (nodeB), to determine shortes paths.
 * 
 * @param {node} nodeA 
 * @param {node} nodeB
 */
function relax(nodeA,nodeB){
    let possibleDist = calcDistance(nodeA,nodeB);
    //console.log(possibleDist + "   vs   " + nodeB.d);
    if(possibleDist<nodeB.distanceFromSource){
        nodeB.distanceFromSource = possibleDist;
        nodeB.parent = nodeA;
    }
    return nodeB;
}


/**
 * Updates the heap after an adjacent node is visited. The current heap is rebuilt to make sure all nodes are where they
 * belong based on their 'd' value. Then the new node is add to the heap if it has not alreday been visited.
 * 
 * @param {node} newElement element to be added to the heap if it has not already been visited i.e. if visited value is false
 * @param {Array<node>} minHeap 
 */
function runHeapUpdate(newElement,minHeap){
    minHeap = updateHeap(minHeap);
    if(!newElement.visited){
        newElement.visited = true;
        insertElement(newElement,minHeap);
    }
    return minHeap;
}

/**
 * Gets the distance for a target node from a given node whose properties have been determined. The value here will be
 * compared to the target node's current 'd' value.
 * @param {node} nodeA 
 * @param {node} nodeB 
 */
function calcDistance(nodeA,nodeB){
    return nodeA.distanceFromSource + getEuclidianDistanceWeight(nodeA,nodeB) + nodeB.extraWeight;
}

/**
 * Gets euclidian distance between two nodes.
 * @param {node} nodeA 
 * @param {node} nodeB 
 */
function getEuclidianDistanceWeight(nodeA,nodeB){
    let horizontalDiffSquared = Math.pow((nodeB.i - nodeA.i),2);
    let verticalDiffSquared = Math.pow((nodeB.j-nodeA.j),2);
    let distance = Math.sqrt(horizontalDiffSquared+verticalDiffSquared);
    return distance;
}


/**
 * Action taken when the destination node has been reached, extracted from the min heap. At this point the shortest path
 * to this node has been determined.
 * 
 * Will eventually back trace all of the nodes in path thorugh 'p'arent property and events will be fired to highlight
 * path in UI.
 * 
 * @param {node} endNode 
 */
function onEnd(endNode,nodeModel){
    isEndNode(endNode.domId);
    let par = endNode.parent;
    while(par != null){
        //console.log("!");
        //console.log(par.domId);
        isInpath(par.domId);
        par = par.parent;
    }
}