const displayBtn = document.querySelector("#displayBtn");
const navLinks = document.getElementsByClassName("navLinks");
const selected = document.querySelector("#selected");

let displayed = "none";

displayBtn.addEventListener("click", ()=> {

    if (displayed == "none"){
        document.querySelector(".navLinks").style.display = "block";
        document.querySelector("#displayBtn").innerHTML = "<p id='closeBtn'>X</p>";
        displayed = "yes";
    } else {
        document.querySelector(".navLinks").style.display = "none";
        document.querySelector("#displayBtn").textContent = "|||";
        displayed = "none";
    }
    
})

let displayBox = "none";


const buttons = document.querySelectorAll("#buy");
let product = "";
let price = "";


buttons.forEach(button => {
    button.addEventListener("click", ()=>{

        if(button.className == "btn1"){
            product = "Product 1";
            price = "$90";
        }
        if(button.className == "btn2"){
            product = "Product 2";
            price = "$210";
        }
        if(button.className == "btn3"){
            product = "Product 3";
            price = "$167";
        }
        if(button.className == "btn4"){
            product = "Product 4";
            price = "$130";
        }

        let container = document.createElement('div');
        container.classList.add('boxesPannier');

        let prod = document.createElement('div');
        prod.classList.add('productPannier');
        prod.textContent = `${product}`;
        container.appendChild(prod);

        let pric = document.createElement('div');
        pric.classList.add('pricePannier');
        pric.textContent = `${price}`;
        container.appendChild(pric);

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');

        let checkBtn = document.createElement('button');
        checkBtn.innerHTML = `<button id="checkBtn" class="checkBtn">Check</button>`;
        buttonsContainer.appendChild(checkBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<button class="deleteBtn" id = "deleteBtn">Delete</button>`;
        buttonsContainer.appendChild(deleteBtn);

        container.appendChild(buttonsContainer);

        document.querySelector('.pannier').append(container)


        let check = false;

        checkBtn.addEventListener("click", ()=> {

            if(check == false){
                checkBtn.parentElement.parentElement.style.textDecoration = "line-through";
                check = true;
            } else {
                checkBtn.parentElement.parentElement.style.textDecoration = "none";
                check = false;
            }
            
        })
        deleteBtn.addEventListener("click", ()=>{
            deleteBtn.parentElement.parentElement.remove();
        })

        
    })
    
})
