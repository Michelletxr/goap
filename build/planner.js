"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definePlan = exports.isValidPlan = exports.next = void 0;
const pqueue_1 = require("./pqueue");
const state_1 = require("./state");
/**
 * Retorna o estado gerado pela execução de uma ação sobre um estado original.
 */
function next(original, action) {
    return { ...original, ...action.effects }; // junta e sobreescreve as propriedades
}
exports.next = next;
/**
 * Retorna o estado que, se uma dada ação for executada, leva ao estado desejado.
 */
function previous(action, target) {
    return { ...target, ...action.precond };
}
/**
 * Verifica se as ações de um plano transforma um estado inicial (current) em um estado
 * objetivo (goal). A verificação é feita a partir das precondições de cada ação e os
 * seus efeitos (transformações no estado).
 */
function isValidPlan(initial, goal, plan) {
    const result = plan.reduce((state, action) => {
        if ((0, state_1.match)(action.precond, state)) {
            return next(state, action);
        }
        return {};
    }, initial);
    return (0, state_1.match)(goal, result);
}
exports.isValidPlan = isValidPlan;
/** Nó do grafo utilizado pelo A*. Encapsula um estado. */
class Node {
    constructor(state, gCost = Number.MAX_SAFE_INTEGER, // custo real (calculado até o momento)
    hCost = Number.MAX_SAFE_INTEGER // custo estimado até o objetivo (heurística)
    ) {
        this.state = state;
        this.gCost = gCost;
        this.hCost = hCost;
    }
}
/** Aresta dirigida do grafo utilizado pelo A*. */
class Edge {
    constructor(action, // ação que transforma um estado em outro.
    origin, // nó de onde a aresta sai
    target // e para onde vai.
    ) {
        this.action = action;
        this.origin = origin;
        this.target = target;
    }
}
/**
 * Cria uma sequência de ações voltando no caminho do A*, do nó atual até o inicial.
 */
function createPath(node) {
    const path = [];
    while (node.from) {
        // quando não houver mais `from` é porque chegou no raiz.
        path.push(node.from.action);
        node = node.from.origin;
    }
    return path;
}
/**
 * Cria um plano (sequência de ações) para levar um estado inicial a um estado final
 * a partir de um conjunto de ações possíveis.
 * @param initial Estado inicial.
 * @param goal    Estado final
 * @param actions Conjunto de ações possíveis.
 * @returns       Sequência de ações para levar `initial` a `goal`.
 */
function definePlan(initial, goal, actions) {
    const fCost = (node) => node.gCost + node.hCost;
    const priorFunc = (a, b) => (fCost(a) < fCost(b) ? a : b);
    const queue = new pqueue_1.PQueue(priorFunc); // fila de prioridade
    const closed = []; // nós que já saíram da fila (não precisam calcular novamente)
    // 1º no da fila é o estado objetivo (goal). A busca será do no final em direção ao inicial.
    queue.push(new Node(goal, 0, (0, state_1.distance)(goal, initial)));
    while (!queue.isEmpty()) {
        const currNode = queue.pop();
        if ((0, state_1.match)(currNode.state, initial)) {
            // se o estado nó atual casar com o inicial, então temos um caminho
            return createPath(currNode);
        }
        closed.push(currNode);
        actions // para cada ação que possui pelo menos um efeito levando ao estado do nó atual
            .filter(action => (0, state_1.partialMatch)(action.effects, currNode.state))
            .forEach(action => {
            const prevState = previous(action, currNode.state); // calcula o estado anterior à ação
            if (closed.every(n => !(0, state_1.isEqual)(n.state, prevState))) {
                // se é um estado que não saiu da fila, procura-o na fila
                let prevNode = queue.find(node => (0, state_1.isEqual)(node.state, prevState));
                if (!prevNode) {
                    // se não estiver na fila, cria um novo nó e insere na fila
                    prevNode = new Node(prevState);
                    queue.push(prevNode);
                }
                const gCost = currNode.gCost + action.cost;
                const hCost = (0, state_1.distance)(prevState, initial);
                if (gCost + hCost < fCost(prevNode)) {
                    // se o custo calculado agora for menor que o estimado anteriormente,
                    // então cria uma nova transição (aresta) e atualiza os dados
                    const edge = new Edge(action, currNode, prevNode);
                    prevNode.gCost = gCost;
                    prevNode.hCost = hCost;
                    prevNode.from = edge;
                }
            }
        });
    }
    // se chegou aqui é porque não alcançou o nó inicial e, portanto, não há plano possível.
    return [];
}
exports.definePlan = definePlan;
//# sourceMappingURL=planner.js.map