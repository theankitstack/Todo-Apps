let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector(".inp-text");


btn.addEventListener("click" , function() {
    let checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.classList.add("check");

    let item = document.createElement("li");
    item.innerText = inp.value;
    item.classList.add("list-item");

    let detBtn = document.createElement("button");
    detBtn.innerText = "detete";
    detBtn.classList.add("delete");

    item.appendChild(detBtn);
    ul.appendChild(item);
    // item.appendChild(checkBtn);
    // inp.value = ""
    // checkBtn.value = ""
});

ul.addEventListener("click" , function(event) {
   if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
   }
});

