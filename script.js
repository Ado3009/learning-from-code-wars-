'use strict';
//! rijesenje prvog problema

// function toConvertCamelCase(str) {
//   let newSrt = '';

//   if (str) {
//     let word = str.split(/[-_]/g);

//     for (let i in word) {
//       if (i > 0) {
//         newSrt += word[i].charAt(0).toUpperCase() + word[i].slice(1);
//       } else {
//         newSrt += word[i];
//       }
//     }
//   } else {
//     return newSrt;
//   }
//   return newSrt;
// }
// console.log(toConvertCamelCase('the_stealth_warrior'));

//!------------------------------------------------------------
//! DRUGI PROBLEM

// function likes(names) {
//   var templates = [
//     'no one likes this',
//     '{name} likes this',
//     '{name} and {name} like this',
//     '{name}, {name} and {name} like this',
//     '{name}, {name} and {n} others like this',
//   ];
//   var idx = Math.min(names.length, 4);

//   return templates[idx].replace(/{name}|{n}/g, function (val) {
//     return val === '{name}' ? names.shift() : names.length;
//   });
// }

// likes('adis');

// !---------------------------------------------------------------- \\

//! TRECI PROBLEM

// function DNAstandard(dna) {
//   const arr = dna.toLowerCase().split('');
//   let output = '';
//   for (let i = 0; i < arr.lenght; i++) {
//     if (arr[i] === 'a') {
//       arr[i] = 't';
//       output += arr[i];
//     } else if (arr[i] === 't') {
//       arr[i] = 'a';
//       output += arr[i];
//     } else if (arr[i] === 'c') {
//       arr[i] = 'g';
//       output += arr[i];
//     } else if (arr[i] === 'g') {
//       arr[i] = 'c';
//       output += arr[i];
//     }
//   }
//   return output.toUpperCase();
// }

//! ------------------------------------------------------------------- \\
//! CETVRTI PROBLEM

function validatePIN(pin) {
  if (pin.length == 4 || pin.length == 6) {
    for (let i = 0; i < pin.length; i++) {
      if (
        pin[i] == '0' ||
        pin[i] == '1' ||
        pin[i] == '2' ||
        pin[i] == '3' ||
        pin[i] == '4' ||
        pin[i] == '5' ||
        pin[i] == '6' ||
        pin[i] == '7' ||
        pin[i] == '8' ||
        pin[i] == '9'
      );
      else return false;
    }
    return true;
  } else return false;
}
