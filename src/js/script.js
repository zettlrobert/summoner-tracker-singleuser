const d = document;
// All available Backgrounds - create Array with function in tools.js
const bg = [
  'bg-001.jpg', 'bg-002.jpg', 'bg-003.jpg', 'bg-004.jpg',
  'bg-005.jpg', 'bg-006.jpg', 'bg-007.jpg', 'bg-008.jpg',
  'bg-009.jpg', 'bg-010.jpg', 'bg-011.jpg', 'bg-012.jpg',
  'bg-013.jpg', 'bg-014.jpg', 'bg-015.jpg', 'bg-016.jpg',
  'bg-017.jpg', 'bg-018.jpg', 'bg-019.jpg', 'bg-020.jpg',
  'bg-021.jpg', 'bg-022.jpg', 'bg-023.jpg', 'bg-024.jpg',
  'bg-025.jpg', 'bg-026.jpg', 'bg-027.jpg', 'bg-028.jpg',
  'bg-029.jpg', 'bg-030.jpg', 'bg-031.jpg', 'bg-032.jpg',
  'bg-033.jpg', 'bg-034.jpg', 'bg-035.jpg', 'bg-036.jpg',
  'bg-037.jpg', 'bg-038.jpg', 'bg-039.jpg', 'bg-040.jpg',
  'bg-041.jpg', 'bg-042.jpg', 'bg-043.jpg', 'bg-044.jpg',
  'bg-045.jpg', 'bg-046.jpg', 'bg-047.jpg', 'bg-048.jpg',
  'bg-049.jpg', 'bg-050.jpg', 'bg-051.jpg', 'bg-052.jpg',
  'bg-053.jpg', 'bg-054.jpg', 'bg-055.jpg', 'bg-056.jpg',
  'bg-057.jpg', 'bg-058.jpg', 'bg-059.jpg', 'bg-060.jpg',
  'bg-061.jpg', 'bg-062.jpg', 'bg-063.jpg', 'bg-064.jpg',
  'bg-065.jpg', 'bg-066.jpg', 'bg-067.jpg', 'bg-068.jpg',
  'bg-069.jpg', 'bg-070.jpg', 'bg-071.jpg', 'bg-072.jpg',
  'bg-073.jpg', 'bg-074.jpg', 'bg-075.jpg', 'bg-076.jpg',
  'bg-077.jpg'
]

// Summoners
const summoners = {
  barrier: {
    name: 'Barrier',
    cd: 180
  },
  clarity: {
    name: 'Clarity',
    cd: 240
  },
  cleanse: {
    name: 'Cleanse',
    cd: 210
  },
  exhaust: {
    name: 'Exhaust',
    cd: 210
  },
  flash: {
    name: 'Flash',
    cd: 300
  },
  ghost: {
    name: 'Ghost',
    cd: 180,
  },
  heal: {
    name: 'Heal',
    cd: 240
  },
  ignite: {
    name: 'Ignite',
    cd: 180
  },
  smite: {
    name: 'Smite',
    cd: 180
  },
  teleport: {
    name: 'Teleport',
    cd: 360
  }
}

const position = {
  top: 'Top',
  jgl: 'Jungle',
  mid: 'Middle',
  adc: 'AD Carry',
  sup: 'Support'
}

const barrier = summoners.barrier;
const clarity = summoners.clarity;
const cleanse = summoners.cleanse;
const exhaust = summoners.exhaust;
const flash = summoners.flash;
const ghost = summoners.ghost;
const heal = summoners.heal;
const ignite = summoners.ignite;
const smite = summoners.smite;
const tp = summoners.teleport;


let selectRandom = (array) => {
  let maxNumber = array.length;

  let randomNumber = (Math.floor(Math.random() * maxNumber));

  let randomPicture = array[randomNumber];

  let url = `url('league-official-wallpapers/${randomPicture}')`;

  // let background = [];

  // background.push(url);

  // // console.log(background)

  return url;

  // html.style.background = ``;
  // element.style.backgroundImage = url;

  // document.body.style.backgroundImage = background;
}
selectRandom(bg);

let randomBackground = selectRandom(bg);
d.body.style.backgroundImage = randomBackground;



// Summoner Timers
class Spell {
  constructor(spell, role, renderPosition, cooldown) {
    this.spell = spell;
    this.role = role
    this.renderPosition = renderPosition;
    this.cooldown = cooldown;
  }

