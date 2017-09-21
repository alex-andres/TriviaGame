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

var questionNumber = 1;
var bolQuestionPage = false;	
var testResult = "";
var clickedId = "";
var randomQuestionIndex = 0;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var arrPhilosopherChoicess = [
	"Socrates",
	"Plato",
	"Epicurus",
	"Aristotle",
	"Marcus Aurelius",
	// "Augustine",
	"Thomas Aquinas",
	"Michel de Montaigne",
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
      "src": "assets/images/descartes.png",
      "quote": "It is not enough to have a good mind; the main thing is to use it well."
    },
   { 
      "question": "Which philosopher created the concept of the Übermensch?",
      "answers": [" Jean Paul Sartre", "La Rouchfoucauld", "Friedrich Nietzsche", "Edmund Burke"],  
      "correct": "Friedrich Nietzsche",
      "src": "assets/images/nietzsche.png",
      "quote": "And those who were seen dancing were thought to be insane by those who could not hear the music."
    },
    { 
      "question": "What school of philosophy did Marcus Aurelius practice?",
      "answers": ["Nihlism", "Stoicism", "Utilitarianism", "Taoism"],
      "correct": "Stoicism",
      "src": "assets/images/aurelius.png",
      "quote": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."
    },
    { 
      "question": "What is hell in Jean Paul Sartre's play Huis Clos?",
      "answers": ["Home of the Devil", "The Human Mind", "Other People", "Capitalism"],  
      "correct": "Other People",
      "src": "assets/images/sartre.png",
      "quote": "Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance."
    },
    { 
      "question": "Which philosopher thought that a virtuous ordinary life is just as worth striving for as one of excellence?",
      "answers": ["Michel de Montaigne", "Renes Descartes", "Albert Camus", "La Rouchfoucauld"],  
      "correct": "Michel de Montaigne",
      "src": "assets/images/montaigne.png",
      "quote": "A good marriage would be between a blind wife and a deaf husband."
    },
    { 
      "question": "Which school of thought did Blaise Pascal advocate for?",
      "answers": ["Optimisim", "Pessimism", "Nihlism", "Rationalism"],  
      "correct": "Pessimism",
      "src": "assets/images/pascal.png",
      "quote": "All men's miseries derive from not being able to sit in a quiet room alone."
    },
    { 
      "question": "Which Philosopher thought we are more influenced by our feelings than by reason?",
      "answers": ["Georg Hegel", "Thomas Aquinas", "Epicurus", "David Hume"],  
      "correct": "David Hume",
      "src": "assets/images/hume.png",
      "quote": "The life of man is of no greater importance to the universe than that of an oyster."
    },
    { 
      "question": 'This Philosopher is known as "The Philosopher" and is also known for  tutoring Alexander the Great',
      "answers": ["Plato","Epicurus","Socrates","Aristotle"],  
      "correct": "Aristotle",
      "src": "assets/images/aristotle.png",
      "quote": ""
    },
    { 
      "question": "Which philosopher introduced the idea of the Sublime?",
      "answers": ["Edmund Burke", "Epicurus", "Michel Foucault","La Rouchfoucauld"],  
      "correct": "Edmund Burke",
      "src": "assets/images/burke.png",
      "quote": "To read without reflecting is like eating without digesting."
    },
    { 
      "question": 'Which of the following won a nobel prize in literature for his novel "The Stranger"?',
      "answers": ["Albert Camus", "Jean Paul Sartre", "Jaques Derrida", "Michel Foucault"],  
      "correct": "Albert Camus",
      "src": "assets/images/camus.png",
      "quote": "In the depth of winter, I finally learned that within me there lay an invincible summer"
    },
    { 
      "question": 'This philosopher who is well known for his Pessimism and Nihlism once said "only an idiot could think there is any point to any of this".',
      "answers": ["Aristotle", "Emil Cioran", "Plato", "La Rouchfoucauld"],  
      "correct": "Emil Cioran",
      "src": "assets/images/cioran.png",
      "quote": "The fact that life has no meaning is a reason to live - moreover, the only one."
    },
    { 
      "question": "Who is best known for the popularization of the concepts of deconstruction, aporia, and logocentrism?",
      "answers": ["Soren Kierkegaard", "Jaques Derrida", "Thomas Aquinas", "Plato"],  
      "correct": "Jaques Derrida",
      "src": "assets/images/derrida.png",
      "quote": "As soon as there is language, generality has entered the scene."
    },
    { 
      "question": 'Which philosopher is widely misconceived of having indulgent tendencies due to establishing his "School of Happiness"?',
      "answers": ["Michel de Montaigne", "Thomas Aquinas", "Epicurus", "Plato"],  
      "correct": "Epicurus",	
      "src": "assets/images/epicurus.png",
      "quote": "Death is nothing to us, since when we are, death has not come, and when death has come, we are not."
    },
    { 
      "question": "Whose philosophy advocated that things commonly seen as modern medical and social advancement, are actually less humane than in earlier societies?",
      "answers": ["Emil Cioran","Michel Foucault", "David Hume", "Friedrich Nietzsche"],  
      "correct": "Michel Foucault",
      "src": "assets/images/foucault.png",
      "quote": "In its function, the power to punish is not essentially different from that of curing or educating."
    },
    { 
      "question": "Which philosopher inspired some of the fundamental ideas of Karl Marx?",
      "answers": ["Georg Hegel", "Friedrich Nietzsche", "Plato", "Martin Heidegger"],  
      "correct": "Georg Hegel",
      "src": "assets/images/hegel.png",
      "quote": ""
    },
    { 
      "question": 'Whose philosophy revolved around the confrontation of "Das Nichts" or "The Nothing"?',
      "answers": ["Friedrich Nietzsche", "Immanuel Kant", "Martin Heidegger", "Arthur Schoppenhauer"],  
      "correct": "Martin Heidegger",
      "src": "assets/images/heidegger.png",
      "quote": "Man acts as though he were the shaper and master of language, while in fact language remains the master of man"
    },
    { 
      "question": "What concept is Immanuel Kant is best known for?",
      "answers": ["The Sublime","Relative Moralism","Catergoical Imperative","Religious Fervor"],  
      "correct": "Catergoical Imperative",
      "src": "assets/images/kant.png",
      "quote": "Experience without theory is blind, but theory without experience is mere intellectual play."
    },
    { 
      "question": 'Which philosopher wanted to help people reach Eudaimonia, or fulfillment, through the concept of "Know thyself"?',
      "answers": ["Socrates","Epicurus","Marcus Aurelius","Plato"],  
      "correct": "Plato",
      "src": "assets/images/plato.png",
      "quote": "Wise men talk because they have something to say; fools, because they have to say something."
    },
    { 
      "question": "La Rouchfoucauld was best known for which style of writing?",
      "answers": ["Maxims", "Essays", "Narratives", "Lectures"],  
      "correct": "Maxims",	
      "src": "assets/images/rouchfoucauld.png",
      "quote": "There are some people who would have never fallen in love, if they had not heard there was such a thing."
    },
    { 
      "question": "Which philosopher is best known for introducing tennants of buddhism to the West",
      "answers": ["Soren Kierkegaard", "Georg Hegel", "Arthur Schoppenhauer", "Friedrich Nietzsche"],  
      "correct": "Arthur Schoppenhauer",
      "src": "assets/images/schoppenhauer.png",
      "quote": ""
    },
    { 
      "question": "Which philosopher despised democracy and the foolish means in which it steers society?",
      "answers": ["Plato","Baruch Spinoza", "Marcus Aurelius", "Socrates"],  
      "correct": "Socrates",
      "src": "assets/images/socrates.png",
      "quote": "True knowledge exists in knowing that you know nothing"
    },
    { 
      "question": "Which philosopher is best known for his efforts to replace religion with a scientifically-based ethical system",
      "answers": ["David Hume","Immanuel Kant","Renes Descartes","Epicurus"],  
      "correct": "Baruch Spinoza",
      "src": "assets/images/spinoza.png",
      "quote": "Fear cannot be without hope nor hope without fear."
    },
    { 
      "question": "What ideas were Thomas Aquinas best known for?",
      "answers": ["Reconciling faith with reason","Chrisitanity is the only viable philosophy","Religion needs no reason","Scientology is a cult"],  
      "correct": "Reconciling faith with reason",
      "src": "assets/images/aquinas.png",
      "quote": "Love takes up where knowledge leaves off."
    },
    { 
      "question": "Whose main philosophical concept revolved around language and the way verbal communication triggers pictures in our mind for understanding?",
      "answers": ["Baruch Spinoza", "Jaques Derrida","Albert Camus","Ludwig Wittgenstein"],  
      "correct": "Ludwig Wittgenstein",
      "src": "assets/images/wittgenstein.png",
      "quote": "The limits of my language mean the limits of my world."
    },
];
	// jquery function that only runs contained content once the page is loaded
