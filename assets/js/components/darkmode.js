let darkModeButton = document.getElementById('darkModeButton');
const body = document.body;
const toggleButton = document.querySelector('bx bxs-toggle-left');

function dark__Mode() { 
  darkModeButton.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('active');
    
    if (body.classList.container('dark-mode')) {
      toggleButton.classList.toggle = '<i class="bx bxs-toggle-right"></i>';
    } else {
      toggleButton.classList.toggle = '<i class="bx bxs-toggle-left"></i>';
    }
  });
}
  
export default dark__Mode