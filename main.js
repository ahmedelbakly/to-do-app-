// let toDoList = [];

// function addToDo() {
//   const inputValue = document.getElementById("todo").value;

//   toDoList.unshift(inputValue);
//   console.log(toDoList);
// }

// const showValue = document.getElementById("value");
// const list = document.getElementById("value");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     toDoList.forEach(function(e) {
//      let li = document.createElement("li");
//      li.innerText=e;
//      list.appendChild(li)
//         console.log(li);
//     });
// })

function addToDo() {
  const inputValue = document.getElementById("todo").value;
  console.log(inputValue);
  const list = document.getElementById("list");
  console.log(list);
  let li = document.createElement("li");
  let liText = document.createTextNode(inputValue);
  li.appendChild(liText);
  list.appendChild(li);
  console.log(li);
  console.log(liText);
  
}
const btn = document.getElementById("btn");



///////////////////////////////////////////////////////////////

const title = document.getElementById("title");

let m = 1;

function autoWrite() {
  const text3 = "To Do app";
  //const text2 = "I love Omar So Much";

  title.innerHTML = text3.slice(0, m);

  m++;
  console.log(m);
  if (m > text3.length) {
    m = 1;
  }
}
setInterval(autoWrite, 800);






const urlBg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const body = document.getElementsByTagName("body")[0];

let i = 1;

function changeBg() {
  body.style.backgroundImage = `url("imges/${urlBg[i]}")`;

  i++;
  if (i >= urlBg.length) {
    i = 0;
  }
  console.log(container.style.backgroundImage);
}

setInterval(changeBg, 15000);
