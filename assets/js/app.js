// PSEUDO

// press start button
// start timer counting down from 60 seconds
// load quiz div screen with 4 multiple choice questions
// 4 anwser options per question, 1 correct answer, 3 incorrect
// when player selects correct anwser, ++ to correct answer variable
// when player selects wrong anwser, ++ to incorrectanswer variable
// if player does not select an answer, ++ to unanswered variable

// if player answers all questions and presses finished button
// hide quiz div
// show scoreboard div with correctanswer count, incorrectanswer count, unanswered count

// else
// if timer hits 0
// hide quiz div
// show scoreboard div with correctanswer count, incorrectanswer count, unanswered count




var questionsAnwswered = 0;
    var incorrectCounter = 0; 
    var correctCounter = 0;
    var unansweredCounter = 0;
    var choices = []; // an array for guesses
    var quiz =$('#quiz') // quiz div id class



var questions = [{
        question: "what company logo uses the color brown?",
        guesses: ["Nike", "Pizza Hut", "Netflix", "UPS"],
        answer: 3,
    },
    {
        question: "what company logo uses the color red?",
        guesses: ["FedEx", "Skype", "Netflix", "Blogger"],
        answer: 2,
    },

    {
        question: "what company logo uses the color blue?",
        guesses: ["Twitter", "Starbucks", "Hallmark", "BBC"],
        answer: 0,
    },

    {
        question: "what company logo uses the color purple?",
        guesses: ["Target", "Yahoo", "Nikon", "Vimeo"],
        answer: 1,

    }
];

timer();
showQuiz();


function timer(){
    time = setTimeout(timesUp, 1000 * 60);
    console.log("this is the timer");
    }

    function stopClock() {
        clearTimer(time);
    }

    function timesUp(){
        $("#finished").show();
        $("#replaybutton").show();
        $("#quiz").hide();
        $("#timeclock").hide();
        stopClock();  
    }

   var second;
   var x;

   function counter() {
       seconds = document.getElementById("counter").innerHTML;
       seconds = parseInt(second, 10);

       if (seconds == 1) {
           x = document.getElementById("counter");
           return;
       }

       seconds--;
       x = document.getElementById("counter");
       x.innerHTML = seconds;
       setTheTimer = setTimeout(counter, 1000);
   }

   counter();

   function timerFunction() {
       clearTimer(setTheTimer);
   }

   // play again button

   $('#replaybutton').on("click", function() {
    var incorrectCounter = 0; 
    var correctCounter = 0;
    var unansweredCounter = 0;
    var choices = [];
    $("#finished").hide();
    $("#replaybutton").hide();
    $("#quiz").show();
    $("#timeclock").show();
    timer();
    document.getElementById("counter").innerHTML = 60;
    counter();
   });

   // creates the quiz
   function showQuiz() {
       var quizInfo = $('div', {
           id: 'question'
       });

       var question = $('<p>').append(questions.question);
       quizInfo.append(question);

       var radios = makeRadios();
       quizInfo.append(radios);
       return quizDiz;
   };

   function makeRadios(index) {
       var radioChoices = $('<ul>');
       var inputs = '';
       for (var i = 0; i < questions[index].guesses.length; i++) {
           var element = $('<li>');
           inputs = '<input type="radio" name="guesses" value=' +i+ ' />';
           inputs += questions[index].guesses[i]
           item.append(inputs);
           radios.append(item);
       }
       return radios;
   }

   // gets user guess & adds to array

   function answerChoosen() {
choices[questionsAnwswered] = +$('inputs[name="guesses"]:checked').val();
   }

   