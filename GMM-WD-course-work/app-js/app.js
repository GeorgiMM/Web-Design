var color;



document.querySelector('#colorbtn').addEventListener('click', changeColor);
  function  changeColor(){
    color = document.querySelector('#colorbtn').textContent;
    if (color == "Blue") {
    document.querySelector('.navigation').style.background='linear-gradient(to bottom right, rgb(62, 186, 19) , rgb(172, 203, 19))';
    document.querySelector('#colorbtn').textContent = "Green";
  } else if(color == "Green") {
    document.querySelector('.navigation').style.background='linear-gradient(to bottom right, blue , aqua)';
    document.querySelector('#colorbtn').textContent = "Blue";
  }
}
