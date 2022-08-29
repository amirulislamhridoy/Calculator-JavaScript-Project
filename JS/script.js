const container = document.getElementById("container");
let input = document.getElementById("input");
const buttons = document.getElementsByTagName("button");

let empty = "";
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/","."];
const mark = ['+','-','*','/']
let set = '';
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener("click", (e) => {
    let digit = e.target.innerText;
    if (digit === "+") {
      if(mark.includes(empty[empty.length - 1])){ return }
      empty += digit;
      input.value = empty;
    } else if (digit === "-") {
      if(mark.includes(empty[empty.length - 1])){ return }
      empty = empty + digit;
      input.value = empty;
    } else if (digit === "x") {
    if(mark.includes(empty[empty.length - 1])){ return }
      empty = empty + '*'
      input.value = empty;
    } else if (digit === "/") {
      if(mark.includes(empty[empty.length - 1])){ return }
      empty += digit;
      input.value = empty;
    } else if(digit === 'DEL'){
        const b = empty.slice(0, empty.length - 1);
        empty = b;
        input.value = empty
    }
    else if (digit === "=") {
      if(!empty) return
      let sum = eval(empty);
      input.value = sum;
      empty = "";
      sum = "";
    } else if (digit === "C") {
        empty = ''
        input.value = empty
    } else {
      empty += digit;
      input.value = empty;
    }
  });
}

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if(e.code === 'NumpadEnter' && !empty) return
    console.log(empty)
    let sum = eval(empty);
    input.value = sum;
    return (empty = "");
  } else if (e.key === "Backspace") {
    const b = empty.slice(0, empty.length - 1);
    empty = b;
    return (input.value = empty);
  } else if (e.key.length > 1) {
    return console.log("ads");
  } else if (!num.includes(e.key)) {
    return input.value = empty;
  }
  empty = empty + e.key;
  input.value = empty;
});
