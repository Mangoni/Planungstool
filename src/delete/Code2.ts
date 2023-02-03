const AnzahlPruefungen: number = 7;

let AnzahlStartKnoten: number;
let AnzahlEndKnoten: number;
let AnzahlNachfolger: number;
const ErstePruefungszeile: number = 4;

function FAZ(Pruefungszeile: number): number {
    let k: number;
    let FEZ_max: number = 0;
    let Vergleichsergebnis: number;
    let VorgaengerNamen: string;
    let Pruefungsname: string;
    VorgaengerNamen = Cells(Pruefungszeile, 4).Value;

for (k = ErstePruefungszeile; k <= (AnzahlPruefungen + ErstePruefungszeile - 1); k++) {
    Pruefungsname = Cells(k, 2);
    Vergleichsergebnis = InStr(VorgaengerNamen, Pruefungsname);
    if (Vergleichsergebnis > 0 && Cells(k, 6).Value > FEZ_max) {
        FEZ_max = Cells(k, 6).Value;
    }
}

return FEZ_max;
}

function FEZ(Pruefungszeile: number, FAZ: number): number {
    let Dauer: number;
    Dauer = Cells(Pruefungszeile, 3);
    return Dauer + FAZ;
}



function SAZ(Pruefungszeile: number, SEZ: number): number {
    let Dauer: number;
    Dauer = Cells(Pruefungszeile, 3);
    return SEZ - Dauer;
}

function FindeNachfolger(Pruefungszeile: number): number[] {
    let Vergleichsergebnis: number;
    let VorgaengerNamen: string;
    let Pruefungsname: string;
    let NachfolgerIndexe: number[] = [];
    let k: number;
    let NachfolgerIndex: number = 0;

    Pruefungsname = Cells(Pruefungszeile, 2);

for (k = ErstePruefungszeile; k <= (AnzahlPruefungen + ErstePruefungszeile - 1); k++) {
    VorgaengerNamen = Cells(k, 4);
    Vergleichsergebnis = InStr(VorgaengerNamen, Pruefungsname);
    if (Vergleichsergebnis > 0) {
        NachfolgerIndexe.push(k);
        NachfolgerIndex++;
    }
}

return NachfolgerIndexe;
}