  /**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){

     let headerText = $(".panel h1"); //select the h1 element
     let title = $(".title a");
     let newString = "";
     let newStringArray = [];

     //helper function to see if nav links are odd-numbered
     function isOdd(n) {
         return Math.abs(n % 2) == 1;
      }

      //remove odd links from left navigation
      function removeLinks() {
        for(let i = 0; i < title.length; i++){
          newString = title[i].innerHTML;
          newStringArray[i] = parseInt(newString.replace(/Section /g, ""));
          if(isOdd(newStringArray[i])){
            title[i].innerHTML = "";
          }
        }
      }

      //run remove links function
      //removeLinks();

      //recolor feed template text with click
     headerText.click(function(){
        isClicked=$(this).data('clicked');
        if (isClicked) {
          isClicked=false;
        } else {
          isClicked=true;
        }
        $(this).data('clicked',isClicked);

        if(isClicked)
            {
            $(this).css("color", "red");
            }
        else
            {
            $(this).css("color", "black");
            }
      }); //end of headertext function

      let pTagFinder = $("p");
      let pTagString = "";
      let pTagStringArray = [];

      //remove "Bacon" and replace with "LASER VISION"
      function removeBacon() {
        for(let i = 0; i < pTagFinder.length; i++){
          pTagString = pTagFinder[i].innerHTML;
          pTagStringArray[i] = pTagString.replace(/Bacon/gi, "LASER VISION");
          pTagFinder[i].innerHTML = pTagStringArray[i];
        }
      }//end of removeBacon() function

      //run removeBacon function;
      //removeBacon();

      let postFinder = $(".post");
      let postPosition = postFinder.length - 1; //track post position

      //remove last 2 posts
      function removeLast2Posts() {
        for(let i = 0; i < 3; i++){
          postFinder[postPosition].innerHTML = "";
          postPosition--;
        }
      }

      //run remove last 2 posts
      //removeLast2Posts();

      let hideImages = $(".hide-for-small img");
      function removeImages() {
        hideImages.hide();
      }

      //run removeImages()
      //removeImages();


   })//end of ready onload function

 })();