  whatSpell() {
    console.log(`I am a ${this.spell} Spell`);
    console.log(this.renderPosition);
    console.log(this.cooldown);
    console.log(this.role);
  }



  startTimer() {

    console.log('Timer Started');

    let counter = this.cooldown

    this.intervalHandle = setInterval(() => {
      counter--
      if (counter >= 0) {
        console.log(counter);
        this.renderPosition.innerHTML = `${counter}`
      }

      if (counter === 0) {
        console.log('done');
        this.renderPosition.innerHTML = 'Ready'
      }
    }, 1000)
  }

  resetTimer() {
    clearInterval(this.intervalHandle);
    this.renderPosition.innerHTML = 'Ready';
  }

}



/* ############################################################
########## Render and Class Calls for the Cooldowns ##########
############################################################*/

//Top Flash
let renderTopFlash = d.querySelector('.topFlash');
let startTopFlashTimer = d.querySelector('.topFlashButton')
let resetTopFlashTimer = d.querySelector('.resetTopFlashButton')

let topFlash = new Spell(flash.name, position.top, renderTopFlash, flash.cd);

startTopFlashTimer.addEventListener('click', () => {
  topFlash.startTimer();
})

resetTopFlashTimer.addEventListener('click', () => {
  topFlash.resetTimer();
})


//Top TP
let renderTopTp = d.querySelector('.topTp');
let startTopTp = d.querySelector('.topTpButton');
let resetTopTp = d.querySelector('.resetTopTpButton')

let topTp = new Spell(tp.name, position.top, renderTopTp, tp.cd);

startTopTp.addEventListener('click', () => {
  topTp.startTimer();
})

resetTopTp.addEventListener('click', () => {
  topTp.resetTimer();
})


//Top Ignite
let renderTopIgnite = d.querySelector('.topIgnite');
let startTopIgnite = d.querySelector('.topIgniteButton');
let resetTopIgniteButton = d.querySelector('.resetTopIgniteButton')

let topIgnite = new Spell(ignite.name, position.top, renderTopIgnite, ignite.cd);

startTopIgnite.addEventListener('click', () => {
  topIgnite.startTimer();
})

resetTopIgniteButton.addEventListener('click', () => {
  topIgnite.resetTimer();
})


//Top Ghost
let renderTopGhost = d.querySelector('.topGhost');
let startTopGhost = d.querySelector('.topGhostButton');
let resetTopGhost = d.querySelector('.resetTopGhostButton');

let topGhost = new Spell(ghost.name, position.top, renderTopGhost, ghost.cd);

startTopGhost.addEventListener('click', () => {
  topGhost.startTimer();
})

resetTopGhost.addEventListener('click', () => {
  topGhost.resetTimer();
})



//Jungle Flash
let renderJglFlash = d.querySelector('.jglFlash');
let startJglFlash = d.querySelector('.jglFlashButton');
let resetJglFlash = d.querySelector('.resetJglFlashButton');

let jglFlash = new Spell(flash.name, position.jgl, renderJglFlash, flash.cd)

startJglFlash.addEventListener('click', () => {
  jglFlash.startTimer();
})

resetJglFlash.addEventListener('click', () => {
  jglFlash.resetTimer();
})


//Jgl Ignite
let renderJglIgnite = d.querySelector('.jglIgnite');
let startJglIgnite = d.querySelector('.jglIgniteButton');
let resetJglIgnite = d.querySelector('.resetJglIgniteButton');

let jglIgnite = new Spell(ignite.name, position.jgl, renderJglIgnite, ignite.cd);

startJglIgnite.addEventListener('click', () => {
  jglIgnite.startTimer();
})

resetJglIgnite.addEventListener('click', () => {
  jglIgnite.resetTimer();
})


//Mid
let renderMidFlash = d.querySelector('.midFlash');
let startMidFlash = d.querySelector('.midFlashButton');
let resetMidFlash = d.querySelector('.resetMidFlashButton');

let midFlash = new Spell(flash.name, position.mid, renderMidFlash, flash.cd);

startMidFlash.addEventListener('click', () => {
  midFlash.startTimer();
})

resetMidFlash.addEventListener('click', () => {
  midFlash.resetTimer();
})


//Mid Tp
let renderMidTp = d.querySelector('.midTp');
let startMidTp = d.querySelector('.midTpButton');
let resetMidTp = d.querySelector('.resetMidTpButton');

