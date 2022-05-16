document.addEventListener('DOMcontentloaded', function() {
    let buttons = document.getElementsByTagName('buttons');

    for = (let button of buttons) {
        button.addEventListener('click', function() {
        if (this.getAttribute("data-type") === 'submit') {
            alert ('You clicked submit!');
        } else {
            let gameType = this.getAttribute('data-type') {
                alert ('You clicked ${game-type}');
            }
        }
        })
    }
})

function runGame()

function checkAnswer()

function calculateCorrectAnswer()

function incrementScore()

function incrementWrongAnswer()

function displayAdditionQuestion()

function displaySubtractionQuestion()

function displayMultiplyQuestion()