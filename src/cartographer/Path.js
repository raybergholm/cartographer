
export class Path {
    constructor({ fromNode, toNode, cardinality, forwardAction, backwardAction }) {
        this.fromNode = fromNode;
        this.toNode = toNode;
        this.cardinality = cardinality;
        this.forwardAction = forwardAction;
        this.backwardAction = backwardAction;
    }
}

export default Path;
