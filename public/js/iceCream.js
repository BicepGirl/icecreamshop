function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#todos');
const url = 'http://localhost:3000/api/icecream';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        // then(function(data) { kan skrivas som then((data) => { sen exakt samma som under
        console.log(data.icecream);
        console.log("Visa första i json-objektet: " + data.icecream[0].icecreamName);
        let icecream = data.icecream;

        // Returnerar json-objekten genom att skapa en ny array med map()
        return icecream.map(function(todo) {
            let li = createNode('li');
            li.innerHTML = todo.icecreamName + ' : ' + todo.icecreamContent;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });