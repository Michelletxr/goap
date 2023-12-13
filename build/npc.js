"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npc = void 0;
const planner_1 = require("./planner");
class Npc {
    constructor(state = {}, actions) {
        this._state = { ...state };
        this._goal = {};
        this._actions = actions;
        this._plan = [];
    }
    get state() {
        return this._state;
    }
    get plan() {
        return this._plan;
    }
    get goal() {
        return this._goal;
    }
    set goal(goal) {
        this._goal = { ...goal };
        this._plan = (0, planner_1.definePlan)(this._state, this._goal, this._actions);
    }
    execute() {
        if ((0, planner_1.isValidPlan)(this._state, this._goal, this._plan)) {
            const action = this._plan.shift();


            console.log(`Executando ação: ${action.name}`);

            console.log("------------------------------")

            this._state = (0, planner_1.next)(this.state, action);
        }
    }

    printStates(titulo){

        const chaves = Object.keys(this._state);
        const valores = Object.values(this._state);

        // Encontrando o comprimento máximo das chaves para alinhar corretamente o formato da tabela
        let maxLength = 0;
        chaves.forEach(chave => {
            if (chave.length > maxLength) {
                maxLength = chave.length;
            }
        });

        console.log()

        console.log(`--------${titulo}--------`)

        // Imprimindo os dados em formato de quadro (tabela)
        console.log('┌' + '─'.repeat(maxLength) + '┬──────────┐');
        chaves.forEach((chave, index) => {
        const espacos = ' '.repeat(maxLength - chave.length);
        console.log(`│ ${chave}${espacos} │ ${valores[index]} │`);
        if (index !== chaves.length - 1) {
            console.log('├' + '─'.repeat(maxLength) + '┼──────────┤');
        }
    });
    console.log('└' + '─'.repeat(maxLength) + '┴──────────┘');
    console.log()
    
    }
}
exports.Npc = Npc;
//# sourceMappingURL=npc.js.map