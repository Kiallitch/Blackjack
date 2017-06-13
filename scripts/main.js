/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

 let hand = Math.floor(Math.random()*52+1);
return hand;

function handValue (hand) {

  if (output == "jack" || "queen" || "king") {
          return [10];
      } else if (output == "ace") {
          return [1, 11];
      } else {
          return parseInt(output, 10);
      }
  };


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
