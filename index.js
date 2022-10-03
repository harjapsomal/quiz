window.onload = function () {
  // runs when the website loads initially
  visible("q1", false); //make each question invisible
  visible("q2", false); // the second argument is for visible/invisible
  visible("q3", false); // 'true' means make it visible, false means invisible
  visible("q4", false);
  visible("q5", false);
  visible("q6", false);
  //  document.getElementById("score").style.display = "none"; //make score invisible
  document.getElementById("score_text").style.display = "none"; //make score text invisible also
};

function startQuiz() {
  //this is called when user clicks on the START button
  //display first question
  document.getElementById("start").style.display = "none"; //make the START button invisible
  visible("q1", true); //make Q1 (first question) visible
}

// This function makes the element (vis_id) either VISIBLE or INVISIBLE
// if the vis_invis argument is "true" - it will make the element VISIBLE
// if it is "false"  -   it will make it INVISIBLE

function visible(vis_id, vis_invis) {
  if (vis_invis == true) {
    document.getElementById(vis_id).style.display = "block"; //make it visible
  } else if (vis_invis == false) {
    document.getElementById(vis_id).style.display = "none"; //make it invisible
  } else {
    //invalid second argument
    console.log("func Visible() has been passed second param wrongly");
  }
}

var runningTotal = 0; // declared outside function to keep value

// What this function does:  Make this question (q1) invisible
// and make the next question (q2) visible
// also - Add 1 to the running total if the answer is correct

function nextQuestion(q1, q2, answer, actual_answer) {
  // answer means 'user given answer', and this needs to be compared to the actual_answer

  if (answer === actual_answer) {
    // correct - so increment the score
    runningTotal++;
  }

  visible(q1, false); // make q1(current question) invisible

  if (q2 === "Finished") {
    document.getElementById("score").innerHTML = runningTotal;
    console.log(runningTotal);
    document.getElementById("score_text").style.display = "block"; //make score visible
    document.getElementById("score").style.display = "block"; //make score visible
  } else {
    visible(q2, true); //make q2 (i.e. next question) visible
  }
}
