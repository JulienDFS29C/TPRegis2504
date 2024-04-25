function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}

function noClickAllowed(){
  document.addEventListener('click', function() {
    alert('Clic interdit !');
  });
}


setInterval(updateClock, 1000);
noClickAllowed();
updateClock();
