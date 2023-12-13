"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = exports.isEqual = exports.partialMatch = exports.match = void 0;
/**
 * Verifica se os valores de todas propriedades de um estado são iguais aos valores das mesmas
 * propriedades em outro estado. Diz-se que o estado A "casa" com B se, para cada propriedade
 * em A, se ela existe em B, então seu valor é o mesmo em A e B.
 */
function match(a, b) {
    return Object.keys(a).every(k => b[k] === undefined || a[k] === b[k]);
}
exports.match = match;
/**
 * Verifica se pelo menos uma propriedade em A possui o mesmo valor em B.
 */
function partialMatch(a, b) {
    return Object.keys(b).some(key => b[key] === a[key]);
}
exports.partialMatch = partialMatch;
/**
 * Verifica se dois estados são iguais. Eles são considerados iguais se possuem o mesmo número
 * de propriedades e todas possuem os mesmos valores.
 */
function isEqual(a, b) {
    const k1 = Object.keys(a);
    const k2 = Object.keys(b);
    return k1.length === k2.length && k1.every(k => a[k] === b[k]);
}
exports.isEqual = isEqual;
/**
 * Retorna a distância entre dois estados. A distância é calculada pela quantidade de propriedades
 * que um difere do outro.
 */
function distance(s1, s2) {
    const k1 = Object.keys(s1);
    const k2 = Object.keys(s2);
    const equals = k1.filter(k => s1[k] === s2[k]); // props cujos valores são iguais em s1 e s2
    const min = k1.length < k2.length ? k1.length : k2.length; // quem tem menos props?
    return min - equals.length; // retorna a menor qde de props com exceção das props iguais.
}
exports.distance = distance;
//# sourceMappingURL=state.js.map