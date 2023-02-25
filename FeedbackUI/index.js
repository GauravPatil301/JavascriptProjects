const ratingEls = document.querySelectorAll(".rating");
const btnE1 = document.getElementById("btn")

const containerE1 = document.getElementById("container")

let selectedRating = "";

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText; 
        // console.log(event.target.innerText|| event.target.parentNode.innerText);
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})

btnE1.addEventListener("click",()=>{
    if(selectedRating !== ""){
        containerE1.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p>We will use your feedback to improve our customer support.</p>
        `;
    }
})

function removeActive() {
    ratingEls.forEach((ratingE1)=>{
        ratingE1.classList.remove("active");
    })
}