const quizLayout = document.querySelector(".quiz_layout")
const startQuizButton = document.querySelector("#startQuizButton")
const quizScore = document.querySelector(".quiz_score")
const quiz_button_start = document.querySelector("#quiz_button")
const counterQuiz = document.querySelector(".Counter_quiz")

const quizQuestion = document.querySelector(".quiz_question")
const optionLabelA = document.querySelector(".optionA")
const optionLabelB = document.querySelector(".optionB")
const optionLabelC = document.querySelector(".optionC")
const optionLabelD = document.querySelector(".optionD")


const optioninputA = document.querySelector("#optionA")
const optioninputB = document.querySelector("#optionB")
const optioninputC = document.querySelector("#optionC")
const optioninputD = document.querySelector("#optionD")

const optionList = [optioninputA, optioninputB, optioninputC, optioninputD ]

const lalbelList = [optionLabelA, optionLabelB, optionLabelC, optionLabelD]

const quiz_answers_container = document.querySelector(".quiz_options")
const questionContainer = document.querySelector(".question_counter")
const quizQuestions = [  {
    question: "What is the main cause of global warming?",
    choices: ["A) Pollution", "B) Deforestation", "C) Greenhouse gases", "D) Acid rain"],
    answer: "optionC"
  },
  {
    question: "What is the primary cause of ocean acidification?",
    choices: ["A) Pollution", "B) Climate change", "C) Overfishing", "D) Industrial waste"],
    answer:  "optionB"
  },
  {
    question: "What is the largest source of water pollution?",
    choices: ["A) Agricultural runoff", "B) Industrial waste", "C) Oil spills", "D) Household chemicals"],
    answer: "optionA"
  },
  {
    question: "What is the most common form of renewable energy?",
    choices: ["A) Solar", "B) Wind", "C) Hydroelectric", "D) Geothermal"],
    answer: "optionA"
  },
  {
    question: "What is the main cause of deforestation?",
    choices: ["A) Urbanization", "B) Logging", "C) Wildfires", "D) Climate change"],
    answer: "optionB"
  },
  {
    question: "What is the primary cause of air pollution?",
    choices: ["A) Exhaust from cars", "B) Factory emissions", "C) Natural disasters", "D) Wildfires"],
    answer: "optionA"
  },
  {
    question: "Which type of pollution is responsible for smog?",
    choices: ["A) Water pollution", "B) Land pollution", "C) Air pollution", "D) Noise pollution"],
    answer: "optionC"
  },
  {
    question: "Which of the following is a greenhouse gas?",
    choices: ["A) Carbon dioxide", "B) Methane", "C) Nitrous oxide", "D) All of the above"],
    answer: "optionD"
  },
  {
    question: "What is the process of converting waste materials into new products?",
    choices: ["A) Recycling", "B) Composting", "C) Landfilling", "D) Burning"],
    answer: "optionA"
  },
  {
    question: "What is the main cause of biodiversity loss?",
    choices: ["A) Habitat destruction", "B) Overfishing", "C) Pollution", "D) Climate change"],
    answer: "optionA"
  },
  {
    question: "What is the main source of energy for the Earth?",
    choices: ["A) Sunlight", "B) Fossil fuels", "C) Nuclear energy", "D) Wind"],
    answer: "optionA"
  },
  {
    question: "What is the largest contributor to greenhouse gas emissions?",
    choices: ["A) Transportation", "B) Electricity and heat production", "C) Agriculture and forestry", "D) Industry"],
    answer: "optionB"
  },
  {
    question: "Which of the following is an example of a non-renewable resource?",
    choices: ["A) Solar power", "B) Wind power", "C) Coal", "D) Biomass"],
    answer:  "optionC"
  },
  {
    question: "What is the process by which plants use sunlight to produce energy?",
    choices: ["A) Photosynthesis", "B) Respiration", "C) Digestion", "D) Fermentation"],
    answer: "optionA"
  }
]


const listOFAvailableQuestions =[...quizQuestions]

// function startTheQuizAgain() {
//     listOFAvailableQuestions=quizQuestions


// }
function CheckIfanyRadioSelected() {
  for (const radioButton of optionList) {
    if (radioButton.checked) {
      return true
    }}

}
let counter = 1


