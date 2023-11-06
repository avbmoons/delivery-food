var link = document.querySelector('link[rel=import]');

var content = link.import.querySelector('#test');
//var content = link.import.getElementById("test");
document.body.appendChild(content.cloneNode(true));
