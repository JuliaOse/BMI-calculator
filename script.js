const named = document.querySelector('#name')
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const inputs = document.querySelector('input')
const button = document.querySelector('button')
const h1 = document.querySelector('h1')


function checkEmptyboxes (){
    if (weight.value === "" || height. value === "" || named.value === "") return false
}

function checkBmi (bmi){
    if (bmi<18.5){
        alert(`${named.value}, you're underweight`)
    } else if (bmi >= 18.5){
        alert(`${named.value}, your weight is normal`)
    }else if (bmi >= 25){
        alert(`${named.value}, you're overweight`)
    }else if (bmi>= 30){
        alert(`${named.value},you're obese`)
    }
}

button.addEventListener('click',() =>{
    let bmi = weight.value/ (height.value ** 2)

    if (checkEmptyboxes() === false ){
        alert("Please fill all fields")
    } else{
        checkBmi(bmi)
    }
    
})
