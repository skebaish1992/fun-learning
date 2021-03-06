var GameState2 = GameState2 || {};
GameState2.Level1 = function(game) {};

GameState2.Level1.prototype = {
  create: function () {
    // set the array for the test
    this.testArray = [[1, 2], [1, 3], [3, 4]];
    this.choices = [['1/2', '3/4', '1/3'], ['5/8', '3/4', '1/3'], ['4/7', '3/4', '2/3']];
    this.x = 50;
    this.y = 90;
    this.graphics = this.game.add.graphics(this.game.world.centerX, this.game.world.centerY);

    this.renderPie = function() {
      // remove old choices from display
      if (this.game.choice1) {
        this.game.choice1.destroy();
        this.game.choice2.destroy();
        this.game.choice3.destroy();
      }
      // add choices to game
      this.game.choice1 = this.game.add.text(150, 30, this.choices[0][0], {font: '20px Arial'});
      this.game.choice2 = this.game.add.text(190, 30, this.choices[0][1], {font: '20px Arial'});
      this.game.choice3 = this.game.add.text(230, 30, this.choices[0][2], {font: '20px Arial'});
      this.choices.shift();
      // add click events to choices
      this.game.choice1.inputEnabled = true;
      this.game.choice1.events.onInputDown.add(this.picked1, this);
      this.game.choice2.inputEnabled = true;
      this.game.choice2.events.onInputDown.add(this.picked2, this);
      this.game.choice3.inputEnabled = true;
      this.game.choice3.events.onInputDown.add(this.picked3, this);
      // calculate the percentage of the circle needing to be displayed
      this.percentage = this.testArray[0][0] / this.testArray[0][1];
      this.rad1 = 0;
      this.rad2 = Math.round(360 * this.percentage) + 6.5;
      this.testArray.shift();

      // clear old pie and then draw the new one
      this.graphics.clear();
      this.graphics.beginFill(0x873655);
      this.graphics.arc(0, 0, 90, this.game.math.degToRad(this.rad2), this.game.math.degToRad(this.rad1), true);
      this.graphics.endFill();
    };
    this.game.add.text(10, 30, 'Choose one: ', {font: '20px Arial'});

    this.game.time.events.repeat(Phaser.Timer.SECOND * 3, this.testArray.length - 1, this.renderPie, this);
    this.renderPie();
  },
  picked1: function() {
    console.log(this.game.choice1);
    alert('you chose: ' + this.game.choice1._text);
  },
  picked2: function() {
    console.log(game.choice2);
    alert('you chose: ' + game.choice2);
  },
  picked3: function() {
    console.log(game.choice3);
    alert('you chose: ' + game.choice3);
  },
  render: function () {
  }

}