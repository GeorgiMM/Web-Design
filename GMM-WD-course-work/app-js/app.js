var color = document.querySelector('#colorbtn').textContent;



document.querySelector('#colorbtn').addEventListener('click', test);
  function  test(){
    color = document.querySelector('#colorbtn').textContent;
    if (color == "Blue") {
    document.querySelector('.navigation').style.background='linear-gradient(to bottom right, red , orange)';
    document.querySelector('#colorbtn').textContent = "Red";
  } else if(color == "Red") {
    document.querySelector('.navigation').style.background='linear-gradient(to bottom right, blue , aqua)';
    document.querySelector('.colorbtn').textContent = "Blue";
  }
}