let score = 0
let specialCounter = 0
function CheckCorrectness() {
  if (quiz_button_start.innerHTML==="Submit answer") {
     // A)----------------------------
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the process by which plants use sunlight to produce energy?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the main source of energy for the Earth?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the main cause of biodiversity loss?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the process of converting waste materials into new products?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the primary cause of air pollution?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the most common form of renewable energy?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the largest source of water pollution?")
    {score += 1}
    if (optioninputA.checked && quizQuestion.innerHTML ==="What is the largest source of water pollution?")
    {score += 1}
    // B)----------------------------
    if (optioninputB.checked && quizQuestion.innerHTML ==="What is the primary cause of ocean acidification?")
    {score += 1}
    if (optioninputB.checked && quizQuestion.innerHTML ==="What is the main cause of deforestation?")
    {score += 1}
    if (optioninputB.checked && quizQuestion.innerHTML ==="What is the largest contributor to greenhouse gas emissions?")
    {score += 1}
    // C)----------------------------
    if (optioninputC.checked && quizQuestion.innerHTML ==="Which of the following is an example of a non-renewable resource?")
    {score += 1}
    if (optioninputC.checked && quizQuestion.innerHTML ==="Which type of pollution is responsible for smog?")
    {score += 1}
    if (optioninputC.checked && quizQuestion.innerHTML ==="What is the main cause of global warming?")
    {score += 1}
    // D)----------------------------
    if (optioninputD.checked && quizQuestion.innerHTML ==="Which of the following is a greenhouse gas?")
    {score += 1}
    if (optioninputD.checked && quizQuestion.innerHTML ==="What is the main cause of global warming?")
    {score += 1}
    if (optioninputD.checked && quizQuestion.innerHTML ==="What is the main cause of global warming?")
    {score += 1}
    if (optioninputD.checked && quizQuestion.innerHTML ==="What is the main cause of global warming?")
    {score += 1}


  }




}

function ResetQuiz() {
  if (specialCounter===15) {


    counter = 1
    score=0
    quizScore.innerHTML=`<h3> Your Score </h3> ${score}`
    changeTitleButtonQuiz()
    for (let i=0; i<quizQuestions.length; i++) {
      listOFAvailableQuestions.push(quizQuestions[i])
    }
  }
}
function displayScore() {

    if (specialCounter===15) {
      quiz_button_start.innerHTML="Start Again?"
      quizScore.innerHTML=`<h3> Your Score </h3> ${score}/${quizQuestions.length} <br> </h1> ${Math.round(score/quizQuestions.length*100)}%</h1>`
      quizScore.style.display="block"
      changeTitleButtonQuiz()



    }

}

function ResetScore() {
  quizScore.style.display="none"

}

function ResetLayout() {
  if (quiz_button_start.innerHTML==="Start Again?") {
    quiz_answers_container.style.display="none"
    questionContainer.style.display="none"
  }
  else {
    quiz_answers_container.style.display="block"
    questionContainer.style.display="block"
  }

}
function TryAgain(){
  if (quiz_button_start.innerHTML==="Start Again?") {
    ResetLayout()
    for (let i=0; i<quizQuestions.length; i++) {
      listOFAvailableQuestions.push(quizQuestions[i])
    }

    counter = 0
    score = 0
    specialCounter = 0
    console.log(listOFAvailableQuestions);

  }


}
function startTheQuiz(contentTobeDisplayed) {

  CheckCorrectness()
  console.log(score);
  quiz_button_start.innerHTML="Submit answer"
  ResetLayout()
  specialCounter+=1
  ResetQuiz()


  let generateRandomNumberQuiz2 = Math.floor(Math.random() * listOFAvailableQuestions.length);
  let randomQuestion2 = listOFAvailableQuestions[generateRandomNumberQuiz2]

  contentTobeDisplayed.style.display="block"
  counterQuiz.innerHTML=counter+"."
  quizQuestion.innerHTML=randomQuestion2.question
  optionLabelA.innerHTML=randomQuestion2.choices[0]
  optionLabelB.innerHTML=randomQuestion2.choices[1]
  optionLabelC.innerHTML=randomQuestion2.choices[2]
  optionLabelD.innerHTML=randomQuestion2.choices[3]
  if (counter>=1) {
    listOFAvailableQuestions.splice(generateRandomNumberQuiz2, 1)
  }
  startQuizButton.style.display="none"


}

function AddResetAnimationQuiz(content){

  content.style.animation="showQuizQuestionsAnimation 0.7s forwards"
  setTimeout(() => {
    content.style.animation=""
  }, 701);
}


function showQuiz(contentTobeDisplayed) {
  
  ResetScore()
  CheckCorrectness()
  quiz_button_start.innerHTML="Submit answer"
  ResetLayout()
  const checkSelected = CheckIfanyRadioSelected()
  if (checkSelected===true) {
    specialCounter+=1
    if (counter!=14) {
      counter +=1
    }
    console.log(score);
    AddResetAnimationQuiz(quiz_answers_container)
    const questionsQuiz = listOFAvailableQuestions
    let generateRandomNumberQuiz = Math.floor(Math.random() * questionsQuiz.length);
    const randomQuestion = questionsQuiz[generateRandomNumberQuiz]

    displayScore()
    contentTobeDisplayed.style.display="block"
    counterQuiz.innerHTML=counter+"."
    quizQuestion.innerHTML=randomQuestion.question
    optionLabelA.innerHTML=randomQuestion.choices[0]
    optionLabelB.innerHTML=randomQuestion.choices[1]
    optionLabelC.innerHTML=randomQuestion.choices[2]
    optionLabelD.innerHTML=randomQuestion.choices[3]
    ResetQuiz()


    listOFAvailableQuestions.splice(generateRandomNumberQuiz, 1)

    return generatedQuestion
  }

}




startQuizButton.addEventListener("click", startTheQuiz.bind(null,quizLayout))

quiz_button_start.addEventListener("click", showQuiz.bind(null,quizLayout))
quiz_button_start.addEventListener("click", TryAgain)