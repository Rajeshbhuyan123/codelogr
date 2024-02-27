//Python,Dart
export function print(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    console.log(args[0]);
  } else {
    console.log(...args);
  }
}

//C
export function printf(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    console.log(args[0]);
  } else {
    console.log(...args);
  }
}

//Java
export let System = {
      out: {
        println : function(...args) {
          if (args.length === 1 && Array.isArray(args[0])) {
                console.log(args[0]);
              } else {
                console.log(...args);
              }
        }
      }
}

//php
export function echo(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    console.log(args[0]);
  } else {
    console.log(...args);
  }
}

//Ruby
export function puts(...args) {
  if (args.length === 1 && Array.isArray(args[0])) {
    console.log(args[0]);
  } else {
    console.log(...args);
  }
}

//Go
export let fmt = {

    println : function(...args) {
      if (args.length === 1 && Array.isArray(args[0])) {
            console.log(args[0]);
          } else {
            console.log(...args);
          }
    }
}

