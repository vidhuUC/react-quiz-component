const segment = {
  basic: 'basic',
  medium: 'medium',
  advanced: 'advanced',
};

const description = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim`;

const quiz = {
  quizTitle: 'React Quiz Component Demo',
  quizSynopsis: description,
  nrOfQuestions: '6',
  questions: [
    {
      question: 'How can you access the state of a component from inside of a member function?',
      questionPic: 'https://dummyimage.com/600x400/000/fff&text=X',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'this.getState()',
        'this.prototype.stateValue',
        'this.state',
        'this.values',
      ],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '20',
      segment: segment.advanced,
    },
    {
      question: 'ReactJS is developed by _____?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Google Engineers',
        'Facebook Engineers',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '20',
      segment: segment.basic,
    },
    {
      question: 'ReactJS is an MVC based framework?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'True',
        'False',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '10',
    },
    {
      question: 'Which of the following concepts is/are key to ReactJS?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        'Component-oriented design',
        'Event delegation model',
        'Both of the above',
      ],
      correctAnswer: '3',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '30',
      segment: segment.medium,
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      questionType: 'photo',
      answerSelectionType: 'single',
      answers: [
        'https://dummyimage.com/600x400/000/fff&text=A',
        'https://dummyimage.com/600x400/000/fff&text=B',
        'https://dummyimage.com/600x400/000/fff&text=C',
        'https://dummyimage.com/600x400/000/fff&text=D',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '20',
    },
    {
      question: 'What are the advantages of React JS?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: [
        'React can be used on client and as well as server side too',
        'Using React increases readability and makes maintainability easier. Component',
        'Data patterns improves readability and thus makes it easier for manitaining larger apps',
        'React components have lifecycle events that fall into State/Property Updates',
        'React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer',
      ],
      correctAnswer: [1, 2, 4],
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: description,
      point: '20',
    },
  ],
};

export default quiz;
