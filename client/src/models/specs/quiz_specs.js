var Quiz = require('../quiz.js')
var assert = require('assert')

describe("Quiz", function(){

  var quiz
  var emptyQuiz

  beforeEach(function(){

    emptyQuiz = new Quiz("url")
    quiz = new Quiz("url")
    quiz.questions = [
      {
        question: "question1",
        answers: [
          {text: "correct1", correct: true},
          {text: "wrong1-1", correct: false},
          {text: "wrong1-2", correct: false},
          {text: "wrong1-3", correct: false}
        ]
      },
      {
      question: "question2",
      answers: [
        {text: "correct2", correct: true},
        {text: "wrong2-1", correct: false},
        {text: "wrong2-2", correct: false},
        {text: "wrong2-3", correct: false}
        ]
      },
      {
      question: "question3",
      answers: [
        {text: "correct3", correct: true},
        {text: "wrong3-1", correct: false},
        {text: "wrong3-2", correct: false},
        {text: "wrong3-3", correct: false}
      ]
    },
    {
      question: "question4",
      answers: [
        {text: "correct4", correct: true},
        {text: "wrong4-1", correct: false},
        {text: "wrong4-2", correct: false},
        {text: "wrong4-3", correct: false}
      ]
    },
    {
      question: "question5",
      answers: [
        {text: "correct5", correct: true},
        {text: "wrong5-1", correct: false},
        {text: "wrong5-2", correct: false},
        {text: "wrong5-3", correct: false}
      ]
    },
    {
      question: "question6",
      answers: [
        {text: "correct6", correct: true},
        {text: "wrong6-1", correct: false},
        {text: "wrong6-2", correct: false},
        {text: "wrong6-3", correct: false}
      ]
    },

    ]
  })

  it("has a url", function(){
    assert.strictEqual("url", quiz.url);
  })

})