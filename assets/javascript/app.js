// <script>



//   var track = [];

//     var maxQues = prompt("How many questions do you want to answer?", "5");
//     var rand = Math.floor(Math.random() * maxQues);

//     var str='<h4>Answer all the questions</h4>';

//     for(var i=0;i<maxQues;i++){

//         var rand = Math.floor(Math.random() * maxQues);
//         str+=(i+1)+'.  '+quizObj[rand].question+'<br>';
//         str+='<form><table>'+
//             '<tr><td id="a1"><input type="radio" name="radio' + i + '"/>'+'&nbsp;&nbsp;'+quizObj[rand].choice[0]+'</td></tr>'+
//             '<tr><td id="a2"><input type="radio" name="radio' + i + '" />'+'&nbsp;&nbsp;'+quizObj[rand].choice[1]+'</td></tr>'+
//             '<tr><td id="a3"><input type="radio" name="radio' + i + '"/>'+'&nbsp;&nbsp;'+quizObj[rand].choice[2]+'</td></tr>'+
//         '</table></form><br>';
//     track[i]=rand;
//     }
//     str += '<input value="Submit" type="button" onclick="scoreMe()"><br><br>';
//     str += 'Score: <input id="score" type="text" size="8" ><br><br><br>';
//     document.getElementById('quesRes').innerHTML = str;

//   function scoreMe(){
//     var sum=0;
//     for(var j=0;j<maxQues;j++){
//       for(var k=0;k<3;k++){
//         if(quizObj[track[j]].choice[k].checked===quizObj[track[j]].correct[0]){
//           console.log('Works'+j);
//           sum++;
//         }
//       }
//     }
//     document.getElementById('score').value = ((sum/maxQues)*100)+'%';
//   }
// </script>


//shorthand for document.ready function
// Declaration and Data Type & Valuse assignment of Variables
var timerCount = 20;
var transitionTimerCount = 4;
var questionNumber = 0;
var intervalId = "";
var intervalId2 = "";
var bolQuestionPage = false;	
var testResult = "";
var clickedId = "";
var randomQuestion = [];
var arrPhilosopherChoicess = [
	"Socrates",
	"Plato",
	"Epicurus",
	"Aristotle",
	"Marcus Aurelius",
	"Augustine",
	"Thomas Aquinas",
	"Michel de Motaigne",
	"Blaise Pascal",
	"La Rouchfoucauld",
	"Baruch Spinoza",
	"Rene Descartes",
	"David Hume",
	"Immanuel Kant",
	"Edmund Burke",
	"Hegel",
	"Schopenhauer",
	"Soren Kierkegaard",
	"Friedrich Nietzsche",
	"Ludwig Wittgenstein",
	"Heidegger",
	"Jean Paul Sartre",
	"Albert Camus",
	"Jaques Derrida",
	"Michael Foucault",
	"Emil Cioran"
];

var objectQuestions = {
	arrQuestion1: ['Who famously coined the phrase " I think therefore I am"?', "Renes Descartes"]
}
var arrCorrectAnswer = ["Correct!", "You Got It!", "Right-o!", "You're Doing it Peter!", "Correctamundo!", "You're Right!"]

