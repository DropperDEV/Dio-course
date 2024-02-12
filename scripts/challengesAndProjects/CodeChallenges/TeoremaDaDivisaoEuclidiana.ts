let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

let q = Math.trunc(a / b); // Use Math.trunc para garantir que o quociente seja um número inteiro

let r = a % b;

// Caso o resto seja negativo, ajuste os valores
if (r < 0) {
  r += Math.abs(b);
  q = (a - r) / b;
}

print(q + " " + r);
