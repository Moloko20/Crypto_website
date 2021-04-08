let cryptoMult = 57962.6;

function select() {
  let crypto = document.getElementById('cryptInSec').selectedIndex;
  let options = document.getElementById('cryptInSec');
  switch (options[crypto].value) {
    case 'BTC/s':
      cryptoMult = 57962.6;
      break;
    case 'ETH/s':
      cryptoMult = 1800.1;
      break;
    case 'LTC/s':
      cryptoMult = 203.2;
      break;
    default:
      cryptoMult = 57962.6;
  }
}

function calculate() {
  let rate = 0;
  rate = Number(document.getElementById('val').value);

  if (isNaN(rate)) {
    alert('Enter the number');
  } else {
    if (rate >= 999999) {
      alert('Enter a smaller number');
    } else {
      let prop_res = Math.round(rate * cryptoMult * 24);
      document.getElementById('res').innerHTML = `${prop_res}$`;
    }
  }
}
$(document).ready(function () {
  $('.menu-burger__header').click(function () {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.header__nav').toggleClass('open-menu');
  });
});
