let h1 = document.createElement('h1')
h1.innerText = 'Dom is easy to flex'

let div = document.createElement('div');
div.appendChild(h1);

document.body.append(div)

div.classList.add('ping')