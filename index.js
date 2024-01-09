

const toggleBtn = document.querySelector(".toggle-btn")
const sideBar = document.querySelector('.sidebar')
toggleBtn.addEventListener('click', ()=>{
    sideBar.style.display = (sideBar.style.display === "block") ? "none" : "block";
})