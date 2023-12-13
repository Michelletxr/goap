import { Action } from './actions';
import { State } from './state';
/**
 * Retorna o estado gerado pela execução de uma ação sobre um estado original.
 */
export declare function next(original: State, action: Action): State;
/**
 * Verifica se as ações de um plano transforma um estado inicial (current) em um estado
 * objetivo (goal). A verificação é feita a partir das precondições de cada ação e os
 * seus efeitos (transformações no estado).
 */
export declare function isValidPlan(initial: State, goal: State, plan: Action[]): boolean;
/**
 * Cria um plano (sequência de ações) para levar um estado inicial a um estado final
 * a partir de um conjunto de ações possíveis.
 * @param initial Estado inicial.
 * @param goal    Estado final
 * @param actions Conjunto de ações possíveis.
 * @returns       Sequência de ações para levar `initial` a `goal`.
 */
export declare function definePlan(initial: State, goal: State, actions: Action[]): Action[];
