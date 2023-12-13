"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const npc_1 = require("./npc");

const state = {
    nivelHabilidade: false,
    possuiIngredientes: false,
    experimentosSucesso:false,
    possuiMistura: false,
    poçãoCura: false, //possui poção
};

const goal = {
    poçãoCura: true,
};

const soldier = new npc_1.Npc(state, actions_1.actions);
soldier.goal = goal;

soldier.printStates("ESTADO INICIAL")

while (soldier.plan.length > 0) {
    soldier.execute();
}

soldier.printStates("ESTADO FINAL")