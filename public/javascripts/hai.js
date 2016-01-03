'use strict';

var para = document.createElement("p");
para.id = 'mypara';
var text = document.createTextNode("Yay my text");
para.appendChild(text);
document.body.appendChild(para);