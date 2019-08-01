function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
      return true;
    } else {
      return false;
    }
  }

  function getNumber1() {
    return inputs[0].value;
  }
  function getNumber2() {
    return inputs[1].value;
  }

  

  function plus() {
    console.info('Addition');
    label.textContent = '';
    if (inputsAreEmpty()) {
      console.error('One or both inputs are empty');
      label.textContent = 'Error: One or both inputs are empty.';
      return;
    }
    var num1 = getNumber1();
    var num2 = getNumber2();
    resultNum = Number(num1) + Number(num2);
    label.textContent = num1 +'   ' + 'plus' + '  ' +   num2 + ' = ' + '  ' + resultNum;
  }

  function minus() {
    console.log('Substraction');
    label.textContent = '';
    if (inputsAreEmpty()) {
      label.textContent = 'Error: One or both inputs are empty.';
      return;
    }
    var num1 = getNumber1();
    var num2 = getNumber2();
    resultNum = Number(num1) - Number(num2);
    label.textContent = num1 +'   ' + 'minus' + '  ' +   num2 + ' = ' + '  ' + resultNum;
  }

  function times() {
    console.info('Multiplication');
    label.textContent = '';
    if (inputsAreEmpty()) {
      label.textContent = 'Error: One or both inputs are empty.';
      return;
    }
    var num1 = getNumber1();
    var num2 = getNumber2();
    resultNum = Number(num1) * Number(num2);
    label.textContent = num1 +'   ' + 'times' + '  ' +   num2 + ' = ' + '  ' + resultNum;
  }

  function divide() {
    console.info('Division');
    label.textContent = '';
    if (inputsAreEmpty()) {
      label.textContent = 'Error: One or both inputs are empty.';
      return;
    }
    var num1 = getNumber1();
    var num2 = getNumber2();
    resultNum = Number(num1) / Number(num2);
    label.textContent = num1 +'   ' + 'divided by' + '  ' +   num2 + ' = ' + '  ' + resultNum;
  }

  var inputs = document.querySelectorAll('input');
  var label = document.querySelector('p');
  var button = document.querySelectorAll('button');
  
  