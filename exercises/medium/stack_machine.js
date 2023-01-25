/*
Write a function that implements a miniature stack-and-register
programming language.

### Rules:
- all operations other than `PUSH`, `n` and `PRINT` involve popping  a value from the stack
- pushing or printing the value in the register does not change
  the register
- all operations are integer-based (notably division and remainder)
- all inputs can be assumed to be valid programs
- input will be a string of commands separated by spaces
- output: nothing is explicitly returned; values may be logged
  to the console if there are any `PRINT` commands in the input

### Data Structure:
- program: an array of string commands
- stack: an array
- register: an integer

### Algorithm:
- split the input into an array of commands
- initialize stack to [] and register to 0
- loop through the commands array
  - use a conditional to route each command to the appropriate
    operation
*/

function minilang(progString) {
  const commands = progString.split(' ');
  let stack = [];
  let register = 0;

  commands.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(command, 10);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
