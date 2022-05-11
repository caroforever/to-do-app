
//first, we query the dom by targeting the form using .querySelector 
//then, we put it into a variable called 'formElement'. this variable will be useful for the event listener.
const formElement = document.querySelector("form");

//next step is to attach the variable to an event listener.
// after that, pass the "submit" argument as a string.
//next, you can do an arrow function or anonymous function as the second argument. this second argument is called the callback function.

// FIRST EVENT LISTENER: MAKING THE FORM LISTEN FOR A SUBMISSION TASK
formElement.addEventListener("submit", function(event) {
    //stop the page from refreshing when the form is submitted with preventDefault()
    event.preventDefault();
    console.log(event);

    
    //query the DOM for the input element and check whether it's empty

    const inputElement = document.getElementById("toDoItem");
    //when you console log inputElement, you can open up the input object and see that there's a value property. we are going to use this to target whether the user has entered text.
    console.log(inputElement);


    //only if the user has entered an actual task (aka input is not empty): if/else statement

    if (inputElement.value !== "") {


        //grab user's TO DO input from the form
        console.log(inputElement.value);

        // we are now going to create a new <li> element with .createElement
        const liElement = document.createElement("li");

        //display TO DO input to the page within an li element
        //include a checkbox icon within the li
        liElement.innerHTML = '<i class="fa-regular fa-square"></i>';

        //create an element that represents the text we have to add (our task)
        const toDoContent = document.createTextNode(inputElement.value);
        console.log(toDoContent);
        // and then append the text element to the li
        liElement.appendChild(toDoContent);
        

        // add the li element to the ul
        //so we are querying the dom for the ul, and then we are adding the li element to the ul on the page with .appendChild().
        document.querySelector("ul").appendChild(liElement);
        

        // clear the input
        //so we get the inputElement value and reassign it to an empty string at the end.
        inputElement.value = "";

    } else {
        alert("Please enter a task!")
    }

    // other options from jielun 
            //     if (inputElement.value) {
            //         //run code here
            //     }
            // using truthy value
});

// SECOND EVENT LISTENER: CLICKING A TASK AS COMPLETE
// clicking on a task allows you to toggle between unchecked/checked (aka done vs not done).
// ******* NOTE: this will not work because you can only add event listeners to elements that exist in the DOM at the time of code execution.
// const listElements = document.querySelector("li");

// listElements.addEventListener("click", function(){
//     console.log("To Do has been checked")
// });
// NOTE: ^^^ THE CODE ABOVE WILL NOT WORK, YOULL RECEIVE AN ERROR BECAUSE THE LI ELEMENT DOESN'T EXIST WHEN THE CODE EXECUTES

//NEW PLAN: in order to attach a click event listener to the li's which do not exist on the page yet, we can use EVENT PROPAGATION TO DELEGATE the click event to the ul!
// when something happens to the child element, the parents know about it. think about it like gossip in a nosy family.
// EVENT PROPAGATION
const ul = document.querySelector("ul");

// the this keyword represents the object which owns the code which is currently running. what caused the callback function to run??? the ul is responsible for the callback function. we know it's the ul because if you console.log(this), you see ul in your console.



ul.addEventListener("click", function(event){
    //if you console.log(this), you will see <ul> in your console.
    //so this will give us back the ul consistently which is not what we want
    // console.log(this);

        // log out the event object:
    // console.log(event);
    //as long as we've clicked on the icon, then we need to toggle between checked and unchecked.
    // so the event object gives you info on what we are clicking on (we opened the click object in the console when we console.log(event))

    // now we insert a condition!
    if (event.target.localName === "i") {
        console.log("checkbox was clicked!!!")

            //toggle between unchecked / checked(aka done vs not done).
            event.target.classList.toggle("fa-square-check");
            event.target.classList.toggle("fa-square");
    }
});










// PSEUDO CODE FOR WHAT WE WANT TO DO *_*_*_*_*_*_*_*_*_*_*_
//add a submit event listener on the form

    //stop the page from refreshing when the form is submitted.

    //only if the user has entered an actual task (aka input is not empty): if/else statement

    //grab user's TO DO input from the form
    //display TO DO input to the page within an li element
        //include a checkbox icon within the li
    // add the li element to the ul

// clicking on a task allows you to toggle between unchecked/checked (aka done vs not done).

//BONUS LEVEL:
// add a "reset" button which clears all the To Dos
// add an "edit task" button
// add a "remove task" button to each task
// add a congratulations alert when all of the existing To Dos are checked
// add a "take a break" message if 5 or more tasks are completed