var objTrivia = [
    { 
      "question": 'Who famously coined the phrase " I think therefore I am"?',
      "answers": ["Motaigne", "Foucault", "Immanuel Kant", "Rene Descartes"],
      "correct": ["Rene Descartes"]
   },
   { 
      "question": "Which philosopher created the concept of the Übermensch?",
      "answers": [" Jean Paul Sartre", "La Rouchfoucauld", "Friedrich Nietzsche", "Edmund Burke"],  
      "correct": ["Friedrich Nietzsche"]
   },
    { 
      "question": "What school of philosophy did Marcus Aurelius practice?",
      "answers": ["Nihlism", "Stoicism", "Utilitarianism", "Taoism"],
      "correct": ["Stoicism"]
   },
    { 
      "question": "What is hell in Jean Paul Sartre's play Huis Clos?",
      "answers": ["Home of the Devil", "The Human Mind", "Other People", "Capitalism"],  
      "correct": ["Other People"]
   },
    { 
        "question": "Which philosopher thought that a virtuous ordinary life is just as worth striving for as one of excellence?",
        "answers": ["Michel de Motaigne", "Renes Descartes", "Albert Camus", "La Rouchfoucauld"],  
        "correct": ["Michel de Motaigne"]
   },
    { 
        "question": "Which school of thought did Blaise Pascal advocate for?",
        "answers": ["Optimisim", "Pessimism", "Nihlism", "Rationalism"],  
        "correct": ["Pessimism"]
   },
    { 
        "question": "Which Philosopher thought we are more influenced by our feelings than by reason?",
        "answers": ["Georg Hegel", "Thomas Aquinas", "Epicurus", "David Hume"],  
        "correct": ["David Hume"]
   },
   //  { 
   //      "question": "",
   //      "answers": [""],  
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],  
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],  
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // },
   //  { 
   //      "question": "",
   //      "answers": [""],
   //      "correct": [""]
   // }



];



//function that generates a random index to generate a new question
function questionRandomizer(){
	randomQuestion = Math.floor(Math.random() * objTrivia.length);
	console.log(objTrivia.length);

};
//function that splices the indexed random number from the objTrivia array
function questionSplicer(){
		objTrivia.splice([randomQuestion], 1);
};

console.log(randomQuestion);

function hidePage(pageName){
	$("#" + pageName + "-page").addClass("hide");
};
function showPage(pageName){
	$("#" + pageName + "-page").removeClass("hide");
};

	

//function that generates text for 
function textGenerator(){
	questionRandomizer();
	$("#question-text").text(objTrivia[randomQuestion].question);
	for (var i = 1; i <= objTrivia[randomQuestion].answers.length; i++) {
		$("#answer-" + i).text(objTrivia[randomQuestion].answers[i-1]);
	};
	questionSplicer();
	console.log(objTrivia.length);
}

function nextQuestion(){
	textGenerator();
}

function correctAnswerPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text(arrCorrectAnswer[Math.floor(Math.random()*arrCorrectAnswer.length)])
	$("#answer-meme").attr("src", "./assets/images/foucalt.png" )
	// setInterval()
};

function incorrectAnswerPage(){

};

// console.log(testResult)

	// jquery function that only runs contained content once the page is loaded
$(function() {
	//function that causes start button to hide title page and shows questions page and starts question timer
	$("#start-button").on("click", function(){
		$("#title-page").addClass("hide");
		$("#question-page").removeClass("hide");
		timer();
	});


	//function that causes restart button to hide results page and show title page
	$("#restart-button").on("click", function(){
		$("#results-page").addClass("hide");
		$("#title-page").removeClass("hide");	
	});

	//function that stores the index of the clicked answer button in a var
	$(".answer-choice").click(function() {
      clickedId = $(this).attr("id");
  		clickedIdIndex = clickedId.substring(clickedId.length - 1) - 1
   });



function transitionTimer(){
	function run() {
    intervalId2 = setInterval(decrement, 1000);
  }
	function decrement() {
    //  Decrease timerCount by one.
    timerCount--;
    //  Show the timerCount in the #show-timerCount tag.
    $("#show-timerCount").text("Time Remaining: " + timerCount + " seconds");
    //  Once timerCount hits zero...
    
    if (timerCount === 0) {
    	nextQuestion


    }
	}
};
 



function timer() {
  //  The run function sets an interval
  //  that runs the decrement function once a second.
  function run() {
    intervalId = setInterval(decrement, 100);
  }

  //  The decrement function.
  function decrement() {
    //  Decrease timerCount by one.
    timerCount--;
    //  Show the timerCount in the #show-timerCount tag.
    $("#show-timerCount").text("Time Remaining: " + timerCount + " seconds");
    //  Once timerCount hits zero...
    
    if (timerCount === 0) {
    	stop();
    	correctAnswerPage()


    }
  }
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();


//  Execute the run function.
};

textGenerator();
});
