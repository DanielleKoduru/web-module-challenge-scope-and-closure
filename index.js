// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *    Counter 1 has let count=0 within the function. Counter 2 has let count=0 outside the function.
 * 2. Which of the two uses a closure? How can you tell?
 *    Counter 2 code. Because it has to reach outside the function to find the data and access let count=0.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *Counter 1 woud be preferable in
 *Counter 2 would be preferable in
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inningScore = (max) => {
  return Math.floor(Math.random() * max);
};
function inning(cb) {
  let home = 0;
  let away = 0;
  return {
    home: (home += cb(3)),
    away: (away += cb(3)),
  };
}
console.log("Task 2", inning(inningScore));

// scoreboard(getInningScore, inning, numInnnings) {
//   // code
//   getInningScore(inning);
// }

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

Definition-A higher-order function is a function that can take another function as an argument, or that returns a function as a result.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore() {
   let home= 0, 
   let away= 0, 
   let score={Home:home, Away:away}
   return function (){
     score.Home= socre.Home.inning()
     score.Away= score.Away +inning()
       return score 
   }
}
console.log(finalScore(inning, 7))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}
