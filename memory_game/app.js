const cardArray = [
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img: 'images/pizza.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img: 'images/pizza.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    }
]
function restartGame() {
    gridDisp.innerHTML = '';
    cardchosen = [];
    cardid = [];
    won.length = 0;
    att = 0;
    attDisp.textContent = att;
    cardArray.sort(() => 0.5 - Math.random());
    createBoard();
    res.textContent = '';
}
function gotoloc(){
    window.location.href = '/home/ash/Documents/web/index.html';
}
cardArray.sort(()=> 0.5 - Math.random())//sorts shuffle randomly
const restartButton = document.getElementById('restart');
const back = document.getElementById('back');
back.addEventListener('click', gotoloc)
restartButton.addEventListener('click', restartGame);
const gridDisp = document.querySelector('#grid')// finds grid div
let cardchosen =[]
let cardid = []
const won = []
const res = document.querySelector('#result')
let attDisp = document.querySelector('#attempts')


//console.log(cardArray)

function createBoard(){
    att = 0
    attDisp.textContent = att;
    for(let i=0; i< cardArray.length;i++){
       const cards = document.createElement('img')
       cards.setAttribute('src', 'images/blank.png')
       cards.setAttribute('data-id',i)
       cards.addEventListener('click', flipcard)//click on the card we go to func
       //console.log(cards,i)
       gridDisp.appendChild(cards)
    }
}

createBoard()

function checkmatch(){
    const card = document.querySelectorAll('img')
    //const opt1 
    console.log('Check Match')
    

    if(cardid[0] === cardid[1])
    {
        card[cardid[0]].setAttribute('src', 'images/blank.png')
        card[cardid[1]].setAttribute('src', 'images/blank.png')
        alert("same image chosen")
    }
    if(cardchosen[0] === cardchosen[1])
    {
        alert('Matched!!')
        card[cardid[0]].setAttribute('src', 'images/white.png')
        card[cardid[1]].setAttribute('src', 'images/white.png')
        card[cardid[0]].removeEventListener('click',flipcard)
        card[cardid[1]].removeEventListener('click',flipcard)
        won.push(cardchosen)
    }
    else{
        card[cardid[0]].setAttribute('src', 'images/blank.png')
        card[cardid[1]].setAttribute('src', 'images/blank.png')


    }
    res.textContent = won.length
    cardchosen = [] // agin from start
    cardid = []
    
    if(won.length === (cardArray.length/2)){
        res.textContent =  'Congrats You WON!!'
    }

}

function flipcard()
{

    const idid = this.getAttribute('data-id')
    console.log(cardArray[idid].name)
    cardchosen.push(cardArray[idid].name)
    cardid.push(idid)
    console.log('cliked', idid)

    this.setAttribute('src',cardArray[idid].img)
    if(cardchosen.length === 2){// to select pair
        att ++
        console.log(att)
        attDisp.textContent = att.toString()
        setTimeout(checkmatch, 500)//call a function after certain amount of time
    }
}