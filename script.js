//Task 1.0 Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

/**Task 1.1 Set the background color of mainEl to the value stored in the --main-bg
 CSS custom property.*/
 mainEl.style.backgroundColor = "var(--main-bg)"

 //Task 1.2 Set the contents of mainEl to <h1>SEI Rocks!</h1>.
 mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

 //Task 1.3 Add a class of flex-ctr to mainEl.
 mainEl.classList.add("flex-ctr");