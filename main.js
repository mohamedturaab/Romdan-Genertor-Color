// alert("hello world!");
const containerEl =document.querySelector('.container');

// no we create For to randamly color generated from our project //

for(let i =0; i < 50; i++){
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);

}

const colorContainerEls = document.querySelectorAll('.color-container');
console.log(colorContainerEls) 


// create function to generated box color;

function generateColors(){
    colorContainerEls.forEach(()=>{
        const newColorCode = randomColor();
        // console.log(newColorCode)
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
    })

}
generateColors();


// create function to generated color;

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode  ="";
    for(let i = 0; i < colorCodeLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        // console.log(randomNumber);
        colorCode += chars.substring(randomNum, randomNum+1);
        
    }
    return colorCode;
}

randomColor();

