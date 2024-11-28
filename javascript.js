
function myFunction() {
  document.getElementById("image").src="images/iphone-16-promax.png";
  document.getElementById("first").className='hh';
   document.getElementById("second").className='kk';
    document.getElementById("third").className='kk';
     document.getElementById("fourth").className='kk';
     document.getElementById("product_description").innerHTML="Iphone 16 Pro Max";
} 
function myFunctionsecond() {
  document.getElementById("image").src="images/iphone-16-pro.png";
  document.getElementById("second").className='hh';
  document.getElementById("first").className='kk';
  document.getElementById("third").className='kk';
  document.getElementById("fourth").className='kk';
  document.getElementById("product_description").innerHTML="Iphone 16 Pro";
  
}
function myFunctionthird() {
  document.getElementById("image").src="images/iphone-16.png";
  document.getElementById("third").className='hh';
   document.getElementById("first").className='kk';
    document.getElementById("second").className='kk';
     document.getElementById("fourth").className='kk';
     document.getElementById("product_description").innerHTML="Iphone 16";
}
function myFunctionfourth() {
  document.getElementById("image").src="images/iphone-16-plus.png";
  document.getElementById("fourth").className='hh';
   document.getElementById("first").className='kk';
    document.getElementById("second").className='kk';
     document.getElementById("third").className='kk';
     document.getElementById("product_description").innerHTML="Iphone 16 Plus";
}



  const button1 = document.getElementById('first');
  const button2 = document.getElementById('second');
  const button3 = document.getElementById('third');
  const button4 = document.getElementById('fourth');

  button1.addEventListener('click', myFunction);
  button2.addEventListener('click', myFunctionsecond);
  button3.addEventListener('click', myFunctionthird);
  button4.addEventListener('click', myFunctionfourth);