$(function() {
	//function that causes start button to hide title page and shows questions page and starts question timer
	$("#start-button").on("click", function(){
		hidePage("title");
		showPage("question");
		questionNumberDisplay();
		textGenerator()
		timer();	
	});




	//function that stores the index of the clicked answer button in a var
	$(".answer-choice").click(function() {
      clickedId = $(this).attr("id");
  		clickedIdIndex = parseInt(clickedId.substring(clickedId.length - 1) - 1);
  		console.log(clickedIdIndex);
  		answerChecker()
  		bolQuestionPage = true;
  		questionNumberDisplay();
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
		randomQuestionIndex = 0;
	});

//function that generates a random index to generate a new question
function questionRandomizer(){
	randomQuestionIndex = Math.floor(Math.random() * objTrivia.length);
	console.log(randomQuestionIndex);

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
	timer();
	;
};
console.log(randomQuestionIndex);
//function that generates updated information for question page and transitions to next question page
function nextQuestion(){
	textGenerator();
	showPage("question");
	hidePage("answer");
}
function answerChecker(){
	console.log("ClickedIdIndex is " + clickedIdIndex);
	console.log("randomQuestionIndex is " + randomQuestionIndex);
	if (questionNumber > 10)
		resultsPage();

	else if (objTrivia[randomQuestionIndex].answers[clickedIdIndex] === objTrivia[randomQuestionIndex].correct){
		numberCorrect++;
		correctAnswerPage();

	}
	else if (objTrivia[randomQuestionIndex].answers[clickedIdIndex] !== objTrivia[randomQuestionIndex].correct){
		numberIncorrect++;
		incorrectAnswerPage();
	}
	else
		return -1
}

function correctAnswerPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text(arrCorrectAnswer[Math.floor(Math.random()*arrCorrectAnswer.length)]);
	$("#answer-image").attr("src", objTrivia[randomQuestionIndex].src);
	$("#answer-text").text('"'+ objTrivia[randomQuestionIndex].quote +'"');
	transitionTimer();
	questionSplicer();
};

function timesUpPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random correct answer affirmation
	$("#answer-result").text("Times Up!");
	$("#answer-image").attr("src", objTrivia[randomQuestionIndex].src);
	$("#answer-text").text("Correct Answer: " + objTrivia[randomQuestionIndex].correct);
	numberUnanswered ++
	transitionTimer();
	questionSplicer();
};
function incorrectAnswerPage(){
	hidePage("question");	
	showPage("answer");
	//line of code that displays random incorrect answer negation
	$("#answer-result").text(arrIncorrectAnswer[Math.floor(Math.random() * arrIncorrectAnswer.length)]);
	$("#answer-image").attr("src", objTrivia[randomQuestionIndex].src);
	$("#answer-text").text("Correct Answer: " + objTrivia[randomQuestionIndex].correct);
	transitionTimer();
	questionSplicer();
};

