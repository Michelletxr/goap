import { State } from './state';
export interface Action {
    name: string;
    precond: State;
    effects: State;
    cost: number;
}
export declare const actions: Action[];
