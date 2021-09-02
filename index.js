const chalk = require('chalk')
const readlineSync = require('readline-sync')
console.log(`
██╗   ██╗ ██████╗ ██╗   ██╗    ██╗  ██╗███╗   ██╗██╗    ██╗ ██████╗     ███╗   ███╗███████╗██████╗ 
╚██╗ ██╔╝██╔═══██╗██║   ██║    ██║ ██╔╝████╗  ██║██║    ██║██╔═══██╗    ████╗ ████║██╔════╝╚════██╗
 ╚████╔╝ ██║   ██║██║   ██║    █████╔╝ ██╔██╗ ██║██║ █╗ ██║██║   ██║    ██╔████╔██║█████╗    ▄███╔╝
  ╚██╔╝  ██║   ██║██║   ██║    ██╔═██╗ ██║╚██╗██║██║███╗██║██║   ██║    ██║╚██╔╝██║██╔══╝    ▀▀══╝ 
   ██║   ╚██████╔╝╚██████╔╝    ██║  ██╗██║ ╚████║╚███╔███╔╝╚██████╔╝    ██║ ╚═╝ ██║███████╗  ██╗   
   ╚═╝    ╚═════╝  ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚══╝╚══╝  ╚═════╝     ╚═╝     ╚═╝╚══════╝  ╚═╝   
                                                                                                   
`)
const username = readlineSync.question(chalk.blue('What should we call you? '))
let score = 0
// Greeting
console.log(
  chalk.yellow(`Hey ${username}\nHope your're having a great day\nLet's play this quiz and see how well do you know me 😸
`)
)

// Answers and questions template
const correctAnswers = () => {
  score += 5
  console.log(
    chalk.green(`You're absolutely right 😄\nYour current score is: ${score}`)
  )
}

const wrongAnswer = () =>
  console.log(chalk.red(`Wrong answer 😢\nYour current score is ${score}`))

const nextQuestion = () =>
  console.log(chalk.yellow('lets proceed with next Question!!!'))

// Questions started
let name = readlineSync.question(chalk.blue('1. What is my name?  '))

const nameAnswers = ['Prathamesh', 'prathamesh', 'pratham']
nameAnswers.includes(name) ? correctAnswers() : wrongAnswer()
nextQuestion()

let lang = readlineSync.question(
  chalk.blue('2. What is My Fav Programming Language??  ')
)

const langAnswers = ['JavaScript', 'JS', 'js']
langAnswers.includes(lang) ? correctAnswers() : wrongAnswer()
nextQuestion()

let father = readlineSync.question(chalk.blue('3. Who is lukes father ?  '))
const starWarsAnswers = [
  'Darth Vader',
  'Anakin Skywalker',
  'darth vader',
  'anakin',
]

starWarsAnswers.includes(father) ? correctAnswers() : wrongAnswer()
nextQuestion()

let favOs = readlineSync.question(
  chalk.blue('4. Which os is my favorite ?\n1.Window \n2.MacOS \n3.Linux  ')
)
const osAnswers = ['linux', 'Linux']

osAnswers.includes(favOs) ? correctAnswers() : wrongAnswer()
nextQuestion()

let jsFramework = readlineSync.question(
  chalk.blue(
    '5. Which is my favorite JS framework ?\n1. React\n2. Angular\n3. Svelte\n4. Vue  '
  )
)
const jsFrameworks = ['React', 'react', 'reactjs']

jsFrameworks.includes(jsFramework) ? correctAnswers() : wrongAnswer()

if (score == 25) {
  console.log(
    chalk.bgGreen.black(
      'Congrats 🎉 you hit the high score \nLooks like you know me very well 😆'
    )
  )
} else {
  console.log(chalk.bgBlue.black('Thanks for playing the quiz 😃 '))
}