function resultsPage(){
	hidePage("answer");
	hidePage("question")
	showPage("results");
	$("#correct-answers").text("Correct Answers: " + numberCorrect);
	$("#incorrect-answers").text("Incorrect Answers: " + numberIncorrect);
	$("#unanswered-questions").text("Unanswered Questions: " + numberUnanswered);	
}

// console.log(testResult)





function transitionTimer(){
	var transitionTimerCount = 6;
	var intervalId2 = "";
	function run() {
    intervalId2 = setInterval(decrement, 1000);
  }
	function decrement() {
    //  Decrease timerCount by one.
    transitionTimerCount--;
    
    if (transitionTimerCount === 0) {
    	stop();
    	nextQuestion();
    	bolQuestionPage = false;



    }
   	function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId2);
  	};
	}
	run();

};
 



function timer() {
  //  The run function sets an interval
  //  that runs the decrement function once a second.
  var timerCount = 20;
  $("#show-timerCount").text("Time Remaining: " + timerCount + " seconds");
  var intervalId = "";

  function run() {
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    //  Decrease timerCount by one.
    timerCount--;
    //  Show the timerCount in the #show-timerCount tag.
    $("#show-timerCount").text("Time Remaining: " + timerCount + " seconds");
    //  Once timerCount hits zero...
    
    if (bolQuestionPage === true){ 
	    stop();
	   }

    else if	(timerCount === 0) {
    	stop();
    	timesUpPage();
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

});
