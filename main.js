var $racecar = document.querySelector('.racecar');

document.addEventListener('keydown', function (event) {
  var key = event.keyCode;
  if (key === 37) {
    $racecar.className = 'left';
  } else if (key === 39) {
    $racecar.className = 'right';
  } else if (key === 38) {
    $racecar.className = 'up';
  } else if (key === 40) {
    $racecar.className = 'down';
  }
});
