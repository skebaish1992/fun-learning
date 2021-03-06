var GameState2 = GameState2 || {};
GameState2.GameOver = function(game) {};

GameState2.GameOver.prototype = {
  init: function(gameResults) {
    this.data = gameResults;
  },
  create: function() {

    this.user = this.getUsername();

    // creates a new option from the options entity
    this.option1 = new Option(this.game, 50, 50, 'option1');
    this.option1.value = 1;

    this.option2 = new Option(this.game, 150, 50, 'option2');
    this.option2.value = 2;

    this.option3 = new Option(this.game, 250, 50, 'option3');
    this.option3.value = 3;

    this.option4 = new Option(this.game, 350, 50, 'option4');
    this.option4.value = 4;

    this.option5 = new Option(this.game, 450, 50, 'option5');
    this.option5.value = 5;

    // adds the equivalent of event listeners to each of the options
    this.option1.inputEnabled = true;
    this.option2.inputEnabled = true;
    this.option3.inputEnabled = true;
    this.option4.inputEnabled = true;
    this.option5.inputEnabled = true;

    this.option1.events.onInputDown.add(this.sendData, this);
    this.option2.events.onInputDown.add(this.sendData, this);
    this.option3.events.onInputDown.add(this.sendData, this);
    this.option4.events.onInputDown.add(this.sendData, this);
    this.option5.events.onInputDown.add(this.sendData, this);
  },
  sendData: function(option) {
    this.data.feeling = option.value;
    this.addResult('game2', this.user, this.data);
    this.game.state.start('MainMenu');
  },
  setPicked: function() {
    this.picked = this.game.option._text
  }
};
