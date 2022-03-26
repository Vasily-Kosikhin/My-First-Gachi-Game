"use strict"

let music = document.querySelector(`.audoioContainer`);
music.style.display = `none`;
let enter = document.querySelector(`.enter`)
let rules = document.querySelector(`.rules`);
rules.style.display =`none`;
let difficulty = document.querySelector(`.difficulty`);
difficulty.style.display =`none`;
let game = document.querySelector(`.game`);
game.style.display =`none`;
let gameLost = document.querySelector(`.gameLost`);
gameLost.style.display =`none`;
let gameWinBanner = document.querySelector(`.wiinerBannerBody`);
gameWinBanner.style.display =`none`;
let records = document.querySelector(`.records`);
records.style.display =`none`;
// ENTRANCE 
let buttonNo = document.querySelector(`#enterButtonNo`);
let enterText = document.querySelector(`#enterText`);

buttonNo.addEventListener(`click`, enterTextChanger);

let enterTextChangerCounter = 0;
function enterTextChanger() {
    switch (enterTextChangerCounter) {
        case 0:
          enterText.innerHTML = `Maybe you will change your mind?`;
          enterTextChangerCounter += 1;
          playSong(`fuckYou`)
          break;
        case 1:
          enterText.innerHTML = 'You cant say "No" to your Master!!!';
          enterTextChangerCounter += 1;
          playSong(`spankOne`)
          stopPlaySong(`fuckYou`)
          break;
        case 2:
          enterText.innerHTML = 'I will find you little boy!';
          enterTextChangerCounter += 1;
          playSong(`spankTwo`)
          stopPlaySong(`spankOne`)
          break;
        case 3:
          enterText.innerHTML = 'I will be at your place in 15 minutes, press whatever you want. Spanking is inevitable';
          playSong(`lubeItUp`)
          stopPlaySong(`spankTwo`)
          break;        
      }
}

// ПРАВИЛА 

let buttonYes = document.querySelector(`#enterButtonYes`);


buttonYes.addEventListener(`click`, nextMenu1);

function nextMenu1() {
    enter.style.display =`none`;
    rules.style.display =``;
    playSong(`thankYouSir`)
    
}

let rulesButton = document.querySelector(`#rulesButton`);

rulesButton.addEventListener(`click`, nextMenu2);

function nextMenu2() {
    rules.style.display =`none`;
    difficulty.style.display =``;
    playSong(`OhYesSir`);
    stopPlaySong(`thankYouSir`);
}

// СЛОЖНОСТЬ 


let bossDifficultyButton = document.querySelector(`#bossDifficultyButton`);
let boyDifficultyButton = document.querySelector(`#boyDifficultyButton`);
let slaveDifficultyButton = document.querySelector(`#slaveDifficultyButton`);



bossDifficultyButton.addEventListener(`click`, () => boyDifficulty(3));
boyDifficultyButton.addEventListener(`click`, () => boyDifficulty(5));
slaveDifficultyButton.addEventListener(`click`, () => boyDifficulty(10));

let fullSemen;

function boyDifficulty(num) {
  semenCounter.innerHTML = `${num}`
  if (num == 3) {
    playSong(`lash`)
    if (document.querySelector(`.OhYesSir`)) {
      stopPlaySong(`OhYesSir`)
    }
  } else if (num == 5) {
    playSong(`boyNexDoor`)
    if (document.querySelector(`.OhYesSir`)) {
      stopPlaySong(`OhYesSir`)
    }
  } else {
    playSong(`ourDaddy`)
    if (document.querySelector(`.OhYesSir`)) {
      stopPlaySong(`OhYesSir`)
    }
  }
  fullSemen = Number(semenCounter.innerHTML);
  difficulty.style.display =`none`;
  game.style.display =``;
}


// МЕХАНИКА ИГРЫ НАЧАЛАСЬ

// ВВОД ЧИСЕЛ 

let inputBarBottomInput = document.querySelector(`.inputBarBottomInput`)

inputBarBottomInput.addEventListener(`input`, inputOnlyNumbers )
let reg = /[A-Za-zА-Яа-яЁё]/g

function inputOnlyNumbers() {
  this.value = this.value.replace(reg, ``);
  this.value = this.value.substr(0, 4)
}

// КНОПКА БИЛИ. ВАНЫ. СЛЕЙВЫ

// let numberResult = document.querySelectorAll(`#numberResult`)
let numberResult = document.querySelectorAll(`.attemptReult`)
let gameMainButton = document.querySelector(`.gameMainButton`);
let winCounditionCount = 0;

gameMainButton.addEventListener(`click`,() => inputNumberChecker());

