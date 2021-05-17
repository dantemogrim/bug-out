import Phaser from 'phaser';
import GameScene from './GameScene';
import PreloadScene from './PreloadScene';
import GameOverScene from './GameOverScene';
import ControlsScene from './ControlsScene';
import LeaderboardScene from './LeaderboardScene';

const config = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: 'game',
	backgroundColor: '#fff',
	scene: [
		PreloadScene,
		ControlsScene,
		LeaderboardScene,
		GameScene,
		GameOverScene,
	],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: false,
			debug: false,
		},
	},
	audio: {
		disableWebAudio: true,
	},
};

export default config;
