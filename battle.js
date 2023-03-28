//Display a timed welcome message with instructions
setTimeout(()=> {
  window.alert("𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗧𝗛𝗘 𝗨𝗟𝗧𝗜𝗠𝗔𝗧𝗘 𝗦𝗣𝗔𝗖𝗘 𝗕𝗔𝗧𝗧𝗟𝗘 \n 👩‍🚀🚀 \n Click '𝗔𝘁𝘁𝗮𝗰𝗸' to Fight the Xenomorph(s) \n \n OR \n \n Click '𝗥𝗲𝘁𝗿𝗲𝗮𝘁' to End Game \n \n Close prompt by clicking '𝗢𝗸'");
}
, 1000);


//Make attack button to start the game
const bodyContainer = document.querySelector(".bodyContainer");
const attackButton = document.createElement("button");
attackButton.setAttribute("class", "attack");
attackButton.textContent = "Attack";
document.querySelector(".attack");
bodyContainer.appendChild(attackButton);

//Style attack button
attackButton.style.backgroundColor = "white";
attackButton.style.height = "50px";
attackButton.style.color = "black";
attackButton.style.textAlign ="center";
attackButton.style.cursor = "pointer";
attackButton.style.paddingTop = "10px";
attackButton.style.paddingBottom ="15px";
attackButton.style.paddingLeft= "15px";
attackButton.style.paddingRight="15px";
attackButton.style.fontWeight = "bold";
attackButton.style.fontSize = "1.3rem";
attackButton.style.position = "absolute";
attackButton.style.right = "870px";
attackButton.style.top = "400px";


//Make retreat button
const retreatButton = document.createElement("button");
retreatButton.setAttribute("class", "retreat");
retreatButton.textContent = "Retreat";
document.querySelector(".retreat");
bodyContainer.appendChild(retreatButton);

//Style retreat button
retreatButton.style.backgroundColor = "white";
retreatButton.style.height = "50px";
retreatButton.style.color = "black";
retreatButton.style.textAlign ="center";
retreatButton.style.cursor = "pointer";
retreatButton.style.paddingTop = "10px";
retreatButton.style.paddingBottom ="15px";
retreatButton.style.paddingLeft= "15px";
retreatButton.style.paddingRight="15px";
retreatButton.style.fontWeight = "bold";
retreatButton.style.fontSize = "1.3rem";
retreatButton.style.position = "absolute";
retreatButton.style.right = "725px";
retreatButton.style.top = "400px";

//When retreat button is clicked, Game Over appears in browser 
retreatButton.addEventListener("click", function(e) {
  let left = document.querySelector('.left');
  left.remove();
  let right = document.querySelector('.right');
  right.remove();
  attackButton.remove();
  retreatButton.remove();

  //Display Game Over
  let gameOver = document.createElement("h1");
  gameOver.textContent = "👽GAME OVER👽";
  bodyContainer.appendChild(gameOver);

  //Style Game Over
  gameOver.style.fontSize = "10rem";
  gameOver.style.position = "absolute";
  gameOver.style.right = "290px";
  gameOver.style.top = "100px";
  
  //Make Game Over subheading
  let gameSubHeading = document.createElement("h2");
  gameSubHeading.textContent = "Refresh to play again";
  bodyContainer.appendChild(gameSubHeading);

  //Style Game Over subheading
  gameSubHeading.style.fontSize = "5rem";
  gameSubHeading.style.position = "absolute";
  gameSubHeading.style.right = "430px";
  gameSubHeading.style.top = "300px";
  gameSubHeading.style.color = "#f72585";
  gameSubHeading.style.backgroundColor = "white";
  gameSubHeading.style.padding = "10px";
  gameSubHeading.style.marginTop = "50px";
});

//Make a parent class
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  };

//Add method to parent class
makeAttack(opponentShip) {
   //Check if ship can hit target. If Math.random() is less than accuracy, it's successful
     if (Math.random() < this.accuracy) {

      //opponent's health declines
       opponentShip.hull = opponentShip.hull - this.firepower; 

       //Alert player about successful hit and update hull status
       window.alert(
         `Spot on ${this.name}! You've hit ${opponentShip.name}. \n ${opponentShip.name}'s hull status is ${opponentShip.hull} `
       );

        if (opponentShip.hull > 0) {
   window.alert(`Since ${opponentShip.name}'s hull is ${opponentShip.hull}, they're still alive!`);
   
        }
//If hull reaches 0 or less, the ship is destroyed
else {  
  window.alert(`${opponentShip.name} has met its demise!`);
  if(humanShip.hull === 0){
    humanShipLose();
     }
}
}

//Alert player if it misses its opponent
else {
      window.alert(
        `Cue the sad music 🎶—shots were fired but you missed hitting ${opponentShip.name}!`);
     }
}
};

//Make an instance of ship
let humanShip = new Ship("USS Assembly", 20, 5, 0.7);

// When humanShip wins, display this message
  function humanShipWins() {
    let left = document.querySelector('.left');
    left.remove();
    let right = document.querySelector('.right');
    right.remove();
    attackButton.remove();
    retreatButton.remove();
    //Display You Win
    let youWin = document.createElement("h1");
    youWin.textContent = "YOU WIN🏆";
    bodyContainer.appendChild(youWin);
    //Style You Win
    youWin.style.fontSize = "10rem";
    youWin.style.position = "absolute";
    youWin.style.right = "390px";
    youWin.style.top = "100px";
    
    // Make You Win subheading
    let youWinSubHeading = document.createElement("h2");
    youWinSubHeading.textContent = "Refresh to play again";
    bodyContainer.appendChild(youWinSubHeading);

    //Style You Win subheading statement
    youWinSubHeading.style.fontSize = "5rem";
    youWinSubHeading.style.position = "absolute";
    youWinSubHeading.style.right = "400px";
    youWinSubHeading.style.top = "300px";
    youWinSubHeading.style.color = "#f72585";
    youWinSubHeading.style.backgroundColor = "white";
    youWinSubHeading.style.padding = "10px";
    youWinSubHeading.style.marginTop = "50px";
  }


//Use for loop to make an instance of six alien ships
let alienShips = [];
for (let i = 0; i < 6; i++) {
  let hull = Math.round(Math.random() * 3) + 3; //between 3 and 6;
  let firepower = Math.round(Math.random() * 2) + 2; //between 2 and 4
  let accuracy = Math.random() * 0.6 + 0.2; //between .6 and .8
  alienShips[i] = new Ship(`Xenomorph ${i +1}`, hull, firepower, accuracy);
}

//When attack button is clicked, humanShip and alienShips will fight against eachother 
attackButton.addEventListener("click", function(e) {
  if (humanShip.hull > 0) {
    humanShip.makeAttack(alienShips[0]);
  
    //Check if humanShip destroyed one of the alien ships
        if (alienShips[0].hull > 0) {  

          //if the alien ship survives, it attacks humanShip
          alienShips[0].makeAttack(humanShip);

      } else {
          //When one alienship has been destroyed, remove it, return the array of leftover ships
            alienShips.splice(0,1); 
            //Give update of the alien ships that are left
            window.alert(`There are ${alienShips.length} Xenomorph(s) left`);

            //if humanShip's hull is greater than 0 and there are no more alienShips left, then humanShip wins!
            if (humanShip.hull > 0 && alienShips.length === 0){
              humanShipWins();
            }
          }
        }
  
    });
  
