$( document ).ready(function() {
    console.log( "ready!" );


// Problem & Objective: Ask Questions and get answers

// Target users: Zach, my other class mates

// Functional requirements :
	// You'll create a trivia form with multiple choice or true/false options (your choice).
	// The player will have a limited amount of time to finish the quiz.
	// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
	// Don't let the player pick more than one answer per question.
	// Don't forget to include a countdown timer.


	// Sequence chart === > State Diagram === > FLow chart ===> Pseudo code.   

	//   					Variables come with the State diagram.

//******** State starts *************

//Varaiables: 

// State 1 / (Initial) 
// Explanation of state:
//The timer did not yet started, the user can only see a start button on the screen that is it. 
// Transition only to State 2. On click "start" button 



// Transition: 

// State 2 / Answering Questions (Interation w user takes place):
// Explanation of state:
// The timer counts down at the top of the screen 
//The questions are accesibale by scrollling down. 
//The user can not sselect two answers for one question. 
// Transition only to Results,  
//Conditions a) Timer hits zero.  


//Transition Condition: 
// State 3 / Displaying Results / (Final stage):
// Explanation of state:
// In this state when times counter is zero.
// There will be one page revelaing the page that gives you the number of correct and wrong answers. 
// timeLapse < 0 or numberAnsweredQuestion = length.questions

//State digram
/*
Trivia states  | behaviour
---------------------------------------------------
State 1 / Initial            | Display Start and timer @ 30 sec.
                             | rigthAnswers: 0;
                             | wrongAnswers: 0; 
                             | funtion() countdown(): not started
                             | 
                             |  

*/
/*

Trivia states  | behaviour
---------------------------------------------------
State 2 / Initial            | Display Start and timer @ 30 sec.
                             | rigthAnswers: 0;
                             | wrong answers: 0; 
                             | funtion() countdown(): going down. 
*/
/*
Trivia states  | behaviour
---------------------------------------------------
State 3 / Initial            | Display: 
                             | # of right answers: rigthAnswers;
                             | # of wrong answers: wrong answers; 
                             | funtion() countdown(): at zero.

*/

// Stage 2 /Answering questions	| hit button to run on 
// Stage 3 / Displaying Results

// var timer = 30 sec;
// var rigthAnswers = 0;
// var wrongAnswers = 0;
//  function myTimer() {
//
//} 
// var questions 
// var questions = [According to Zeroth law of robotics, robots can kill 
// human beings]




//**********   States ends **************






//Define the variables. 
rigthAnswers = 0,
wrongAnswers =  0,
realTimer = 0,
// Display the state 1
$("#state2, #state3").hide();


// define the function countDown that stops at 0 seconds. 


myTimer = setInterval(myCountDown, 100);
var c = 0;
function myCountDown() {
    c = ++c;
    	
    realTimer = 30 - c; 
    
    console.log(realTimer);

    if (realTimer === 0) {

    	clearInterval(myTimer);
    }
}








// onClick the function countdown will start.
 //$("#start").click(finalTimer);

// Display the trivaleria whcih is state2 . 
// while countDown >0 this stage continues. 
// When countdown = 0, 
// change the variables by capturing the inputs and by comparing them with asnwers, and making the calculations.
// Display the state 3. 





});