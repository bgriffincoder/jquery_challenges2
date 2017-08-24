/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){
      //reset
     let resetButton = $("#reset");
     let resetNumCounter = $("#num-resets");

     //teamOneStats
     let teamOneShootButton = $("#teamone-shoot"); //selects ID
     let teamOneNumShots = $("#teamone-numshots"); //selects ID
     let teamOneNumHits = $("#teamone-numhits");; //selects ID
     //teamTwoStats
     let teamTwoShootButton = $("#teamtwo-shoot"); //selects ID
     let teamTwoNumShots = $("#teamtwo-numshots"); //selects ID
     let teamTwoNumHits = $("#teamtwo-numhits");; //selects ID

     //resetButton event listener
    /*Increase the reset stats counter by 1 and zero out all shots taken
    and goal shot counters./*/
    resetButton.click(function(){
      resetNumCounter.html(parseInt(resetNumCounter.html()) + 1);
      teamOneNumShots.html(0);
      teamOneNumHits.html(0);
      teamTwoNumShots.html(0);
      teamTwoNumHits.html(0);
    })

    //teamOneShootButton event listener
    /*Calculate a random number between 1 and 10. If number is between
    6 and 10 then the shot was successful and increase goal shots counter by 1.
    If the random number is between 1 and 5 then the shot failed and do not increase
    goal shots counter by 1. Each time button is pressed should increase shots
    taken counter by 1.
    */

    teamOneShootButton.click(function(){
      let hitOrMissRandom = Math.floor(Math.random() * 10) + 1;
      let shotCounter;

      teamOneNumShots.html(parseInt(teamOneNumShots.html()) + 1)

      if (hitOrMissRandom >= 6 ) {
        teamOneNumHits.html(parseInt(teamOneNumHits.html()) + 1);
      }

    })

    //teamTwoShootButton event listener
    /*Calculate a random number between 1 and 10. If number is between
    6 and 10 then the shot was successful and increase goal shots counter by 1.
    If the random number is between 1 and 5 then the shot failed and do not increase
    goal shots counter by 1. Each time button is pressed should increase shots
    taken counter by 1.
    */
    teamTwoShootButton.click(function(){
      let hitOrMissRandom = Math.floor(Math.random() * 10) + 1;
      let shotCounter;

      teamTwoNumShots.html(parseInt(teamTwoNumShots.html()) + 1);

      if (hitOrMissRandom >= 6 ) {
        teamTwoNumHits.html(parseInt(teamTwoNumHits.html()) + 1);
      }
    })



  })

})();