function inputNumberChecker() {
  for (let i = 0; i < 4; i++) {
    if (inputBarBottomInput.value[i] == MasterNumbers[i]) {
      numberResult[i].innerHTML = `<img class="bigBilly">`
    } else if (MasterNumbers.includes(Number(inputBarBottomInput.value[i]))) {
      numberResult[i].innerHTML = `<img class="bigVan">`
    } else {
      numberResult[i].innerHTML = `<img class="bigSlave">`
    }
  }
  
// ВЫИГРЫШЬ 

  for (let i = 0; i < 4; i++) {
    if (numberResult[i].innerHTML == `<img class="bigBilly">`) {
      winCounditionCount += 1;
      if (winCounditionCount == 4) {
        document.querySelector(`.back`).style.backgroundImage = `url(https://pbs.twimg.com/media/E-OaeDnXEAQrD51.jpg)`
        gameWinBanner.style.display =``;
        winnerBottomInput.value =``;
        playSong(`letsSuckSomeDick`)
      } else {
        continue
      }
    } else {
      winCounditionCount = 0; 
    }
  }
  

      playRandomSound()
      
}
// РЕКОРДЫ 

let winnerBottomInput = document.querySelector(`.winnerBottomInput`)

winnerBottomInput.addEventListener(`input`, inputOnly20Symbols )

let regNums = /[0-9]/g

function inputOnly20Symbols() {
  this.value = this.value.replace(regNums, ``);
  this.value = this.value.substr(0, 18)
}

winnerBottomInput.addEventListener(`change`, inputLoaded )
let winnerName = ``;

function inputLoaded() {

    winnerName = this.value;
    redordAdder();

    gameWinBanner.style.display =`none`;
    game.style.display =`none`;
    records.style.display =``;    
}

function redordAdder() {

  let recorsTableBodyContainer = document.createElement(`div`);
  recorsTableBodyContainer.className = `recorsTableBodyContainer`;

  let recordsTableName = document.createElement(`div`);
  recordsTableName.className = `recordsTableName`;

  let recordsTableScore = document.createElement(`div`);
  recordsTableScore.className = `recordsTableScore`;

  let redorsTableBody = document.querySelector(`.redorsTableBody`);

  recordsTableName.innerHTML = `${winnerName}`;
  recordsTableScore.innerHTML = `${fullSemen - (Number(semenCounter.innerHTML))}`
 
  recorsTableBodyContainer.append(recordsTableName);
  recorsTableBodyContainer.append(recordsTableScore);

  redorsTableBody.append(recorsTableBodyContainer);

  sortyRecordTable();

}

function sortyRecordTable() {
  let allRecords = document.querySelectorAll(`.recordsTableScore`)
  // console.log(allRecords[0].closest(`.recorsTableBodyContainer`))
  let recordValues = [];
  let redorsTableBody = document.querySelector(`.redorsTableBody`);

  for (let i = 0; i < allRecords.length; i++) {
    recordValues[i] = allRecords[i].innerHTML;
  }
  console.log(recordValues)

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  recordValues.sort(compareNumeric);
 
  for (let i = 0; i < allRecords.length; i++) {
    for (let j = 0; j < allRecords.length; j++) {
      if (recordValues[i] == allRecords[j].innerHTML) {
        redorsTableBody.append(allRecords[j].closest(`.recorsTableBodyContainer`))
      }
    }
  } 
}

sortyRecordTable();


// КНОПКА СЧЕТЧИК СЕМЕНИ 

let semenCounter = document.querySelector(`#semenCounter`)
let semeMeter = document.querySelector(`.semenMeter`)
let healthBar = document.querySelector(`.healthBar`)


gameMainButton.addEventListener(`click`,() => changeSemenCount());

function changeSemenCount() {
  semenCounter.innerHTML = `${Number(semenCounter.innerHTML) - 1}`
  semeMeter.style.borderRadius = `0px 0px 30px 30px`
  semeMeter.style.height = `${(Number(semenCounter.innerHTML) / fullSemen)*100}%`;
  if ((Number(semenCounter.innerHTML) / fullSemen) > 0.7) {
    healthBar.style.borderColor = `green`;
  } else if ((Number(semenCounter.innerHTML) / fullSemen) > 0.3) {
    healthBar.style.borderColor = `yellow`;
  } else {
    healthBar.style.borderColor = `red`;
  }
  if (Number(semenCounter.innerHTML) == 0 && (winCounditionCount !== 4)) {
    semeMeter.style.display = `none`
    gameOver();
  }
}


// ПРОИГРЫШЬ

function gameOver() {
  game.style.display =`none`;
  document.querySelector(`.back`).style.backgroundImage = `url(https://www.meme-arsenal.com/memes/1dd8ae17a3df07efb462a943d3e99dfc.jpg)`;
  game.style.display =`none`;
  gameLost.style.display =``;
}

// КНОПКА РЕКОРДЫ 
let recordsButton = document.querySelector(`#recordsButton`)

recordsButton.addEventListener(`click`, showRecords);

function showRecords() {
  gameLost.style.display =`none`;
  records.style.display =``;  
  playRandomSound()
}

// КНОПКА ПОВТОРЕНИЕ 

let repeatButton = document.querySelector(`#repeatButton`);

repeatButton.addEventListener(`click`, repeatGame);

let repeatButton2 = document.querySelector(`#repeatButton2`);

repeatButton2.addEventListener(`click`, repeatGame);

