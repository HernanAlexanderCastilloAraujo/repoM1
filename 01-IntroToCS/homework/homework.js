"use strict";

function BinarioADecimal(num) {
  //// forma del estudiante
  //   num = num.split("").reverse();
  //   let decimal = 0;
  //   for (let i = 0; i < num.length; i++) {
  //     decimal += num[i] * 2 ** i;
  //   }
  //   return decimal;

  // forma del profesor igual a la del estudiante

  // forma sin métodos split y reverse
  let decimal = 0;

  for (let i = num.length - 1; i > -1; i--) {
    decimal += num[i] * 2 ** (num.length - 1 - i);
  }
  return decimal;
}

function DecimalABinario(num) {
  //   // forma del estudiante
  //   let result = [];
  //   while (num > 0) {
  //     let resi = num % 2;
  //     result.push(resi);
  //     num = Math.floor(num / 2);
  //   }
  //   result = result.reverse().join("");
  //   return result;
//   // forma del profesor
//   let result = [];
//   while (num > 0) {
//     let resi = num % 2;
//     num = Math.floor(num / 2);
//     result.unshift(resi);
//   }
//   result = result.join("");
//   return result;

     // forma sin métodos join y reverse
    let binario = ''
     while (num > 0) {
         let resi = num % 2;
         binario = resi + binario;
         num = Math.floor(num / 2);
     }
     return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
