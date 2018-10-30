/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  do{
    let total = 0;
    let telja = 0;
    let skila={};
    let spila;
    for(let i =0; i< GAMES_TO_PLAY; i++){
      spila = play();
       if (spila == 0){
          break;
       }
       total = total + spila.timi;
       console.log(spila.timi);
       console.log(spila.svor);
       if(spila.svor == true){
         telja = telja +1;
       }
        
    }
    total = total.toFixed(2);
    let medal = (telja/total).toFixed(2);
    if(spila!=0){
      alert('Þú svaraðir ' +  telja + ' af 10 dæmum rétt á ' + total + ' sekúndum \nMeðalsvör á sekúndu : ' + medal);
    }
    } while (confirm('Spila aftur?'))
}


/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 * 
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
*/
function play() {
  const start = new Date();
  let rettSvor = 0;
  let rett = ask();
  if (rett == true){
    rettSvor++;
    console.log(rett);
  }  
  if (rett == 0){
    return 0;
  }
  const finish = new Date();
  finishTime = (finish-start)/1000;
  let skila ={
    timi: finishTime,
    svor: rettSvor
  }
  console.log(skila.timi);
  console.log(skila.svor);
  return skila; 
    
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */

 /* setja í hlutur! svipað eins og fylki!*/ 
function ask() {
  const operators = ['+', '-', '/', '*'];
  const nota = operators[randomNumber(0, operators.length-1)];
  let svar;
  let fyrri;
  let seinni;
  switch (nota) {
    case '+':
      fyrri = randomNumber(1,100);
      seinni = randomNumber(1,100);
      svar = prompt('Hvað er ' + fyrri + ' + ' + seinni + ' ?');
      if(fyrri + seinni ==svar){
        return true;
      }
      if(svar == null){
        alert('Hætt í leik');
        return 0;
      }
      break;
    
    case '-':
      fyrri = randomNumber(1,100);
      seinni = randomNumber(1,100);
      svar = prompt('Hvað er ' + fyrri + ' - ' + seinni + ' ?');
      if(fyrri - seinni ==svar){
        return true;
      }
      if(svar == null){
        alert('Hætt í leik');
        return 0;
      }
      break;

    case '*':
      fyrri = randomNumber(1,10);
      seinni = randomNumber(1,10);
      svar = prompt('Hvað er ' + fyrri + ' * ' + seinni + ' ?');
      if(fyrri * seinni ==svar){
        return true;
      }
      if(svar == null){
        alert('Hætt í leik');
        return 0;
      }
      break;

    case '/':
      seinni = randomNumber(2,10);
      fyrri = seinni*randomNumber(2,10);
      svar = prompt('Hvað er ' + fyrri + ' / ' + seinni + ' ?');
      if(fyrri / seinni == svar){
        return true;
      }
      if(svar == null){
        alert('Hætt í leik');
        return 0;
      }
      break;

    default:
      break;
  }

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
