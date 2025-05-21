document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    const options = question.querySelectorAll('li');

    options.forEach(option => {
      option.addEventListener('click', () => {
        // Prevent multiple answers
        if (question.classList.contains('answered')) return;

        question.classList.add('answered');

        const isCorrect = option.getAttribute('data-correct') === 'true';

        if (isCorrect) {
          option.classList.add('correct');
        } else {
          option.classList.add('incorrect');
          // Show correct option(s)
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
