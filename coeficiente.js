var Asuperficiearea;
var Llongitudmembrana;
var Dcoeficientedifusion;
var DLcapacidad;

alert("Para saber la Capacidad de difusion indique los datos solicitados a continuacion");
Asuperficiearea = prompt("Cual es la superficie del area?");
Llongitudmembrana = prompt("Cual es la longitud de la membrana?");
Dcoeficientedifusion = prompt("Cual es el coeficiente de difusion?");

Asuperficiearea = parseInt(Asuperficiearea);
Llongitudmembrana = parseInt(Llongitudmembrana);
Dcoeficientedifusion = parseInt(Dcoeficientedifusion);
DLcapacidad = parseInt(DLcapacidad)

DLcapacidad = (Asuperficiearea / Llongitudmembrana) * Dcoeficientedifusion;

alert("La capacidad de difusion es " + DLcapacidad );
