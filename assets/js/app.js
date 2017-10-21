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




    var count = 60;
    var incorrectCounter = 0; 
    var correctCounter = 0;
    var unansweredCounter = 0;
    // var quiz =$('#quiz') // quiz div id class


    // let the game(s) begin

    $(document).ready(function(){
        $("#quizDiv").hide(); // game starts w/ hidden divs
        $("#resolutionDiv").hide();


        $("startButton").on("click", function() {  // this initializes the start page / button

            $("#startDiv").hide();

            $("#quizDiv").show();

            starTimeclock();
            return;
        });


        function timeclock(){ // initialize & displays counter 
            count--; // the actual deincrementation of the timeclock

            $('#timerValue').html(count + " seconds"); // sets counter value in html

            $("#finishedButton").on("click", function(){ // if you hit finished button before time is up.
                count = 0; 
                return;
            

        });

if(count == -1)
{
    timesUp() {
        var one = $('input:radio[name="one"]:checked').val();
        var two = $('input:radio[name="two"]:checked').val();
        var three = $('input:radio[name="three"]:checked').val();
        var four = $('input:radio[name="four"]:checked').val();
      
        if (one == undefined){
            unansweredCounter++;
        }
        else if (one == "UPS") {
            correctCounter++;
        }
        else {
            incorrectCounter++;
        }

        if (two == undefined){
            unansweredCounter++;
        }
        else if (one == "Netflix") {
            correctCounter++;
        }
        else {
            incorrectCounter++;
        }

        if (three == undefined){
            unansweredCounter++;
        }
        else if (one == "Twitter") {
            correctCounter++;
        }
        else {
            incorrectCounter++;
        }

        if (four == undefined){
            unansweredCounter++;
        }
        else if (one == "Yahoo") {
            correctCounter++;
        }
        else {
            incorrectCounter++;
        }



    }
}

    }


// var questions = [{
//         question: "what company logo uses the color brown?",
//         guesses: ["Nike", "Pizza Hut", "Netflix", "UPS"],
//         answer: 3,
//     },
//     {
//         question: "what company logo uses the color red?",
//         guesses: ["FedEx", "Skype", "Netflix", "Blogger"],
//         answer: 2,
//     },

//     {
//         question: "what company logo uses the color blue?",
//         guesses: ["Twitter", "Starbucks", "Hallmark", "BBC"],
//         answer: 0,
//     },

//     {
//         question: "what company logo uses the color purple?",
//         guesses: ["Target", "Yahoo", "Nikon", "Vimeo"],
//         answer: 1,

//     }
// ];

