/**
 * Um estado é um objeto com propriedades cujos valores são boleanos ou numéricos.
 */
export interface State {
    [key: string]: number | boolean;
}
/**
 * Verifica se os valores de todas propriedades de um estado são iguais aos valores das mesmas
 * propriedades em outro estado. Diz-se que o estado A "casa" com B se, para cada propriedade
 * em A, se ela existe em B, então seu valor é o mesmo em A e B.
 */
export declare function match(a: State, b: State): boolean;
/**
 * Verifica se pelo menos uma propriedade em A possui o mesmo valor em B.
 */
export declare function partialMatch(a: State, b: State): boolean;
/**
 * Verifica se dois estados são iguais. Eles são considerados iguais se possuem o mesmo número
 * de propriedades e todas possuem os mesmos valores.
 */
export declare function isEqual(a: State, b: State): boolean;
/**
 * Retorna a distância entre dois estados. A distância é calculada pela quantidade de propriedades
 * que um difere do outro.
 */
export declare function distance(s1: State, s2: State): number;
