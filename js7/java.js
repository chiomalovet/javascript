 var x = prompt('input password')
 var count = tut.length;

 function go() {

     if (count < 15) {
         alert('password too short');
     } else if (count >= 15) {
         alert('welcome');

     } else {
         alert('try again');
     }

     do {
         go(b)
     } while (tut.length < 15);
 }