const feedbackyContainer = document.createElement('div');
feedbackyContainer.id = 'root';

document.body.appendChild(feedbackyContainer);

const feedbackyScript = document.createElement('script');
feedbackyScript.src = 'https://feedbacky-fe-eminfurkan.vercel.app/assets/index-2af8f350.js';
feedbackyScript.async = true;
feedbackyScript.crossOrigin = 'anonymous';
feedbackyScript.type = 'module';

const feedbackyStylesheet = document.createElement('link');
feedbackyStylesheet.rel = 'stylesheet';
feedbackyStylesheet.href = 'https://feedbacky-fe-eminfurkan.vercel.app/assets/index-317bc049.css';

document.head.appendChild(feedbackyStylesheet);

document.body.appendChild(feedbackyScript);
