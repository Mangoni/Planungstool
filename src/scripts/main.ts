import NodeElements from "./data"
import NodeElement from "./NodeElement"



let allTests: NodeElement[] = NodeElements
let StartnodeIDs: string[] = []
let EndnodeIDs: string[] = []


calculatePlanning()

async function calculatePlanning() {
    console.log("Input NodeElements:")
    console.log(NodeElements)
    await findStartnodeIDs()
    await findEndnodeIDs()

    // berechne alle FEZ und FAZ:
    StartnodeIDs.forEach(startnodeID => {
        allTests.find(Test => Test.ID == startnodeID).FAZ = 0
        allTests.find(Test => Test.ID == startnodeID).FEZ =  FEZ(allTests.find(Test => Test.ID == startnodeID))
    })

    EndnodeIDs.forEach(endnodeID => {
        calculateFazFez(allTests.find(test => test.ID == endnodeID))
    })

    // berechne alle SEZ und SAZ:
    EndnodeIDs.forEach(endnodeID => {
        allTests.find(Test => {
            // FEZ vom Endknoten ist auch sein SEZ:
            allTests.find(Test => Test.ID == endnodeID).SEZ = allTests.find(Test => Test.ID == endnodeID).FEZ

            allTests.find(Test => Test.ID == endnodeID).SAZ = SAZ(Test)
        })
    })


    StartnodeIDs.forEach(startnodeID => {
        calculateSazSez(allTests.find(test => test.ID == startnodeID))
    })

    console.log("Output NodeElements:")
    console.log(allTests)
}




function FAZ(TestToBeCalculated: NodeElement): number {
    let FEZ_max: number = 0;
    TestToBeCalculated.PredecessorIDs.forEach(Predecessor =>{
        allTests.forEach (Test => {
            if (Test.ID == Predecessor && Test.FEZ > FEZ_max){
                FEZ_max = Test.FEZ
            }
        })
    })
    return FEZ_max;
}

function FEZ(Test: NodeElement): number {
    return Test.Duration + Test.FAZ;
}

function SEZ(TestToBeCalculated: NodeElement, SuccessorIDs: string[]): number {
    let SAZ_min = allTests.find(test => test.ID == SuccessorIDs[0]).SAZ
    //Startwert für SAZ_min ist SAZ vom ersten Nachfolger
    SuccessorIDs.forEach(successorID => {
        let successor = allTests.find(test => test.ID == successorID)
        if (successor.SAZ < SAZ_min ){
            SAZ_min = successor.SAZ
        }
    })
    return SAZ_min
}

function SAZ(Test: NodeElement): number {
    return  Test.SEZ - Test.Duration;
}

function findSuccessorIDs(Test: NodeElement): string[] { //Nachfolger suchen
    let successorIDs: string[] = [];
    allTests.forEach (potentialSuccessor => {
        if (potentialSuccessor.PredecessorIDs.find(id => id == Test.ID)){
            successorIDs.push(potentialSuccessor.ID);
        }
    })
    return successorIDs;
}

function findEndnodeIDs(): string[] { // Prüfungen ohne Nachfolger finde
    let arrayOfAllPredecessorsIDs : string[] =[]
    /*let EndnodeIDs : string[]
    EndnodeIDs=[]*/

    // Array mit allen PredecessorIDs erstellen:
    allTests.forEach((test) => {
        test.PredecessorIDs.forEach(PredecessorID => {
            if(arrayOfAllPredecessorsIDs.length == 0) {
                arrayOfAllPredecessorsIDs.push(PredecessorID)
            } else {
                if (typeof arrayOfAllPredecessorsIDs.find(id => id==PredecessorID) == 'undefined') {
                    arrayOfAllPredecessorsIDs.push(PredecessorID)
                }
            }

        })
    })
    allTests.forEach(potentialEndnode => {
        if (typeof arrayOfAllPredecessorsIDs.find(id => id==potentialEndnode.ID) == 'undefined'){
            EndnodeIDs.push(potentialEndnode.ID)
        }
    })
    return EndnodeIDs
}

function findStartnodeIDs(): string[] {
   let Startnodes: NodeElement[] = []
   Startnodes = allTests.filter(test => test.PredecessorIDs.length == 0)

    Startnodes.forEach(Startnode => {
        StartnodeIDs.push(Startnode.ID)
    })
    return StartnodeIDs
}

function calculateFazFez(Test: NodeElement) {
    let allPredecessorsExist: Boolean
    allPredecessorsExist = true
    let allPredecessorIDs = Test.PredecessorIDs
    // Prüfen, ob alle VorgängerFEZ vorhanden sind
    allPredecessorIDs.forEach(PredecessorID => {
        if (allTests.find(test => test.ID == PredecessorID).FEZ == undefined) {
            allPredecessorsExist = false
        }
    })

    if (allPredecessorsExist) {
        Test.FAZ = FAZ(Test)
        Test.FEZ = FEZ(Test)
    } else {
        allPredecessorIDs.forEach(PredecessorID => {
            calculateFazFez(allTests.find(test => test.ID == PredecessorID))
            Test.FAZ = FAZ(Test)
            Test.FEZ = FEZ(Test)
        })
    }
return
}


function calculateSazSez(Test: NodeElement) {
    let allSuccessorSAZExist: Boolean
    allSuccessorSAZExist = true
    let allSuccessorIDs : string[]
    allSuccessorIDs = findSuccessorIDs(Test)

    if (allSuccessorIDs.length >0) { //nicht für Endknoten ausführen
        // Prüfen, ob alle NachfolgerSAZ vorhanden sind
        allSuccessorIDs.forEach(SuccessorID => {
            if (allTests.find(test => test.ID == SuccessorID).SAZ == undefined) {
                allSuccessorSAZExist = false
            }
        })

        if (allSuccessorSAZExist) {
            Test.SEZ = SEZ(Test, allSuccessorIDs)
            Test.SAZ = SAZ(Test)
        } else {
            allSuccessorIDs.forEach(SuccessorID => {
                calculateSazSez(allTests.find(test => test.ID == SuccessorID))
                Test.SEZ = SEZ(Test, allSuccessorIDs)
                Test.SAZ = SAZ(Test)
            })
        }
    }
    return
}


