import { Action } from './actions';
import { State } from './state';
export declare class Npc {
    private _state;
    private _goal;
    private _actions;
    private _plan;
    constructor(state: State | undefined, actions: Action[]);
    get state(): State;
    get plan(): Action[];
    get goal(): State;
    set goal(goal: State);
    execute(): void;
    printStates(): void;
}
