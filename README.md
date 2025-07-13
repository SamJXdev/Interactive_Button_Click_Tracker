# Interactive_Button_Click_Tracker
## Date:
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html>
    <head>
        <title>Click Counter</title>
        <link href="style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <h2 class="heading">CLICK COUNTER</h2>
            <h3 class="subheading">You have clicked the button</h3>
            <br>
            <h2 id="Number" class="times">0 Times</h2>
            <br><br>
            <button id="clkbutton" class="button bounce">Click me😉</button>


        </div>
        <script src="script.js"></script>
    </body>

</html>
```
## CSS Code:
```
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
}

.container{
    background-color: rgb(85, 0, 255);
    padding-top:150px;
    padding-bottom: 150px;
    padding-left: 300px;
    padding-right: 300px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(237, 8, 80, 0.7);
    color: white;
    text-align: center;
}

.heading{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 20px;
    font-size: 50px;
}

.subheading{
    font-family: 'Times New Roman', Times, serif;
    color:rgb(5, 235, 228);
    font-size: 30px;
}

.times{
    color: black;
    font-size:40px;
}

.button{
    font-size:50px;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 50px;
    background-color: #71e808;
    border:30px;
    cursor:pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.button:hover{
    box-shadow: 0px 10px 16px rgba(255, 0, 102, 0.6);
    transform: scale(1.1);
    background-color: black;
    color:#71e808
}
```
## JavaScript Code:
```
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
```

## Live web page:

## Output:

<img width="1918" height="969" alt="image" src="https://github.com/user-attachments/assets/f5fc1907-64b2-4f65-8831-7194659bbc98" />


## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
