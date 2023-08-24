import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!")
    // start my application
    const main = document.getElementById("main")
    new Example(main);
});