import { gameBoard } from "./gameboard.js";
import { uiController } from "./ui-move.js";

// Game Controller Module
const appController = (function () {
gameBoard();
uiController();
})();