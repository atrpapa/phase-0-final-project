var h2 = document.createElement("h2");

h2.textContent = "No More Limits!";

document.querySelector("body").appendChild(h2);

h2.addEventListener("mouseover", function() {
    h2.style.backgroundColor = "black";
});

h2.addEventListener("mouseout", function() {
    h2.style.backgroundColor = "";
});
