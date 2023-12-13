"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;


const estudar = {
    name:'Estudar Poções',
    precond:{
        poçãoCura:false,
        nivelHabilidade:false
    },
    effects: {
        nivelHabilidade:true
    },
    cost:2// const?
};

const coletarIngredientes = {
    name: 'Coletar Ingredientes',
    precond: {
        nivelHabilidade:true,
        possuiIngredientes: false,
    },
    effects: {
        possuiIngredientes: true,
    },
    cost: 0,
};

const prepararMistura = {
    name:'Preparar Mistura Para Poção',
    precond:{
        possuiIngredientes: true,
        possuiMistura: false
    },
    effects: {
      possuiMistura: true,
      possuiIngredientes: false //gastou todos os ingredientes fazendo a mistura :p
    },
    cost:1
};

const testarMistura = {
    name:'Testar Mistura',
    precond:{
        possuiMistura:true,
        experimentosSucesso:false,
    },
    effects: {
        experimentosSucesso: true,
    },
    cost:1
};

const fazerPoção = {
    name:'Fazer Poção',
    precond:{
        possuiIngredientes:true,
        experimentosSucesso:true,
        nivelHabilidade:true
       
    },
    effects: {
        poçãoCura: true,
        possuiIngredientes: false
    },
    cost:3
};

exports.actions = [
    estudar,
    coletarIngredientes,
    prepararMistura,
    testarMistura,
    fazerPoção,
];