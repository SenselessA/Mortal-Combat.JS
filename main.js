function CreatePlayer(name = '', img = '', hp = 100) {
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = [];
    this.attack = function() {
        console.log(`${this.name} Fight...`);
    };
}

function createPlayer(className, hero, healthPoints) {
    const arenas = document.querySelector('.arenas');

    const player = document.createElement('div');
    player.classList.add(className);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    const character = document.createElement('div');
    character.classList.add('character');

    const life = document.createElement('div');
    life.classList.add('life');
    const name = document.createElement('div');
    name.classList.add('name');

    const img  = document.createElement('img');
    img.src = hero.img;


    life.style.width = `${healthPoints}%`;
    name.innerText = hero.name;

    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    character.appendChild(img);
    arenas.appendChild(player);
}

const player1 = new CreatePlayer('SCORPION', 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif', 50);
const player2 = new CreatePlayer('SUB-ZERO','http://reactmarathon-api.herokuapp.com/assets/subzero.gif', 80);

createPlayer('player1', player1, 50);
createPlayer('player2', player2, 80);