const sideBar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener( 'click', () =>{
    sideBar.classList.toggle('active');
});