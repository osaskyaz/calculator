const calc = document.querySelector('#calc');

const calculate = (number)=>{
    calc.value = calc.value+number;
}

function Clear(){
    calc.value = '';
}

function equal(){
    try {
        calc.value = eval(calc.value);
    } catch (error) {
        alert('invalid button')
    }
    }

    function del(){
        calc.value = calc.value.slice(0, -1);
    }