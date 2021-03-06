'use strict';

class Brick {
	constructor(game) {
		this.game = game;
	}

	preload() {
		this.game.load.spritesheet('brick', '/brick.png', {
			frameWidth: 120,
			frameHeight: 60,
		});
	}

	create() {
		this.object = this.game.physics.add.group();
		this.object.enableBody = true;

		let brickSize = 70;
		let numRows = 3;
		let numCols = 6;
		let brickSpacing = 10;

		let leftSpace =
			(800 - numCols * brickSize - numCols * brickSpacing) / 1.5;

		let topSpace =
			(600 - numRows * brickSize - (numRows - 1) * brickSpacing) / 3;

		for (let i = 0; i < numCols; i++) {
			for (let j = 0; j < numRows; j++) {
				this.object
					.create(
						leftSpace + i * (brickSize + brickSpacing),
						topSpace + j * (brickSize + brickSpacing),
						'brick'
					)
					.setOrigin(0.5)
					.setScale(0.5);
			}
		}

		this.game.physics.add.collider(
			this.game.ball.object,
			this.game.brick.object,
			this.game.ballHitBrick,
			null,
			this.game
		);
	}
}

export default Brick;
