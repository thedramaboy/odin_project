const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph1 = document.createElement("p");
paragraph1.textContent = "Hey I'm red";
paragraph1.style.color = "red";
container.appendChild(paragraph1);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

const divElement = document.createElement("div");
divElement.style.cssText = "border: solid black; background: pink";
const header1 = document.createElement("h1");
header1.textContent = "I'm in div";
divElement.appendChild(header1);
const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
divElement.appendChild(paragraph2);
container.appendChild(divElement);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!")

