const newDiv = document.createElement("div")


document.body.appendChild(newDiv)
for (let i = 0; i < 6; i++) {
    const newContent = document.createTextNode("Hola soy una P");
    newDiv.appendChild(newContent);

}