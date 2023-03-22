export const listQuestions = [
  {
    id: '1',
    questionText: "What's your name?",
    descriptionText: 'Please answer the question by typing in the box below!',
    skipable: false,
    answers: [],
  },
  {
    id: '2',
    questionText: 'How many people are there in your family?',
    descriptionText: 'Please choose the correct answer',
    skipable: true,
    answers: [
      {label: 'One', value: 1},
      {label: 'Two', value: 2},
      {label: 'Three', value: 3},
      {label: 'Four', value: 4},
    ],
  },
];
