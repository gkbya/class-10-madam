document.addEventListener('DOMContentLoaded', () => {
  const allQuestions = document.querySelectorAll('.question');

  allQuestions.forEach(question => {
    const options = question.querySelectorAll('li');

    options.forEach(option => {
      option.addEventListener('click', () => {
        // If already answered, ignore clicks
        if (question.classList.contains('answered')) return;

        const isCorrect = option.getAttribute('data-correct') === 'true';

        // Mark question as answered to prevent multiple tries
        question.classList.add('answered');

        // Color selected option
        if (isCorrect) {
          option.classList.add('correct');
        } else {
          option.classList.add('incorrect');
          // Also highlight correct option
          options.forEach(li => {
            if (li.getAttribute('data-correct') === 'true') {
              li.classList.add('correct');
            }
          });
        }
      });
    });
  });
});
