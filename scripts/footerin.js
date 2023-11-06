var link = document.querySelector("link[rel=import]");

var content = link.import.querySelector("#footerin");
document.body.appendChild(content.cloneNode(true));
