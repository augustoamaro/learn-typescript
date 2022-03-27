// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar o casaco";
  console.log(acao);
}

const cpf: string = "123.456.789.90";
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
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log("Soma: ", somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log("Subtração: ", subtrair(25, 5));

// this

function normalComThis() {
  // console.log(this);
}

const normalComThisEspecial = normalComThis.bind(3);
normalComThisEspecial();

const arrowComThis = () => {
  // return console.log(this); // window
};

arrowComThis();

// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  console.log(inicio);

  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(5);
