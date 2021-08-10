class View {
  constructor(game, el) {
      this.game = game,
      this.el = el,
      this.setupBoard(),
      this.handleClick = this.handleClick.bind(this),
      this.bindEvents()
  }

  setupBoard() {   
      const grid = document.createElement('ul');
      for (let i=0;i<3;i++){
        for(let j=0; j<3;j++){
          const block = document.createElement('li');
          block.dataset.pos = JSON.stringify([i,j]);
          grid.append(block);
        }
      }
      this.el.append(grid);
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick)
  }

  handleClick(e) {
    const tar = e.target;
    "LI" === tar.nodeName && this.makeMove(tar)
  }

  makeMove(square) {
    const ele = JSON.parse(square.dataset.pos);
    const player = this.game.currentPlayer;
    try {
        this.game.playMove(ele)
    } catch (square) {
        alert("This " + square.msg.toLowerCase())
    }
    square.classList.add(player);
    
    if (this.game.isOver()){
      this.el.removeEventListener("click", this.handleClick);
      const winner = this.game.winner();
      this.el.classList.add("game-over");
      const caption = document.createElement("figcaption");
      caption.append(`You win, ${winner}`);
      this.el.append(caption);
    }
  }
}
module.exports = View;
