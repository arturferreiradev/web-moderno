// Mesmo não declarando o interpretador sobe a declaração da variável quando usado o var
console.log(a);
var a = 2;
console.group('a =', a);

/* Com let vai apresentar erro:
console.log('b=', b);
let b = 2;
console.log("b =", b)
*/