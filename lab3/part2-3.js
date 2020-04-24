const PALITRa =
[
    'red',
    'green',
    'yellow',
    'blue',
    'white'
];
var id = 0;
var bufferId = 0;
var current;
const getRandomInt = (max)=> (Math.random() * max).toFixed();
document.addEventListener('keydown' , keydown);

function draw(identificator) 
{
    var x = getRandomInt(400);
    var y = getRandomInt(300);
    var width = getRandomInt(190);
    var height = getRandomInt(145);
    var canvas = document.getElementById(identificator);
    var node = document.createElement("div"); 
    node.style.width = width + 'px';
    node.style.height = height + 'px';
    node.style.backgroundColor = PALITRa[getRandomInt(5)];  
    node.style.position = 'absolute';
    node.style.top = y + 'px';
    node.style.left = x + 'px';
    if(identificator == 'canvas2')
    {
        node.setAttribute('draggable' , 'true');
        node.addEventListener('dragstart' , dragStart);
    }
    else
    {
        node.addEventListener('click' , accentuation);
        node.id = id;
        id++;
    }   
    canvas.appendChild(node);
}

function accentuation()
{
    document.getElementById(bufferId).classList.remove("accentuation");
    bufferId = this.id;
    document.getElementById(this.id).classList.add("accentuation");
}

function keydown()
{
    var element = document.getElementById(bufferId);
    var cs = window.getComputedStyle(element);
    var left =  parseInt(cs.left);
    var top =  parseInt(cs.top);
    var width = parseInt(cs.width);
    var height = parseInt(cs.height);
    switch(event.keyCode)
    {
        case 37:
            if(left > 2)
                element.style.left = left - 4 + "px";
            break;
        case 38:
            if(top > 2)
                element.style.top = top - 4 + "px";
            break;
        case 39:
            if(left + width < 578)
                element.style.left = left + 4 + "px";
            break;  
        case 40:
            if(top + height < 435)
                element.style.top = top + 4 + "px";
            break;            
        default: break;
    }
}

function dragStart(event) 
{
    current = this;
}

function dragOver(event) 
{
    event.preventDefault();
}

function dragDrop(event) 
{
    var x = event.offsetX == undefined ? event.layerX : event.offsetX;
    var y = event.offsetY == undefined ? event.layerY : event.offsetY;
    var heightHalf = parseInt(current.style.height) / 2;
    var widthHalf = parseInt(current.style.width) / 2;
    current.style.top = y - heightHalf  + 'px';
    current.style.left =  x - widthHalf + 'px';
    document.getElementById("canvas2").appendChild(current);
}
