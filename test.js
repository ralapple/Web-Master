console.log("Connected to js file");

let numClicks = 0;
const button = document.createElement('button');
button.innerHTML = "Light";

document.body.appendChild(button);
button.addEventListener('click', () =>{
  numClicks ++;
  if (numClicks %2 == 0){
    button.innerHTML = "Light";
    theme.setAttribute('href', './css/light.css');
    //alert('Number of clicks: ' + numClicks);
  }
  else if(numClicks %2 ==1){
    button.innerHTML = "Dark";
    console.log("odd number");
    theme.setAttribute('href', './css/dark.css');
  }
})
