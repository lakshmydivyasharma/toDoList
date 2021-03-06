//Create a form that holds the item that will be added to the list
//Add a button that will log the input to the form
//Add an edit or remove button to each li when you mouseover it (eventListener)
//Add a checkbox that will move the item to completed if selected
//Count each incomplete item on the list and display that in a span
//Clear/remove all items on the list
//Clear/remove all completed items on the list
// Two people on HTML for class and form stuff (non great JS folk) html
 //  and css Thais and Eric
//Two people researcher the buttons Abbey and Orson
//two people to work on the actually form
// two people on javacripts

const ul = document.querySelector("ul")
const clearCompleted = document.querySelector("#clearCompleted")
const clearAll = document.querySelector("#clearAll")
let totalTasks = document.querySelector("#totalTasks")


//add to List section
document.querySelector("#addToList").addEventListener("click", addToList => {
  event.preventDefault()
  let li = document.createElement("li") //built in element thats create element so you have a click event that creates a new li; if the input is null, you might want to add something to say a value is entered
  let listItem = document.querySelector("#listItem").value; //each of these inputs, takes the text value and puts it into the new li;check whats actually written not just the box itself

  ul.appendChild(li);// for the ul, want to append the children into the ul to make the li (this li calls upon the variable stated above)
  li.appendChild(document.createTextNode(listItem)); // now w these li, create a text node which is the list item and create that list item variable, take in each of the grocery items you are putting in

  document.querySelector("#listItem").value = "" //once you add something to the grocery list,be removed from input to add another item
  // the empty double quotes serves as a field reset, without this  value from the inital
  checkCount(); //
})
//when the button is clicked add to List the function it will grabs the list item value/text and makes a
//  a new li into the ul

ul.addEventListener('click', (e) => {//variable ul,when li are  clicked, run the function e which is an event
  e = e.target //
  e.classList.toggle('line') // looking out for the toggle, when someone clicksyou want the text decor of stikethrough to happen.
// this line attribut comes from the css class called "line"
  checkCount()
})
// button press action steps for clear All
clearAll.addEventListener('click', () => {
  const li = document.querySelectorAll('li') //declare li again --local vs gloabl variables.
  for (let i = 0; i < li.length; i++) { //for each of the li, the length of those -- if you count up the lis that were produced -- remove those children
   ul.removeChild(li[i]) // continuously running it till no more li's exist
  }
  checkCount()
})

clearCompleted.addEventListener('click', () => {
 const li = document.querySelectorAll('li')
 for( let i = 0; i < li.length; i++){
   if (li[i].classList.contains('line')) //if it contains the line, itll remove that child
 {
  ul.removeChild(li[i])
 }
 }
 checkCount() // declare a variable that hold the count itself,changing thee if statement; li doesnt have the line through, then count that.
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
   if (!(li[i].classList.contains('line'))) { //! is if it falsee, if it doesnt have the line attribute then count; if this () is true then run it, but bang symbol says if it does not contain a line then count it
     count++
   }
  }
  totalTasks.innerHTML = count
}
