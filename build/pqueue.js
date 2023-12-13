"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PQueue = void 0;
/** Fila de prioridade genérica. */
class PQueue {
    /** Cria uma fila cuja prioridade é dada por uma função que recebe dois elementos e retorna o de maior prioridade. */
    constructor(priorFunc, queue = []) {
        this.priorFunc = priorFunc;
        this.queue = queue;
    }
    /** Insere um elemento na fila de prioridade. */
    push(data) {
        this.queue.push(data);
    }
    /** Remove e retorna o elemento de maior prioridade (de acordo com a função passada no construtor) */
    pop() {
        if (this.queue.length > 0) {
            const elm = this.queue.reduce((prev, curr) => this.priorFunc(prev, curr));
            const idx = this.queue.findIndex(e => e === elm);
            this.queue.splice(idx, 1);
            return elm;
        }
        return undefined;
    }
    /** Verifica se a fila está vazia. */
    isEmpty() {
        return this.queue.length === 0;
    }
    /**
     * Encontra um elemento na fila (não remove).
     * Se uma função for passada, a comparação será realizada a partir da função.
     */
    find(data) {
        if (typeof data === 'function') {
            const comp = data;
            return this.queue.find(elm => comp(elm));
        }
        return this.queue.find(elm => elm === data);
    }
}
exports.PQueue = PQueue;
//# sourceMappingURL=pqueue.js.map