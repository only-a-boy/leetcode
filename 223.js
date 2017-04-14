/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var sum = (D - B) * (C - A) + (H - F) * (G - E);
    if(Math.min(C,G) > Math.max(A,E) && Math.min(D,H) > Math.max(B,F)){
        sum = sum - (Math.min(C,G) - Math.max(A,E)) * (Math.min(D,H) - Math.max(B,F))
    }
    return sum;
};