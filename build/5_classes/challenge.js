"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        return "Biiiiiiiiiiiiiiii";
    }
    acelerar(delta) {
        return (this.velocidade = this.velocidade + delta);
    }
    frear(delta) {
        return (this.velocidade = this.velocidade - delta);
    }
}
const pop100 = new Moto("Pop100");
console.log("Pop 100: ", pop100.acelerar(10));
console.log("Pop 100: ", pop100.acelerar(20));
console.log("Pop 100: ", pop100.buzinar());
console.log("Pop 100: ", pop100.frear(20));
// function Moto(nome) {
//   this.nome = nome;
//   this.velocidade = 0;
//   this.buzinar = function () {
//     console.log("Toooooooooot!");
//   };
//   this.acelerar = function (delta) {
//     this.velocidade = this.velocidade + delta;
//   };
// }
// var moto = new Moto("Ducati");
// moto.buzinar();
// console.log(moto.velocidade);
// moto.acelerar(30);
// console.log(moto.velocidade);
// Exercício 2 - Herança
class Object2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Object2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 10;
console.log("Area: ", retangulo.area());
// var objeto2D = {
//   base: 0,
//   altura: 0,
// };
// var retangulo = Object.create(objeto2D);
// retangulo.base = 5;
// retangulo.altura = 7;
// retangulo.area = function () {
//   return this.base * this.altura;
// };
// console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiario = new Estagiario();
estagiario.primeiroNome = "Astrogildo";
console.log(estagiario.primeiroNome);
// var estagiario = {
//   _primeiroNome: "",
// };
// Object.defineProperty(estagiario, "primeiroNome", {
//   get: function () {
//     return this._primeiroNome;
//   },
//   set: function (valor) {
//     if (valor.length >= 3) {
//       this._primeiroNome = valor;
//     } else {
//       this._primeiroNome = "";
//     }
//   },
//   enumerable: true,
//   configurable: true,
// });
// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = "Le";
// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = "Leonardo";
// console.log(estagiario.primeiroNome);