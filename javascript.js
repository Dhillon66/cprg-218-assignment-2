
function myFunction() {
  document.getElementById("image").src="images/pomeranian.jpg";
  document.getElementById("first").className='buttonclick';
   document.getElementById("second").className='buttonprevious';
    document.getElementById("third").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="Pomeranian";
} 
function myFunctionsecond() {
  document.getElementById("image").src="images/gretriever.jpg";
  document.getElementById("second").className='buttonclick';
  document.getElementById("first").className='buttonprevious';
  document.getElementById("third").className='buttonprevious';
  document.getElementById("fourth").className='buttonprevious';
  document.getElementById("product_description").innerHTML="Golden Retriever";
  
}
function myFunctionthird() {
  document.getElementById("image").src="images/husky.jpg";
  document.getElementById("third").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("fourth").className='buttonprevious';
     document.getElementById("product_description").innerHTML="Husky";
}
function myFunctionfourth() {
  document.getElementById("image").src="images/shitzu.jpg";
  document.getElementById("fourth").className='buttonclick';
   document.getElementById("first").className='buttonprevious';
    document.getElementById("second").className='buttonprevious';
     document.getElementById("third").className='buttonprevious';
     document.getElementById("product_description").innerHTML="Shitzu";
}



  const button1 = document.getElementById('first');
  const button2 = document.getElementById('second');
  const button3 = document.getElementById('third');
  const button4 = document.getElementById('fourth');

  button1.addEventListener('click', myFunction);
  button2.addEventListener('click', myFunctionsecond);
  button3.addEventListener('click', myFunctionthird);
  button4.addEventListener('click', myFunctionfourth);

