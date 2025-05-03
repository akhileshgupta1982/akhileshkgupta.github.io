/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "The full wave rectifier gives output as:",  ///// Write the question inside double quotes
      answers: {
        a: "A full wave similar to input supply.",                  ///// Write the option 1 inside double quotes
        b: "A full wave opposite to output voltage.",                  ///// Write the option 2 inside double quotes
        c: "A full wave in one direction according to connection.",                  ///// Write the option 3 inside double quotes
        d: "No output"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "The full wave controlled rectifier with firing angle 0<sup>0</sup> gives output for",  ///// Write the question inside double quotes
      answers: {
        a: "Full cycle",                  ///// Write the option 1 inside double quotes
        b: "Half cycle ",                  ///// Write the option 2 inside double quotes
        c: "No output",                  ///// Write the option 3 inside double quotes
        d: "Can’t say "                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */

 {
     question: "A single phase full controlled bridge converter (B-2) uses",  ///// Write the question inside double quotes
      answers: {
        a: "6 SCRs",                  ///// Write the option 1 inside double quotes
        b: "4 SCRs",                  ///// Write the option 2 inside double quotes
        c: "4 SCRs and 4 diodes",                  ///// Write the option 3 inside double quotes
        d: "4 SCRs and 2 diodes "                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		
     {
     question: "A single phase full bridge inverter can operated in load commutation mode in case load consist of ",  ///// Write the question inside double quotes
      answers: {
        a: "RLC overdamped",                  ///// Write the option 1 inside double quotes
        b: "RL ",                  ///// Write the option 2 inside double quotes
        c: "RLC underdamped",                  ///// Write the option 3 inside double quotes
        d: "RLC critically damped "                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		
     {
     question: "A single-phase full converter is connected across an AC source of 230 V. when thyristor is fired with 30° firing angle, the average output voltage is approximately equal to ",  ///// Write the question inside double quotes
      answers: {
        a: "179 V",                  ///// Write the option 1 inside double quotes
        b: "279 V",                  ///// Write the option 2 inside double quotes
        c: "379 V",                  ///// Write the option 3 inside double quotes
        d: "Given data is not sufficient."                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    		


  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
