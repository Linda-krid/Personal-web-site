function calculateScore() {

  var score = 0; 
  var reponseCorrectElement = document.getElementById('reponseCorrect');
  reponseCorrectElement.innerHTML = ''; 
  if (document.getElementById('QForm').q1.value === 'a'){
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 1 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q2.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li> Question 2 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q3.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 3 :La bonne réponse est <b>b</b></li>';
  }

  if (document.getElementById('QForm').q4.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 4 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q5.value === 'a') {
     score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 5 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q6.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 6 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q7.value === 'a') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 7 : La bonne réponse est <b>a</b></li>';
  }

  if (document.getElementById('QForm').q8.value === 'c') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 8 : La bonne réponse est <b>c</b></li>';
  }

  if (document.getElementById('QForm').q9.value === 'c') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 9 : La bonne réponse est <b>c</b></li>';
  }

  if (document.getElementById('QForm').q10.value === 'b') {
      score++;
  } else {
    reponseCorrectElement.innerHTML += '<li>Question 10 : La bonne réponse est <b>b</b></li>';
  }

  document.getElementById('score').innerHTML = 'Votre score est : <b>' + score + ' / 10</b>';
  return false;
}