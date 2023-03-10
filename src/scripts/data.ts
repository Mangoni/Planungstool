
import NodeElement from "./NodeElement"

let NodeElements: NodeElement[]
NodeElements = [
        {
        "ID": "T01",
        "Type": "Test",
        "Title": "Test A",
        "Duration": 2 ,
        "PredecessorIDs": [],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T02",
        "Type": "Test",
        "Title": "Test B",
        "Duration": 4 ,
        "PredecessorIDs": ["T01"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T03",
        "Type": "Test",
        "Title": "Test C",
        "Duration": 3 ,
        "PredecessorIDs": ["T02"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T04",
        "Type": "Test",
        "Title": "Test D",
        "Duration": 2 ,
        "PredecessorIDs": ["T02"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T05",
        "Type": "Test",
        "Title": "Test E",
        "Duration": 1 ,
        "PredecessorIDs": ["T03","T04"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T06",
        "Type": "Test",
        "Title": "Test F",
        "Duration": 4 ,
        "PredecessorIDs": ["T03"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
    {
        "ID": "T07",
        "Type": "Test",
        "Title": "Test G",
        "Duration": 5 ,
        "PredecessorIDs": ["T05","T06"],
        "FAZ": undefined,
        "FEZ": undefined,
        "SAZ": undefined,
        "SEZ": undefined,
        "TotalBuffer":  undefined,
        "FreeBuffer": undefined,
    },
]

export default NodeElements