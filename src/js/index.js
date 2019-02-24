// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

// jQuery(function() {
// jQuery("body").css("color", "blue");
// });

const lifeTime = {
  container: document.querySelector('#lifeTime'),
  bday: new Date('1989/3/27'),
  maxYear: 60,
  mode : 'Days',
  // mode: 'Weeks',
  // mode : 'Monthes',
  // mode : 'Years',
  colorSpend: 'orange',
}

let mySpendDays = getDiffOfDates(lifeTime.bday);
// let myProbablyDays = lifeTime.maxYear * 365;

// lifeTime.container.innerHTML += `<h2>${lifeTime.mode}</h2>`;
// lifeTime.container.innerHTML += `<h5>Left: ${(myProbablyDays - mySpendDays) / 365} years</h5>`;

createTable(mySpendDays);

function getDiffOfDates(d2, d1) {

  let b = Date.parse(d2);
  let timeDiff;

  if (d1) {
    timeDiff = Math.abs(Date.parse(d1) - b);
  } else {
    timeDiff = Math.abs(Date.now() - b);
  }

  let days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return days;
}

function createTable(d) {

  let period, avg;

  if (lifeTime.mode === 'Monthes') {
    period = d / 30;
    avg = lifeTime.maxYear * 12;
  } else if (lifeTime.mode === 'Years') {
    period = d / 365;
    avg = lifeTime.maxYear;
  } else if (lifeTime.mode === 'Weeks') {
    period = d / 7;
    avg = lifeTime.maxYear * 365 / 7;
  } else if (lifeTime.mode === 'Days') {
    period = d;
    avg = lifeTime.maxYear * 365;
  }


  for (let i = 0; i < avg; i++) {
    let p = document.createElement('p');
    lifeTime.container.appendChild(p);
    if (i < period) {
      p.style.background = lifeTime.colorSpend;
    }
  }
}


/* function getWeekDay(date) {
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
} */