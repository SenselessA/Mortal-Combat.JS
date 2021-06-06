const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const Player = function () {
    let count = 1;

    function Player(name = '', img = '', hp = 100) {
        this.player = count++;
        this.name = name;
        this.hp = hp;
        this.img = img;
        this.weapon = [];
        this.attack = function() {
            console.log(`${this.name} Fight...`);
        };
    }

    return Player
}();

function createElement(tag, className) {
    const newTag = document.createElement(tag);

    if (className) {
        newTag.classList.add(className);
    }

    return newTag;
}

function createPlayer(hero) {

    const player = createElement('div', 'player' + hero.player);
    const progressbar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const life = createElement('div', 'life');
    const name = createElement('div', 'name');
    const img  = createElement('img');

    img.src = hero.img;

    life.style.width = `${hero.hp}%`;
    name.innerText = hero.name;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);

    return player;
}

const player1 = new Player('SCORPION', 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 100);
const player2 = new Player('SUB-ZERO','http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 100);

function changeHP(player) {
    const playerLife = document.querySelector('.player' + player.player + ' .life')
    player.hp -= Math.ceil(Math.random() * 20);

    if (player.hp < 0) {
        player.hp = 0;
    }

    playerLife.style.width = player.hp + '%';

    if (player1.hp === 0) {
        arenas.appendChild(playerWins(player2.name));
    } else if(player2.hp === 0) {
        arenas.appendChild(playerWins(player1.name));
    }
}

function playerWins(name) {
    const winsTitle = createElement('div', 'loseTitle');
    winsTitle.innerText = name + ' Wins!';

    randomButton.disabled = true;

    return winsTitle;
}

randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