let midTp = new Spell(tp.name, position.mid, renderMidTp, tp.cd);

startMidTp.addEventListener('click', () => {
  midTp.startTimer();
})

resetMidTp.addEventListener('click', () => {
  midTp.resetTimer();
})


//Mid Ignite
let renderMidIgnite = d.querySelector('.midIgnite');
let startMidIgnite = d.querySelector('.midIgniteButton');
let resetMidIgnite = d.querySelector('.resetMidIgniteButton');

let midIgnite = new Spell(ignite.name, position.mid, renderMidIgnite, ignite.cd);

startMidIgnite.addEventListener('click', () => {
  midIgnite.startTimer();
})

resetMidIgnite.addEventListener('click', () => {
  midIgnite.resetTimer();
})


//ADC Flash
let renderAdcFlash = d.querySelector('.adcFlash');
let startAdcFlash = d.querySelector('.adcFlashButton')
let resetAdcFlash = d.querySelector('.resetAdcFlashButton')

let adcFlash = new Spell(flash.name, position.adc, renderAdcFlash, flash.cd)

startAdcFlash.addEventListener('click', () => {
  adcFlash.startTimer();
})

resetAdcFlash.addEventListener('click', () => {
  adcFlash.resetTimer();
})

//ADC Heal
let renderAdcHeal = d.querySelector('.adcHeal');
let startAdcHeal = d.querySelector('.adcHealButton')
let resetAdcHeal = d.querySelector('.resetAdcHealButton')

let adcHeal = new Spell(heal.name, position.adc, renderAdcHeal, heal.cd)

startAdcHeal.addEventListener('click', () => {
  adcHeal.startTimer();
})

resetAdcHeal.addEventListener('click', () => {
  adcHeal.resetTimer();
})


//ADC Tp
let renderAdcTp = d.querySelector('.adcTp');
let startAdcTp = d.querySelector('.adcTpButton')
let resetAdcTp = d.querySelector('.resetAdcTpButton')

let adcTp = new Spell(tp.name, position.adc, renderAdcTp, tp.cd)

startAdcTp.addEventListener('click', () => {
  adcTp.startTimer();
})

resetAdcTp.addEventListener('click', () => {
  adcTp.resetTimer();
})


//ADC Barrier
let renderAdcBarrier = d.querySelector('.adcBarrier');
let startAdcBarrier = d.querySelector('.adcBarrierButton')
let resetAdcBarrier = d.querySelector('.resetAdcBarrierButton')

let adcBarrier = new Spell(barrier.name, position.adc, renderAdcBarrier, barrier.cd)

startAdcBarrier.addEventListener('click', () => {
  adcBarrier.startTimer();
})

resetAdcBarrier.addEventListener('click', () => {
  adcBarrier.resetTimer();
})


// Sup Flash
let renderSupFlash = d.querySelector('.supFlash')
let startSupFlash = d.querySelector('.supFlashButton')
let resetSupFlash = d.querySelector('.resetSupFlashButton')

let supFlash = new Spell(flash.name, position.sup, renderSupFlash, flash.cd);

startSupFlash.addEventListener('click', () => {
  supFlash.startTimer()
})

resetSupFlash.addEventListener('click', () => {
  supFlash.resetTimer();
})


//Sup Ignite
let renderSupIgnite = d.querySelector('.supIgnite')
let startSupIgnite = d.querySelector('.supIgniteButton')
let resetSupIgnite = d.querySelector('.resetSupIgniteButton')

let supIgnite = new Spell(ignite.name, position.sup, renderSupIgnite, ignite.cd);

startSupIgnite.addEventListener('click', () => {
  supIgnite.startTimer()
})

resetSupIgnite.addEventListener('click', () => {
  supIgnite.resetTimer();
})


//Sup Exhaust
let renderSupExhaust = d.querySelector('.supExhaust')
let startSupExhaust = d.querySelector('.supExhaustButton')
let resetSupExhaust = d.querySelector('.resetSupExhaustButton')

let supExhaust = new Spell(exhaust.name, position.sup, renderSupExhaust, exhaust.cd);

startSupExhaust.addEventListener('click', () => {
  supExhaust.startTimer()
})

resetSupExhaust.addEventListener('click', () => {
  supExhaust.resetTimer();
})