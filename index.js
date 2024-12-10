const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dimList = document.querySelector('.Dim');

dropdownBtn.addEventListener('click', () => {
  console.log("clicked")
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});

dimList.addEventListener('click', () =>{

  console.log("clicked");

  dimList.classList.add('Dim');

})

