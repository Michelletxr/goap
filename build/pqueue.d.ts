/** Fila de prioridade genérica. */
export declare class PQueue<T> {
    private priorFunc;
    private queue;
    /** Cria uma fila cuja prioridade é dada por uma função que recebe dois elementos e retorna o de maior prioridade. */
    constructor(priorFunc: (a: T, b: T) => T, queue?: T[]);
    /** Insere um elemento na fila de prioridade. */
    push(data: T): void;
    /** Remove e retorna o elemento de maior prioridade (de acordo com a função passada no construtor) */
    pop(): T | undefined;
    /** Verifica se a fila está vazia. */
    isEmpty(): boolean;
    /**
     * Encontra um elemento na fila (não remove).
     * Se uma função for passada, a comparação será realizada a partir da função.
     */
    find(data: T | ((e: T) => boolean)): T | undefined;
}
