// setting initail counter value

let count = 0;

// getting my elements
let value= document.getElementById('value');
let buttons = Array.from(document.querySelectorAll('.button-container .btn'))

// console.log(buttons);

buttons.forEach((btn)=>{
    btn.addEventListener('click', (b)=>{
        let actions = b.currentTarget.classList
        if (actions.contains("decrease")){
            count--
            value.style.color = "red"
        } else if (actions.contains("increase")){
            count++
            value.style.color = "green"
        }else if (actions.contains("reset")){
            count = 0;
            value.style.color = "black"
        }
        value.textContent= count
    })
})