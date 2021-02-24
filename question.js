class Question{
    constructor() {
    this.title = createElement('h2')
    this.greeting = createElement('h3')
    this.input = createInput("name")
    this.button = createButton("answer")  
    }
    hide(){
      this.title.hide()
      this.greeting.hide()
      this.input.hide()
      this.button.hide()
    }
    display(){
        this.title.html("My Quiz Game")
        this.title.position("350,0")
        this.question.html("Question:-what starts and ends with a letter E , but only has one letter")
        this.question.position(150,80)
        this.option1.html("1:everyone")
        this.option1.position(150,100)
        this.option2.html("2:envolope")
        this.option2.position(150,120)

        this.input1.position(150,230)
    }
}
