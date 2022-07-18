let number1 = '', number2 = '', operator = '', total = '';

$(document).ready(function(){
    $('button').on('click', function(e){
        let btn = e.target.innerHTML;
        if(btn>='0' && btn<='9' || btn == '.'){
            handleNumber(btn);
        }
        else if(btn === 'Clear'){
            number1 = number2 = operator = total = '';
            displayButton(total);
        }
        else{
            handleOperator(btn);
        }
    });
});

function handleNumber(num){
    if(operator === ""){
        number1+= num;
        displayButton(number1);
    }
    else{
        number2+= num;
        displayButton(number2);
    }
}

function handleOperator(oper){
    if(number1 === '') return;
    if(operator !== ""){
        handleTotal();
    }
    operator = oper;
}

function handleTotal(){
    // +number1 => converts number1 to int from string
    switch(operator){
        case '+':
            total = +number1 + +number2;
            break;
        case '-':
            total = +number1 - +number2;
            break;
        case 'X':
            total = +number1 * +number2;
            break;
        case '/':
            total = +number1 / +number2;
            break;
        case '^':
            total = Math.pow(+number1, +number2);
            break;
    }
    displayButton(total);

    updateVariables();
}

function displayButton(btn){
    if(btn === '') $('.input').text(0);
    else $('.input').text(btn);
}

function updateVariables(){
    number1 = total;
    number2 = "";
}