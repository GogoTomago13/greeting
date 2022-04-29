function greet(name) {
  let greeting = "Hello " + name + "!";
  if (name === null){
    name = 'Hello There!'
  }
  if (name.toUpperCase === name){ 
    greeting = "HELLO " + name.toUpperCase;
  }
  function add(name1){ 
    greeting = greeting + ", " + name1;
  }
  if (Array.isArray(name)){ 
    greeting = "Hello"
    name.forEach(add);
  }
  return greeting;
}
