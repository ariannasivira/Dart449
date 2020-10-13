let name = document.querySelector("#nameSlot").value;
const displaymsg = document.querySelector('#display');

const checker = document.querySelector('#checkItOut');
checker.onclick = function() {
  myPassFunction();
}

function myPassFunction() {
  name = document.querySelector("#nameSlot").value;
  console.log(name);
  if (name == "Santo") {
    displaymsg.textContent = "welcome " + name;
  } else if (name == "Arianna") {
    displaymsg.textContent = "welcome " + name;
  } else {
    displaymsg.textContent = "No! not you,  " + name;
  }

}