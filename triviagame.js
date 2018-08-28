

<script>
        // Variables defined
        var userAnswer;
        var correctAnswerQ1 = "";
        var correctAnswerQ2 = "";
        var wrongAnswer;
        var timer;
        var score = 0

        // Question presented to user, Option populate, user chooses, compare user to correct,if correct ____ if wrong___
        // Grab value if A1 to Q1
        // Check if Radio button is checked
        
        //    Click Function on start button- prevent default and prevent propogation
        // If chosen check against Correct Answer - allow only one radio to be checked at a time- default
        //  Click Listener on radio button
        
    //Question 1 -1
        document.getElementById("q1a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q1a1").checked;
            var answer2 = document.getElementById("q1a2").checked;

            if (answer1 == true) {
                score++;
            }   
        });
        document.getElementById("q1a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q1a2").checked;
        });
        document.getElementById("q1a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q1a3").checked;
        });
        document.getElementById("q1a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q1a4").checked;
        });
        // When time is up gray out all radio button options
        
        //Question 2 -3
        document.getElementById("q2a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q2a1").checked;
            var answer2 = document.getElementById("q2a2").checked;
            }   
        );
        document.getElementById("q2a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q2a2").checked;
                console.log(score);;
        });
        document.getElementById("q2a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q2a3").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });
        document.getElementById("q2a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q2a4").checked;
                console.log(score);;
        });

        //Question 3 -3
        document.getElementById("q3a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q3a1").checked;
            var answer2 = document.getElementById("q3a2").checked;
            }   
        );
        document.getElementById("q3a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q3a2").checked;
                console.log(score);;
        });
        document.getElementById("q3a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q3a3").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });
        document.getElementById("q3a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q3a4").checked;
                console.log(score);;
        });

        //Question 4 -2
        document.getElementById("q4a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q4a1").checked;
            var answer2 = document.getElementById("q4a2").checked;
            }   
        );
        document.getElementById("q4a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q4a2").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });
        document.getElementById("q4a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q4a3").checked;
                console.log(score);;
        });
        document.getElementById("q4a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q4a4").checked;
                console.log(score);;
        });

        //Question 5 -1
        document.getElementById("q4a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q5a1").checked;
            // var answer2 = document.getElementById("q5a2").checked;

            if (answer1 == true) {
                score++;
                console.log(score);
            }   
        });
        document.getElementById("q5a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q5a2").checked;
                console.log(score);;
        });
        document.getElementById("q5a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q5a3").checked;
                console.log(score);;
        });
        document.getElementById("q5a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q5a4").checked;
                console.log(score);;
        });

        //Question 6 -4
        document.getElementById("q6a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q6a1").checked;
            var answer2 = document.getElementById("q6a2").checked;
            }   
        );
        document.getElementById("q6a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q6a2").checked;
                console.log(score);;
        });
        document.getElementById("q6a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q6a3").checked;
                console.log(score);;
        });
        document.getElementById("q6a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q6a4").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });

        //Question 7 -2
        document.getElementById("q7a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q7a1").checked;
            var answer2 = document.getElementById("q7a2").checked;
            }   
        );
        document.getElementById("q7a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q7a2").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });
        document.getElementById("q7a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q7a3").checked;
                console.log(score);;
        });
        document.getElementById("q7a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q7a4").checked;
                console.log(score);;
        });

        //Question 8 -3
        document.getElementById("q8a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q8a1").checked;
            var answer2 = document.getElementById("q8a2").checked;
            }   
        );
        document.getElementById("q8a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q8a2").checked;
                console.log(score);;
        });
        document.getElementById("q8a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q8a3").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });
        document.getElementById("q8a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q8a4").checked;
                console.log(score);;
        });

        //Question 9 -1
        document.getElementById("q9a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q9a1").checked;
            var answer2 = document.getElementById("q9a2").checked;

            if (answer1 == true) {
                score++;
                console.log(score);
            }   
        });
        document.getElementById("q9a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q9a2").checked;
                console.log(score);;
        });
        document.getElementById("q9a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q9a3").checked;
                console.log(score);;
        });
        document.getElementById("q9a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q9a4").checked;
                console.log(score);;
        });

        //Question 10 -4
        document.getElementById("q10a1").addEventListener("click", function() {
            var answer1 = document.getElementById("q10a1").checked;
            var answer2 = document.getElementById("q10a2").checked;
            }   
        );
        document.getElementById("q10a2").addEventListener("click", function() {
            var isChosen = document.getElementById("q10a2").checked;
                console.log(score);;
        });
        document.getElementById("q10a3").addEventListener("click", function() {
            var isChosen = document.getElementById("q10a3").checked;
                console.log(score);;
        });
        document.getElementById("q10a4").addEventListener("click", function() {
            var isChosen = document.getElementById("q10a4").checked;
            if (isChosen == true){
                score++}
                console.log(score);;
        });


    </script>
