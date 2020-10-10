1. https://uidesigndaily.com/uploads/924/day_924_thumb.png
2. we created our javascript questions in an object inside an array
3. we made an unordered list, added input form though radio button with a label
   to hold the question, also added a lot of classes and ids to pick them

4. over to css, where we styled body with some little gradient styling, moving
   the position of body to center using justify and align, alos made button
   pointer and focus

5. we grabbed the labels id in the javascript
6. we accessed object data inside an array and we put inside the const variable
7. when a button click happens, it adds one to zero and it goes to the next question and loop continues

8. this line const quiz = document.getElementById("quiz"); overrides the whole container with the final grading.

9. answerEls.forEach((answerEl) => {
   if (answerEl.checked) {
   answer = answerEl.id;
   }
   });

answwerEls is representing alraedy declared array or list is talking about

answerE1 is picking one each looping to work on, which is an arrow function
so if that objective option a,b,c,d in >input> is checked...then let
answer = answerEl.its ID or we call it selected obj.

10. in summary, loadquiz is call, same time it calls deselect, which would deselect
    immediately the load finishes its work, then when the button is clicked, it calls the getselected
