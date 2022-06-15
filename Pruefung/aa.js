function lkRechnung() {

    let rabatt1_2 = 5;
    let rabatt3_4_5 = 7;
    let rabatt6_7 = 9;
    let elserabatt = 11;
    let ergebnis = 0;
    let waren = parseFloat(document.getElementById("waren").value);
    let plzge = parseInt(document.getElementById("plz").value);


    function rechnung(warenwert, rabatt) {
        ergebnis = warenwert + ((rabatt * warenwert) / 100);
        return ergebnis
    }
    if (plzge === 1 || plzge === 2) {
        rechnung(waren, rabatt1_2);
    } else if (plzge === 3 || plzge === 4 || plzge === 5) {
        rechnung(waren, rabatt3_4_5);
    } else if (plzge === 6 || plzge === 7) {
        rechnung(waren, rabatt6_7);
    } else {
        rechnung(waren, elserabatt);
    }
    document.getElementById("kosten").innerHTML = ergebnis.toFixed(2);
}