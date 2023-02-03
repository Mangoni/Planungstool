const AnzahlPruefungen: number = 7;

let AnzahlStartKnoten: number;
let AnzahlEndKnoten: number;
let AnzahlNachfolger: number;
const ErstePruefungszeile: number = 4;

// function BerechneAnzahlPruefungen(): number {
//     let ZaehlerPruefungen: number = 0;
//     let i: number = ErstePruefungszeile;
//     let KeineWeiterePruefung: boolean = false;

//     do {
//         KeineWeiterePruefung = IsEmpty(Cells(i, 2).Value);
//         if (!KeineWeiterePruefung) {
//             ZaehlerPruefungen = ZaehlerPruefungen + 1;
//         }
//         i = i + 1;
//     } while (!KeineWeiterePruefung);

//     return ZaehlerPruefungen;
// }

function FAZ(Pruefungszeile: number): number {
    let k: number;
    let FEZ_max: number = 0;
    let Vergleichsergebnis: number;
    let VorgaengerNamen: string;
    let Pruefungsname: string;
    VorgaengerNamen = Cells(Pruefungszeile, 4).Value;

for (k = ErstePruefungszeile; k <= AnzahlPruefungen + ErstePruefungszeile - 1; k++) {
    Pruefungsname = Cells(k, 2);
    Vergleichsergebnis = InStr(VorgaengerNamen, Pruefungsname); // 0: Pruefungsname wurde in Vorgaengernamen nicht gefunden
    if (Vergleichsergebnis > 0 && Cells(k, 6).Value > FEZ_max) {
        FEZ_max = Cells(k, 6).Value;
    }
}

return FEZ_max;
}

// function GetNextNodesIndex(): number[] {
//     let LengthArray: number;
//     LengthArray = (UBound(GetNextNodesIndex) - LBound(GetNextNodesIndex) + 1);
//     // Range("a18") = LengthArray;

//     for (let p = 0; p <= LengthArray; p++) {
//         if (IsEmpty(GetNextNodesIndex[p])) {
//             AnzahlStartKnoten = p;
//             break;
//         }
//     }

//     // Range("a19") = AnzahlStartKnoten;

//     // for (let n = 0; n <= AnzahlStartKnoten - 1; n++) {
//     //     Cells((22 + n), 1) = GetNextNodesIndex[n];
//     // }
//     return GetNextNodesIndex;
// }