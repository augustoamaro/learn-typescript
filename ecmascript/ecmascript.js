"use strict";
// let & const
let seraQuePode = "?";
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}
const cpf = "123.456.789.90";
// cpf = '344.546.234.66'
console.log(cpf);
var segredo = "externo!";
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log("Soma: ", somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log("Subtração: ", subtrair(25, 5));
//# sourceMappingURL=ecmascript.js.map