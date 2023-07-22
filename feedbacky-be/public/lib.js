const feedbackyContainer = document.createElement('div');
feedbackyContainer.id = 'root';

document.body.appendChild(feedbackyContainer);

const feedbackyScript = document.createElement('script');
feedbackyScript.src = 'http://localhost:3000/assets/index-ee40d518.js';
feedbackyScript.async = true;
feedbackyScript.crossOrigin = 'anonymous';
feedbackyScript.type = 'module';

const feedbackyStylesheet = document.createElement('link');
feedbackyStylesheet.rel = 'stylesheet';
feedbackyStylesheet.href = 'http://localhost:3000/assets/index-317bc049.css';

document.head.appendChild(feedbackyStylesheet);

document.body.appendChild(feedbackyScript);
