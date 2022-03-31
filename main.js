const plus = document.querySelector(".plus");
const inputs = document.querySelector(".inputs");
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const list = document.querySelector("ul");
const reset = document.getElementById('reset');

plus.addEventListener("click", () => {
  plus.style.transform = "scale(0.8)";
  inputs.style.transform = "scale(1)";
  input.focus();
  //bouncing buttons
  setInterval(function () {
    plus.style.transform = "scale(1)";
  }, 450);
});

// Creating element onclick btn
btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value == "") {
    alert("Please Write Something: ");
  } else {
    // btn style

    //bouncing buttons

    btn.style.transform = "scale(0.85)";

    // Creating virtual elements
    const li = document.createElement("li");

    //Creating P of ul
    const sublist = document.createElement("p");

    // Creating checkbox
    const newput = document.createElement("INPUT");
    newput.setAttribute("type", "checkbox");

    li.textContent = `${input.value}`;
    li.style.marginRight = "5px";

    sublist.appendChild(li);
    sublist.appendChild(newput);
    sublist.classList.add("p");

    list.appendChild(sublist);

    input.value = "";

    reset.addEventListener('click', (e) => {
      list.removeChild(sublist);
      reset.style.transform = "scale(0.85)";
    })

    setInterval(function () {
      btn.style.transform = "scale(1)";
      reset.style.transform = "scale(1)";
    }, 450);
  }
});

//adding enter funtinality
input.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (e.keyCode === 13) {
    if (input.value == "") {
      alert("Please Write Something: ");
    } else {
      // btn style
      btn.style.transform = "scale(0.85)";

      // Creating virtual elements
      const li = document.createElement("li");

      //Creating P of ul
      const sublist = document.createElement("p");

      // Creating checkbox
      const newput = document.createElement("INPUT");
      newput.setAttribute("type", "checkbox");

      li.textContent = `${input.value}`;
      li.style.marginRight = "5px";

      sublist.appendChild(li);
      sublist.appendChild(newput);

      sublist.classList.add("p");
      list.appendChild(sublist);

      input.value = "";

      reset.addEventListener('click', (e) => {
        list.removeChild(sublist);
        reset.style.transform = "scale(0.85)";
      })
  
      setInterval(function () {
        btn.style.transform = "scale(1)";
        reset.style.transform = "scale(1)";
      }, 450);
    }
  }
});

