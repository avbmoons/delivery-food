//var link = document.querySelector("link[rel=import]");
var link = document.querySelector("#headerlink");
console.log(link);
var content = link.import.querySelector("#headerin");
document.body.appendChild(content.cloneNode(true));
