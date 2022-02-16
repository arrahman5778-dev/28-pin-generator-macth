// Pin Generator Part
function getPin(){
  const pin = Math.round(Math.random()*10000);
  const pinString = pin + '';
  if(pinString.length == 4){
    return pin ;
  }
  else{
    return getPin();
  }
}

function pinGenerator(){
  const pin = getPin();
  document.getElementById('display-pin').value =pin;
}
// Calculate Pin Part
document.getElementById('key-pad').addEventListener('click' , function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if(isNaN(number)){
        if(number == 'C'){
calcInput.value='';
        }
  }
  else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
 
})

// Pin Maching Part
function verifyPin(){
  const generatPin = document.getElementById('display-pin').value;
  const typedNumber = document.getElementById('typed-numbers').value;
  const successMassege = document.getElementById('notify-success');
  const faillError = document.getElementById('notify-failld');
  if(generatPin == typedNumber){
    
    successMassege.style.display= 'block';
    faillError.style.display='none';
  }
  else{
    faillError.style.display='block';
    successMassege.style.display= 'none';
  }
}