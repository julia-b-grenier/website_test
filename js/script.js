let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

let p = document.createElement("P");
let t = document.createTextNode("Paragraph text.");
p.appendChild(t);
document.body.appendChild(p);