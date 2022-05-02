
// scenario 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
    };

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
    }

const verdict = declareMurderer();
console.log(verdict);

// scenario 1: the outcome will be 'The murderer is Miss Scarlet', because nothing above changes the value of scenario.murderer after it is defined in the const scenario



// scenario 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Scenario 2: this will result in an error because ChangeMurderer is trying to update the const murderer


// scenario 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// scenario 3: this will result in the first verdict returning Mrs Peacock as the murder, as it willrefer to the local murderer variable within declareMurderer, but this will notupdate the murderer variable outside of the function, so the second result will return Professor Plum


// scenario 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// scenario 4: suspects will return 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard, as declareAllSuspects variable let suspectThree is declared as 'Colonel Mustard', rather than using the let of the same name from outside the function. the second console.log will return 'Suspect three is Mrs. Peacock' as this is using the let suspectThree from outwith the declareAllSuspects function.


// scenario 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// scenario 5: the console.log will return 'The weapon is the Revolver' because changeWeapon is able to update the value of the key weapon, despite scenario being a const.


// scenario 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// scenario 6: the console.log will return 'Mrs. White because the changeMurderer function first reassigns the murderer variable to Mr. Green, then Mrs. White.

// scenario 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// scenario 7: the console.log will return 'The murderer is Mr Green, because changeMurderer function reassigns the murderer variable as mr green, before creating a local variable within the plottwist which is updated by the unexpected outcome, but ultimately does not have an affect on anything but it's own local murderer variable.


// scenario 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

  // scenario 8: the console.log will return 'The weapon is candle stick' because the changeScenario function will first reassign the scenario so that the scenario.room becomes the dining room, which means the plotTwist function will change the scnario.murderer to Colonel Mustard, which means the unexpectedOutcome function will change the scenario.weapon to Candlestick.

// scenario 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// scenario 9 the console.log will print 'The murder is Professor Plum, as the if statement only changes it's local let murderer variable to Mrs. Peacock, despite the if statements' truthiness.



// Extension

let murderer = 'Mrs. Peacock';

const changeScenario = function() {
    
    const surprise = function(){
        if (murderer !== "Professor Plum"){
            murderer = "Professor Plum"
        }else{
          murderer = "Reverend Green"
        }
    }
    murderer = "Colonel Mustard"

    surprise()
    surprise()

}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`
  }

changeScenario()
verdit = declareMurderer()
console.log(verdit)

// result is Reverend Green
