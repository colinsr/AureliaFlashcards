export class WebAPI {
  getNoteboxes = function(){
    return [
      {
        name: 'Numbered Questions',
        cards: [
          {answer: "Answer1.", question: "Question1?"},
          {answer: "Answer2.", question: "Question2?"},
          {answer: "Answer3.", question: "Question3?"},
          {answer: "Answer4.", question: "Question4?"}
        ]
      },
      {
        name: 'Spelling Words',
        cards: [
          { answer: "C A T", question: "The ___ 'sail'-ed off the balcony?" },
          { answer: "D O G", question: "The ___ shat on the floor?" },
          { answer: "Hippopotamus", question: "_________ attack more humans than crocodiles and sharks." },
          { answer: "Clear-Measure", question: "_____-______ is always hiring." }
        ]
      },
      {
        name: 'States',
        cards: [
          {answer: "Ohio.", question: "Columbus?"},
          {answer: "Indiana.", question: "Indianapolis?"},
          {answer: "Michigan.", question: "Lansing?"},
          {answer: "Kentucky.", question: "Lexington?"}
        ]
      },
      {
        name: 'Vocabulary Words',
        cards: [
          {answer: "General Motors", question: "This car maker is the crappiest in detroit"},
          {answer: "Abhor", question: "Another word for hate or extreme dislike"},
          {answer: "Congestion", question: "When you have a ton of boogers"},
          {answer: "Chaffing", question: "This happens when you wipe too much"}
        ]
      }
    ];
  };
}