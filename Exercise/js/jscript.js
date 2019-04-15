console.log("Hi Jscripts")

const elements = document.querySelectorAll(".article__header");
console.log("elements", elements);

elements[0].classList.add("brackets");
elements[1].classList.add("brackets");

for(let i = 0; i < elements.lenghth; i++){
    elements[i].classList.add("forloop");
}

elements.forEach(header => {
    header.classList.add("forEach");
})