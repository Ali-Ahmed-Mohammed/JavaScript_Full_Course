/*
     1. Create a while loop that runs from 1-100
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!

    HINT: Lookup for "continue" keyword for loops
*/

let numbers = 1;
while (numbers <= 100) {
  if (numbers === 50) {
    console.log('Half way there!');
    numbers++;
    continue;
  }
  if (numbers === 100) {
    console.log('you made it!');
    numbers++;
    continue;
  }
   if (numbers % 10 == 0) {
    console.log(`checkpoint: ${numbers}`);
  }
  numbers++;
}
 console.log("All done");