function repeatGame() {

for (let i = 0; i < 4; i++) {
  numberResult[i].innerHTML = ``;
}

let allAttempts = document.querySelectorAll(`.attemptHistory`);
for (let i = 0; i < allAttempts.length; i++) {
  allAttempts[i].style.display = `none`;
}
MasterNumbers = fourRandomNumberCreator();

winCounditionCount = 0;
attemptCunter = 1;
game.style.display =`none`;
gameLost.style.display =`none`;
gameWinBanner.style.display =`none`;
records.style.display =`none`;
records.style.display =`none`;
semeMeter.style.height = `100%`;
semeMeter.style.borderRadius = `30px 30px 30px 30px`;
semeMeter.style.display = ``
document.querySelector(`.back`).style.backgroundImage = `url(https://img.wallpapersafari.com/desktop/1366/768/94/33/XJY9Fa.jpg)`;

difficulty.style.display =``;

playRandomSound()
}
// ДОБАВЛЕНИЕ ПОПЫТКИ

gameMainButton.addEventListener(`click`,() => addHistoryAttempt());

let attemptCunter = 1;

function addHistoryAttempt() {

  let attemptBody = document.createElement(`div`);
  attemptBody.className = `attemptHistory`;
  document.querySelector(`.attemptHistoryBody`).append(attemptBody);

  let attemptHead = document.createElement(`div`);
  attemptHead.className = `attemptMiniHead`;
  attemptHead.innerHTML = `Attempt - ${attemptCunter}`
  attemptBody.append(attemptHead);

  for (let i = 0; i < 4; i++) {
    let attemptImageBlock = document.createElement(`div`);
    attemptImageBlock.className = `attemptMini`;
    if (numberResult[i].innerHTML == `<img class="bigBilly">`) {
      attemptImageBlock.innerHTML = `<img class="miniBilly">`
    } else if (numberResult[i].innerHTML == `<img class="bigVan">`) {
      attemptImageBlock.innerHTML = `<img class="miniVan">`
    } else if (numberResult[i].innerHTML == `<img class="bigSlave">`) {
      attemptImageBlock.innerHTML = `<img class="miniSlave">`
    }
    
    attemptBody.append(attemptImageBlock);
  }

  for (let i = 0; i < 4; i++) {
    let attemptNumberBlock = document.createElement(`div`);
    attemptNumberBlock.className = `attemptMini`;
    if (inputBarBottomInput.value[i] == undefined) {
      attemptNumberBlock.innerHTML = `X`;
    } else {
    attemptNumberBlock.innerHTML = `${inputBarBottomInput.value[i]}`
    }
    if (i == 0) {
      attemptNumberBlock.style.borderRadius = `0px 0px 0px 10px`;
    } else if (i == 3) {
      attemptNumberBlock.style.borderRadius = `0px 0px 10px 0px`;
    } else {
      attemptNumberBlock.style.borderRadius = `0px 0px 0px 0px`;
    }
    attemptBody.append(attemptNumberBlock);
  }

  attemptCunter += 1;
}

// КНОПКА ОЧИСТКА ИМПУТА 

gameMainButton.addEventListener(`click`,() => clearInput());

function clearInput() {
  inputBarBottomInput.value = ``;
}




// ЗАГАДЫВАЕМ 4 ЧИСЛА

function fourRandomNumberCreator() {
  let arr = [0,1,2,3,4,5,6,7,8,9];
  let fourRanomNumberArray = []

  for (let i = 0; i < 4; i++) {
    let x = Math.floor(Math.random()*arr.length);
    fourRanomNumberArray[i] = arr[x];
    arr.splice(x,1);   
  }

  return fourRanomNumberArray;
}

let MasterNumbers = fourRandomNumberCreator();


Math.floor(Math.random()*10)


// МУЗЫКА 

function playSong(songName) {
  let audio = document.querySelector(`.${songName}`)
  audio.play()
}
function stopPlaySong(songName) {
  let audio = document.querySelector(`.${songName}`)
  audio.remove("playing")
}

function playBackSong() {
  let audio = document.querySelector(`.backLinkingMinus`)
  audio.value = 1;
  audio.play()
}
// thankYouSir
// OhYesSir
// lash
// boyNexDoor
// ourDaddy
// letsSuckSomeDick





let musicArray = [`mmm`,`suction`,`woo`,`lubeItUp`,`swallowMyCum`,`spankOne`]

function playRandomSound() {
    let num = Math.floor(Math.random()*musicArray.length);
    playSong(`${musicArray[num]}`)
}

function RandomMusicNumber() {
  return Math.floor(Math.random()*musicArray.length);
}

function keeper() {
  playSong(`fuckYou`)
  
  playSong(`mmm`)
  playSong(`OhYesSir`)
  playSong(`spankOne`)
  playSong(`spankTwo`)
  playSong(`suction`)
  playSong(`thankYouSir`)
  playSong(`woo`)
  playSong(`lubeItUp`)
  playSong(`bossInTheGym`)
  playSong(`boyNexDoor`)
  
}

