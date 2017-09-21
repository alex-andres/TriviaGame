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
var questionNumber = 1;
var intervalId = "";
var intervalId2 = "";
var bolQuestionPage = false;	
var testResult = "";
var clickedId = "";
var randomQuestionIndex = [];
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
console.log(arrPhilosopherChoicess.length);

var objectQuestions = {
	arrQuestion1: ['Who famously coined the phrase " I think therefore I am"?', "Renes Descartes"]
}
var arrCorrectAnswer = ["Correct!", "You Got It!", "Right-o!", "You're Doing it Peter!", "Correctamundo!", "You're Right!"]
var arrIncorrectAnswer =["Wrong!", "Nope!", "Study Up!", "Better Luck Next Time", "That's a Negative GhostRider", "Nuh-uh!"]
var objTrivia = [
    { 
      "question": 'Who famously coined the phrase " I think therefore I am"?',
      "answers": ["Motaigne", "Foucault", "Immanuel Kant", "Rene Descartes"],
      "correct": "Rene Descartes",
      "src": "assets/images/Rene_Descartes.png"
    },
   { 
      "question": "Which philosopher created the concept of the Übermensch?",
      "answers": [" Jean Paul Sartre", "La Rouchfoucauld", "Friedrich Nietzsche", "Edmund Burke"],  
      "correct": "Friedrich Nietzsche",
      "src": "assets/images/nietzsche.png"
    },
    { 
      "question": "What school of philosophy did Marcus Aurelius practice?",
      "answers": ["Nihlism", "Stoicism", "Utilitarianism", "Taoism"],
      "correct": "Stoicism",
      "src": "assets/images/aurelius.png"
    },
    { 
      "question": "What is hell in Jean Paul Sartre's play Huis Clos?",
      "answers": ["Home of the Devil", "The Human Mind", "Other People", "Capitalism"],  
      "correct": "Other People",
      "src": ""
    },
    { 
      "question": "Which philosopher thought that a virtuous ordinary life is just as worth striving for as one of excellence?",
      "answers": ["Michel de Motaigne", "Renes Descartes", "Albert Camus", "La Rouchfoucauld"],  
      "correct": "Michel de Motaigne",
      "src": ""
    },
    { 
      "question": "Which school of thought did Blaise Pascal advocate for?",
      "answers": ["Optimisim", "Pessimism", "Nihlism", "Rationalism"],  
      "correct": "Pessimism",
      "src": "assets/images/pascal.png"
    },
    { 
      "question": "Which Philosopher thought we are more influenced by our feelings than by reason?",
      "answers": ["Georg Hegel", "Thomas Aquinas", "Epicurus", "David Hume"],  
      "correct": "David Hume",
      "src": "assets/images/David_Hume.png"
    }
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",	
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",	
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",
    //   "src": ""
    // },
    // { 
    //   "question": "",
    //   "answers": [""],  
    //   "correct": "",	
    //   "src": ""
    // },
    // { 
    // "question": "",
    // "answers": [""],  
    // "correct": "",	
    // "src": ""
 	  // },
];
	// jquery function that only runs contained content once the page is loaded
$(function() {
	//function that causes start button to hide title page and shows questions page and starts question timer
	$("#start-button").on("click", function(){
		hidePage("title");
		showPage("question");
		questionNumberDisplay();
		timer();	

	});




	//function that stores the index of the clicked answer button in a var
	$(".answer-choice").click(function() {
      clickedId = $(this).attr("id");
  		clickedIdIndex = clickedId.substring(clickedId.length - 1) - 1
  		answerChecker()
   });
	//function that causes restart button to hide results page and show title page
	$("#restart-button").on("click", function(){
		hidePage("results");
		showPage("title");
		timerCount = 20;
		transitionTimerCount = 4;
		questionNumber = 1;
		intervalId = "";
		intervalId2 = "";
		bolQuestionPage = false;	
		testResult = "";
		clickedId = "";
		randomQuestionIndex = [];
	});


//function that generates a random index to generate a new question
function questionRandomizer(){
	randomQuestionIndex = Math.floor(Math.random() * objTrivia.length);
	console.log(objTrivia.length);

};
//function that splices the indexed random number from the objTrivia array
function questionSplicer(){
		objTrivia.splice([randomQuestionIndex], 1);
};

//function that takes title, question, answer || results as argument and hides respective page
function hidePage(pageName){
	$("#" + pageName + "-page").addClass("hide");
};
//function that takes title, question, answer || results as argument and displays respective page
function showPage(pageName){
	$("#" + pageName + "-page").removeClass("hide");
};
//function that updates the question number
function questionNumberDisplay(){
	$("#question-number").text("Question # " + questionNumber);
	questionNumber++;
}


//function that generates text for 
function textGenerator(){
	questionRandomizer();
	$("#question-text").text(objTrivia[randomQuestionIndex].question);
	for (var i = 1; i <= objTrivia[randomQuestionIndex].answers.length; i++) {
		$("#answer-" + i).text(objTrivia[randomQuestionIndex].answers[i-1]);
	};
	console.log(randomQuestionIndex);
	questionSplicer();
	console.log(objTrivia.length);
};
console.log(randomQuestionIndex);
//function that generates updated information for question page and transitions to next question page
function nextQuestion(){
	textGenerator();
	showPage("question");
	hidePage("answer");
}
function answerChecker(){
	if (objTrivia[randomQuestionIndex].answers[clickedIdIndex] === objTrivia[randomQuestionIndex].correct) {
		correctAnswerPage();
	}
	else if (objTrivia[randomQuestionIndex].answers[clickedIdIndex] !== objTrivia[randomQuestionIndex].correct)
		incorrectAnswerPage();
	else if (transitionTimerCount === 0)
		timesUpPage();
	else
		return -1
}

function correctAnswerPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text(arrCorrectAnswer[Math.floor(Math.random()*arrCorrectAnswer.length)]);
	$("#answer-meme").attr("src", objTrivia[randomQuestionIndex].src);
	transitionTimer();
};

function timesUpPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text("Times Up!")
	$("#answer-image").attr("src", objTrivia[randomQuestionIndex].src);
	$("#answer-text").text("Correct Answer: " + objTrivia[2].correct);
	transitionTimer();
};
function incorrectAnswerPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text(arrIncorrectAnswer[Math.floor(Math.random()*arrIncorrectAnswer.length)])
	console.log(randomQuestionIndex);
	// $("#answer-image").attr("src", objTrivia[randomQuestionIndex].src);
	$("#answer-text").text("Correct Answer: " + objTrivia[2].correct);
	transitionTimer();
};

// console.log(testResult)





function transitionTimer(){
	function run() {
    intervalId2 = setInterval(decrement, 1000);
  }
	function decrement() {
    //  Decrease timerCount by one.
    transitionTimerCount--;
    
    if (transitionTimerCount === 0) {
    	stop();
    	nextQuestion();



    }
   	function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
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
    	incorrectAnswerPage();


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
