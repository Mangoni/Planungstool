class NodeElement {
    ID: string
    Type: string;
    Title: string;
    Duration: number;
    PredecessorIDs: string[]
    FAZ: number
    FEZ: number
    SAZ: number
    SEZ: number
    TotalBuffer: number
    FreeBuffer: number
}

export default NodeElement