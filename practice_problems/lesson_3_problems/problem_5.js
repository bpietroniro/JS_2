/*
Implement encoding and decoding for the rail fence cipher.

- let N be the number of rails
- let L be the length of the message
  - then L is also the longest row length
- period of repetition is 2 * (N - 1)

N = 3:
0 -> 0
1 -> 1
2 -> 2
3 -> 1
4 -> 0
5 -> 1
6 -> 2
7 -> 1
8 -> 0

N = 4:
0 -> 0
1 -> 1
2 -> 2
3 -> 3
4 -> 2
5 -> 1
6 -> 0
7 -> 1
8 -> 2
9 -> 3
10 -> 2
11 -> 1
12 -> 0

N = 5:
0 -> 0
1 -> 1
2 -> 2
3 -> 3
4 -> 4
5 -> 3
6 -> 2
7 -> 1
8 -> 0
9 -> 1
10 -> 2
11 -> 3
12 -> 4
13 -> 3
14 -> 2
15 -> 1
16 -> 0

## Encoding
- set up an array of N rows (strings)
- initialize targetRow = 0
- initialize index = 0
- while index < L
  - for (targetRow; targetRow < N - 1; targetRow += 1)
    - for each row:
      - if the row's index === targetRow, concatenate message[index] to it
      - otherwise concatenate a dot to it
    - index += 1
  - for (targetRow; targetRow > 0; targetRow -= 1)
    - for each row:
      - if the row's index === targetRow, concatenate message[index] to it
      - otherwise concatenate a dot to it
    - index += 1
 - return the rows, dots removed, joined
*/

function encode(message, numRails) {
  message = message.replace(/\s/g, '').toUpperCase();

  let rails = [];
  for (let n = 0; n < numRails; n += 1) {
    rails.push('');
  }

  const messageLength = message.length;
  let targetRail = 0;
  let index = 0;

  while (index < messageLength) {
    for (targetRail; targetRail < numRails - 1; targetRail += 1) {
      if (index === messageLength) break;
      for (let currentRail = 0; currentRail < numRails; currentRail += 1) {
        if (currentRail === targetRail) {
          rails[currentRail] += message[index];
        } else {
          rails[currentRail] += '.';
        }
      }
      index += 1;
    }

    for (targetRail; targetRail > 0; targetRail -= 1) {
      if (index === messageLength) break;
      for (let currentRail = 0; currentRail < numRails; currentRail += 1) {
        if (currentRail === targetRail) {
          rails[currentRail] += message[index];
        } else {
          rails[currentRail] += '.';
        }
      }
      index += 1;
    }
  }

  return rails.map(rail => rail.replaceAll('.', '')).join('');
}

console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3));
console.log(encode("WE ARE DISCOVERED RUN AT ONCE", 6));

function decode(ciphertext, numRails) {
  const messageLength = ciphertext.length;
  let rails = [];
  for (let n = 0; n < numRails; n += 1) {
    rails.push('');
  }

  let targetRail = 0;
  let index = 0;

  while (index < messageLength) {
    for (targetRail; targetRail < numRails - 1; targetRail += 1) {
      if (index === messageLength) break;
      for (let currentRail = 0; currentRail < numRails; currentRail += 1) {
        if (currentRail === targetRail) {
          rails[currentRail] += '?';
        } else {
          rails[currentRail] += '.';
        }
      }
      index += 1;
    }

    for (targetRail; targetRail > 0; targetRail -= 1) {
      if (index === messageLength) break;
      for (let currentRail = 0; currentRail < numRails; currentRail += 1) {
        if (currentRail === targetRail) {
          rails[currentRail] += '?';
        } else {
          rails[currentRail] += '.';
        }
      }
      index += 1;
    }
  }

  index = 0;
  rails = rails.map(rail => {
    let newRail = rail;
    while (newRail.indexOf('?') > 0) {
      newRail = rail.replace('?', ciphertext[index]);
      index += 1;
    }
    return newRail;
  });

  console.log(rails);
}

decode('WVTEOEAOACRENRSEECEIDLEDF', 3);
