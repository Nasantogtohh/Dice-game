// Toglogchin eeljig hadgalah huwisagch,1-r toglogc 0, 2-r toglogcyg 1 gey
var activePlayer = 0;
//Toglogchin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];
//Toglogchin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;
//Shooni ali talaaraa buusnig hadgalah huwisagch, 1-6 gesen utgyg sanamsarguigeer uusgej ogno
var diceNumber = Math.floor(Math.random() * 6) + 1;

//Program ehlehed beltgey
//iluu hurdan queryselectroos
document.getElementById("score-0").textContent = 0;
// document.querySelector("#score-0").textContent = 0;
//textcontent iin orond innerhtml bicwel html code bicej bolno//
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
// neg songson ymaa olon udaa ashiglahin orond hurdyg nemhn tuld
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//anonymous funct ashiglan shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //shoog arilgah
    diceDom.style.display = "none";
    //1 buusan tul tsugluulsan onoog n 0 bolgon
    document.getElementById("current-" + activePlayer).textContent = 0;
    //1 buusan tul toglogchin eeljyg solij ogno
    // activePlayer ===0 ? (activePlayer=1) : (activePlayer=0);
    if (activePlayer === 0) {
      activePlayer = 1;
      //ulaan tseg bolon back solih
      //remove iin oron toggle bicwel baiwal ustgaad baihgu bol nemne
      document.querySelector(".player-0-panel").classList.remove("active");
      document.querySelector(".player-1-panel").classList.add("active");
    } else {
      activePlayer = 0;
      //ulaan tseg bolon back solih
      document.querySelector(".player-1-panel").classList.remove("active");
      document.querySelector(".player-0-panel").classList.add("active");
    }
  }
});

//buus
