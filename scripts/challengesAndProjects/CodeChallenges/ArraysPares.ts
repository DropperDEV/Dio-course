var array = [2, 3, 5, 7, 11, 13, 18, 34];
let arr_vazio = [];

// Complete o laço de repetição:
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    arr_vazio.unshift(array[i]);
  }
}

// Ordenar o array em ordem crescente
arr_vazio.sort(function (a, b) {
  return a - b;
});

// Mostrar o array com quebra de linha
console.log(arr_vazio.join('\n'));
