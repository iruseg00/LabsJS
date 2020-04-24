const MAX_LEN = 21;
var counter = 0;
var id = 0;
const PALITRA =
{
    'красный': 'red',
    'зелёный': 'green',
    'жёлтый': 'yellow',
    'синий': 'blue',
    'белый': 'white'
}

function show(number)
{
    part1.style.display = 'none';
    part2.style.display = 'none';
    part3.style.display = 'none';
    eval(`part${number}`).style.display = 'flex';
}

function validateForm()
{
    if(counter < MAX_LEN)
    {
        var forma = document.forms.forma1;
        var radio = forma.whereAdd.value;
        var text = forma.text.value;
        var color = forma.color.value;
        var list = document.getElementById('out');
        var node = document.createElement("div");            
        var textnode = document.createTextNode(text);     
        node.appendChild(textnode);
        node.classList.add("list");
        node.id = id;
        node.style.backgroundColor = PALITRA[color];
        node.addEventListener('dblclick', ()=>
        {
            node.remove();
            counter--;
        });
        if(radio == 'start')  list.insertBefore(node , list.childNodes[0]);
        else  list.appendChild(node);
        id++;
        counter++;
    }
    else alert("Достигнут предел!");    
    event.preventDefault();
}

function statistics()
{
    alert(`Всего ${counter} элемент(а/ов)!`);
}
