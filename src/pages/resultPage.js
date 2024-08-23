import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { createResultElement } from '../views/resultView.js';
import { initWelcomePage } from './welcomePage.js';

export const initResultPage = (score) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement(score);
  userInterface.appendChild(resultElement);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
  initWelcomePage();
};
