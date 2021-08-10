class View {
  constructor(game, el) {
      this.game = game;
      this.el = el;
  }

  setupBoard() {   
      const grid = document.createElement('ul');
      for (let i = 0;i<3;i++){
        for(let j=0; j<3;j++){
          const block = document.createElement('li');
          block.dataset.pos = JSON.stringify([i,j]);
          grid.append(block);
        }
      }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
