function createCounter(){
    let count=0;

    return function(){
        count++;
        return count;
    };
}

const Times = createCounter();

const num = document.getElementById("Number");
const button = document.getElementById("clkbutton");

button.addEventListener('click', function(){
    const count = Times();
    num.textContent = count + " Times";
});