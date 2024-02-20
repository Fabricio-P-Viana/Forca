let aPalavra = ''; 
let separaPalavra = [];
let contadorErros = 0;

function startGame() {
    aPalavra = document.getElementById('wordInput').value.toUpperCase();
    const hint = document.getElementById('hintInput').value;
  
    if (aPalavra.length === 0 || !/^[a-zA-Z- ]+$/.test(aPalavra) || aPalavra.length >= 50 || aPalavra.includes("-")) {
      document.getElementById('popupMessage').innerText = 'Por favor, insira uma palavra válida.';
      openPopup();
      return;
    }
    if (hint.length === 0 || !/^[a-zA-Z- ]+$/.test(hint) || hint.length >= 50 || hint.includes("-")) {
      document.getElementById('popupMessage').innerText = 'Por favor, insira uma dica válida.';
      openPopup();
      return;
    }
    
    separaPalavra = processarString(aPalavra);
    updateWordDisplay();
    displayLetterButtons();
  
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
  
    document.getElementById('hintDisplay').innerText = `Dica: ${hint}`;
  }

  function processarString(str) {
    return str.split('').map((char) => {
      return  char === ' ' ?  '-': '_';
    });
  }

function updateWordDisplay() {
  document.getElementById('wordDisplay').innerText = separaPalavra.join(' ');
}

function displayLetterButtons() {
  const letterButtonsContainer = document.getElementById('letterButtons');
  letterButtonsContainer.innerHTML = '';

  for (let letter = 'A'.charCodeAt(0); letter <= 'Z'.charCodeAt(0); letter++) {
    const button = document.createElement('button');
    button.classList.add('butonLetter');
    button.innerText = String.fromCharCode(letter);
    button.onclick = () => checkLetter(String.fromCharCode(letter));
    letterButtonsContainer.appendChild(button);
  }
}

function checkLetter(letter) {
  if (aPalavra.includes(letter)) {
    for (let i = 0; i < aPalavra.length; i++) {
      if (aPalavra[i] === letter) {
        separaPalavra[i] = letter;
      }
    }
    updateWordDisplay();
  } else {
    contadorErros++;
    document.getElementById('remainingAttempts').innerText = 5 - contadorErros;
  }

  if (contadorErros === 5) {
    endGame(false);
  } else if (!separaPalavra.includes('_')) {
    endGame(true);
  }
}

function endGame(isWinner) {
  const resultMessage = isWinner ? 'Parabéns! Você venceu!' : 'Você perdeu. A palavra era: ' + aPalavra;

  document.getElementById('popupMessage').innerText = resultMessage;
  openPopup();

  document.getElementById('startScreen').style.display = 'block';
  document.getElementById('gameScreen').style.display = 'none';

  document.getElementById('wordInput').disabled = false;
  document.getElementById('remainingAttempts').innerText = '5';
  document.getElementById('wordInput').value = '';
  separaPalavra = [];
  contadorErros = 0;
  updateWordDisplay();
  displayLetterButtons();
}

function openPopup() {
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}
