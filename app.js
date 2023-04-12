//togloomin buh gazar ashiglagdah global
//togloom duussan esehyg shalgah tolowin huwisagch
var isGameOver;
var activePlayer;
var scores;
var roundScore;
// neg songson ymaa olon udaa ashiglahin orond hurdyg nemhn tuld
var diceDom = document.querySelector(".dice");

initGame();

//start game
function initGame() {
  isGameOver = false;
  // Toglogchin eeljig hadgalah huwisagch,1-r toglogc 0, 2-r toglogcyg 1 gey
  activePlayer = 0;
  //Toglogchin tsugluulsan onoog hadgalah huwisagch
  scores = [0, 0];
  //Toglogchin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
  roundScore = 0;
  //Program ehlehed beltgey
  //iluu hurdan queryselectroos
  document.getElementById("score-0").textContent = 0;
  // document.querySelector("#score-0").textContent = 0;
  //textcontent iin orond innerhtml bicwel html code bicej bolno//
  document.querySelector("#score-1").textContent = 0;
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
  //Toglogchin neryg butsaajn grgah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  //ongyg butsaah
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  diceDom.style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//anonymous funct ashiglan shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    //1-6 hurtelh random utga
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shooni zurgyg web deer gargaj ireh
    diceDom.style.display = "block";
    //buusan sanamsrgu toond hargalzh zurgyg web deeer haruulah
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan too n 1 ees ylgatai bol idewhte toglogcin eeljin onoog nemegduuleh
    if (diceNumber !== 1) {
      //1-ees ylgaatai too buulaa.Buusan toog toglogchid nemj ogno
      roundScore = roundScore + diceNumber;
      //ug toglogch hojson esehig shalgah

      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      //eelj solih uildl
      switchToNextPlayer();
    }
  } else {
    alert("Game over");
  }
});

//hold towcni event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver !== true) {
    //ug toglogchin tsugluulsan eeljni onooog global onoon deer n nemj ogno
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //delgets deer onoog n oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //ug toglogch hojson eseh
    if (scores[activePlayer] >= 20) {
      //togloomig duuussan tolowt oruulna
      isGameOver = true;
      //ylagch gsen textyg nernyh orond tawina
      document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
      document
        .querySelector(".player-" + activePlayer + "panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "panel")
        .classList.remove("active");
    } else {
      //eelj solih uildl
      switchToNextPlayer();
    }
  } else {
    alert("New game товчийг дарна уу!");
  }
});

//new game event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

//eelj solih uildl
function switchToNextPlayer() {
  //eeljiin onoog n noilno
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //toglogchin eeljyg solin
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  //ulaan tseg bolon back solih
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".player-0-panel").classList.toggle("active");

  //shoog arilgah
  diceDom.style.display = "none";
}
