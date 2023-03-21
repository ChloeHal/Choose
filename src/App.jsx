import React, { useState, useEffect } from 'react';
import Question from './Components/Question';
import Result from './Components/Result';
import axios from 'axios';

const questions = {
  fiction: [
    'Want to change universes?',
    'Do you enjoy stories that transport you to another world?',
    'Are you interested in stories that introduce you to new characters and cultures?',
    'Do you appreciate stories that make you experience moments of joy, sadness, anger, fear, and other intense emotions?',
    'Are you willing to explore stories that make you experience moments of suspense and mystery?',
    'Do you like stories that address themes such as love, family, culture, etc.?',
    'Are you interested in stories that take place over a long period of time and follow the characters through different stages of their lives?',
    'Do you like stories that mix elements of fantasy or science fiction with more realistic themes?',
    'Are you drawn to stories that feature complex and nuanced characters?',
    'Do you appreciate stories that make you reflect on important questions in life?',
    'Are you willing to explore stories that take you to imaginary worlds and fascinating universes?',
    'Do you like stories that make you question your own beliefs and convictions?',
    'Are you interested in stories that feature characters who must overcome difficult obstacles and face complex moral choices?',
    'Do you appreciate stories that keep you on the edge of your seat until the end?',
    'Do you like stories that address themes such as justice, freedom, truth, etc.?',
    'Are you willing to explore stories that make you live epic and unforgettable adventures?',
  ],
  nonFiction: [
    'Do you want to immerse yourself in a detailed and complex story?',
    'Are you interested in rich and complex characters who evolve throughout the story?',
    'Do you appreciate stories that address themes such as love, family, culture, etc.?',
    'Do you like stories that take place over a long period of time and follow the characters through different stages of their lives?',
    'Are you willing to explore stories that explore the different layers of society and the complex problems of life?',
    'Do you like stories that take place in exotic places and allow you to discover new cultures and perspectives?',
    'Are you interested in stories that address deep subjects such as politics, history, religion, etc.?',
    'Do you appreciate stories that feature characters who are faced with difficult choices and must face complex consequences?',
    'Do you like stories that take place in imaginative and fantastic worlds?',
    'Are you willing to explore stories that focus on human relationships and deep emotions?',
    'Do you like stories that address themes such as justice, ethics, morality, etc.?',
    'Are you interested in stories that explore the challenges of life and existential questions?',
    'Do you appreciate stories that feature characters who struggle to achieve their dreams and destiny?',
    'Do you like stories that take place in real worlds but are filled with mystery and suspense?',
    'Are you willing to explore stories that delve deep into the psychology of characters and the motivations that drive them to act?',
  ],
  youngAdult: [
    'Do you want to read stories that transport you to a world of fantasy and imagination?',
    'Do you like stories that introduce you to new universes and cultures?',
    'Are you interested in stories that address themes such as friendship, adventure, discovery, etc.?',
    'Do you appreciate stories that feature young and brave characters who learn and grow throughout the story?',
    "Are you willing to explore children's stories that make you experience moments of suspense, mystery, and discovery?",
    'Do you like stories that address themes such as family, school, animals, etc.?',
    'Are you interested in stories that immerse you in a world where young and old, different and similar characters coexist?',
    'Do you appreciate stories that feature characters in search of knowledge, happiness, and truth?',
    "Are you willing to explore children's stories that introduce you to worlds populated by fantastic creatures and friendly characters?",
    'Do you like stories that address themes such as love, trust, sharing, etc.?',
    'Are you interested in stories that immerse you in a world where characters are faced with simple but meaningful problems?',
    'Do you appreciate stories that feature characters who learn to overcome their fears, overcome obstacles, and find their place in the world?',
    "Are you willing to explore children's stories that introduce you to magical and surprising worlds?",
    'Do you like stories that address themes such as tolerance, solidarity, mutual aid, etc.?',
    'Are you interested in stories that immerse you in a world where characters are faced with fun and enriching challenges?',
  ],
  fantasy: [
    'Do you want to read stories that immerse you in an imaginary world filled with fantastic creatures?',
    'Do you like stories that introduce you to new universes and cultures?',
    'Are you interested in stories that address themes such as magic, mythical creatures, epic quests, etc.?',
    'Do you appreciate stories that feature characters with extraordinary powers and great courage?',
    'Are you willing to explore fantasy stories that make you experience moments of suspense, mystery, and discovery?',
    'Do you like stories that address themes such as loyalty, friendship, family, etc.?',
    'Are you interested in stories that immerse you in a world where different kingdoms, peoples, and cultures coexist?',
    'Do you appreciate stories that feature characters in search of knowledge, power, and truth?',
    'Are you willing to explore fantasy stories that introduce you to fantastic creatures and magical worlds?',
    'Do you like stories that address themes such as war, peace, justice, etc.?',
    'Are you interested in stories that immerse you in a world where characters are faced with difficult choices and must face complex challenges?',
    'Do you appreciate stories that feature characters who must learn to master their power and defend what is right?',
    'Are you willing to explore fantasy stories that introduce you to worlds populated by fantastic creatures and brave characters?',
    'Do you like stories that address themes such as love, hate, jealousy, etc.?',
    'Are you interested in stories that immerse you in a world where characters must face moral and ethical choices?',
  ],
  scienceFiction: [
    'Want to travel to a futuristic world?',
    'Want to explore imaginary universes?',
    'Are you open to discovering futuristic ideas?',
    'Do you want to discover advanced technologies?',
    'Are you interested in themes of adventure, discovery, and reflection on society and humanity?',
    'Do you like stories that play with the possibilities of the future?',
    'Are you comfortable with complex scientific concepts?',
    'Are you attracted to epic science fiction universes, with determined characters and important stakes?',
    'Do you like stories that question the nature of reality and consciousness?',
    'Are you interested in reflections on the ethical consequences of technology?',
    'Are you willing to immerse yourself in imaginative worlds different from our current reality?',
    'Do you like stories that combine suspense, action, and intrigue with science fiction themes?',
    'Do you appreciate stories that address current societal issues from a futuristic perspective?',
    'Do you like stories that blend mystery and suspense with elements of science fiction?',
    'Are you attracted to dystopian science fiction universes, which explore the negative consequences of technology on society?',
    'Are you comfortable with provocative futuristic ideas that challenge our current beliefs?',
    'Do you appreciate stories that combine comedy and science fiction for a light and entertaining read?',
  ],
  mysteryThriller: [
    'Do you want to experience an intense and captivating story?',
    'Do you like stories that mix mystery, suspense, and intrigue?',
    'Are you interested in complex characters and troubled relationships?',
    'Do you like stories that challenge your ability to guess the ending?',
    'Do you appreciate stories that keep you on the edge of your seat until the last page?',
    'Are you attracted to police investigations and criminal stories?',
    'Do you like stories that take you to the darkest corners of the city?',
    'Are you willing to explore the dark motivations and primitive instincts of humanity?',
    'Do you appreciate stories that address controversial themes such as justice, guilt, and morality?',
    'Do you like stories that make you reflect on the consequences of our actions?',
    'Are you interested in psychological portraits of criminals and investigators?',
    'Do you like stories that feature the challenges investigators face in solving a case?',
    'Are you comfortable with dark themes such as violence, death, and fear?',
    'Do you appreciate stories that force you to question your own judgment?',
    'Do you like stories that delve into the depths of the criminal mind to understand underlying motivations?',
  ],
  horror: [
    'Do you want to read scary and gruesome stories?',
    'Do you like stories that make you experience moments of intense and unforgettable fear?',
    'Are you interested in stories that make you shiver and give you goosebumps?',
    'Do you appreciate stories that immerse you in dark and unsettling universes?',
    'Are you willing to explore horror stories that make you experience moments of suspense and mystery?',
    'Do you like stories that make you experience moments of tension and unease?',
    'Are you interested in stories that address themes such as death, possession, demons, etc.?',
    'Do you appreciate stories that introduce you to different worlds and cultures?',
    'Are you willing to explore horror stories that feature characters fighting for their survival?',
    'Do you like stories that make you experience moments of terror, anger, sadness, fear, and other intense emotions?',
    'Are you interested in stories that address themes such as anxiety, paranoia, madness, etc.?',
    'Do you appreciate stories that immerse you in universes populated by scary and monstrous creatures?',
    'Are you willing to explore horror stories that feature the strengths and weaknesses of the main characters?',
    'Do you like stories that make you experience moments of suspense and mystery, all in the context of a scary universe?',
    'Are you interested in stories that show how characters face their deepest fears and survive terrifying situations?',
  ],
  romance: [
    'Do you want to read stories of love and passion?',
    'Do you like stories that make you experience intense and unforgettable romantic moments?',
    'Are you interested in stories that make you feel strong emotions and give you a glimpse into romantic relationships?',
    'Do you appreciate stories that immerse you in universes populated by endearing and complex characters?',
    'Are you willing to explore love stories that make you experience moments of joy, sadness, anger, fear, and other intense emotions?',
    'Do you like stories that make you experience moments of tenderness, passion, and romance?',
    'Are you interested in stories that address themes such as forbidden love, difficult choices between two loves, etc.?',
    'Do you appreciate stories that introduce you to different universes and cultures?',
    'Are you willing to explore love stories that address deep subjects such as life, death, and love?',
    'Do you like stories that address themes such as loyalty, friendship, family, etc.?',
    'Are you interested in stories that immerse you in a world where characters are faced with complex romantic relationships?',
    'Do you appreciate stories that feature characters who must learn to overcome obstacles and find true love?',
    'Are you willing to explore love stories that introduce you to worlds filled with romance and passion?',
    'Do you like stories that address themes such as love, hate, jealousy, etc.?',
    'Are you interested in stories that immerse you in a world where characters must face moral and ethical choices?',
  ],
  poetry: [
    'Are you in the mood to read texts that play with words and images?',
    'Do you like poems that take you to another world or give you a new perspective on life?',
    'Are you interested in poems that play with emotions and feelings?',
    'Do you appreciate poems that use metaphors, alliterations, and other techniques to convey profound ideas?',
    'Are you willing to explore poems that address subjects such as love, death, nature, and society?',
    'Do you like poems that invite you to reflect on life and the big questions of existence?',
    'Are you interested in poems that are works of art in themselves, with unique music and rhythm?',
    'Do you appreciate poems that offer a quirky view of life and the universe?',
    'Are you willing to explore poets such as Rumi, Emily Dickinson, Pablo Neruda, etc.?',
    'Do you like poems that transport you to an imaginary world populated by fascinating characters and stories?',
    'Are you willing to discover poems that were written in different eras, with varied styles and themes?',
    'Do you like poems that play with words and images to create surprising effects?',
    'Are you interested in poems that use metaphors and other techniques to explore emotions and feelings?',
    'Do you appreciate poems that offer deep reflection on the big themes of life?',
    'Are you willing to explore poems that use poetic and figurative language to convey ideas and emotions?',
  ],
  classics: [
    'Are you in the mood to read significant literary works?',
    'Do you enjoy discovering timeless stories that have endured through the ages?',
    'Are you interested in complex psychological portraits of characters?',
    'Do you appreciate stories that explore universal themes such as love, death, morality, and society?',
    'Are you willing to immerse yourself in narratives with rich and detailed descriptions?',
    'Do you enjoy stories that take you into imaginary or historical worlds?',
    'Are you interested in literary works that have influenced modern culture and thought?',
    "Do you appreciate stories that invite you to reflect on life's big questions?",
    'Are you willing to explore the writings of great authors such as Jane Austen, William Shakespeare, Charles Dickens, etc.?',
    'Do you like stories that offer a profound and enriching vision of the world around us?',
    'Are you in the mood to discover different literary styles and new writing techniques?',
    'Do you like stories that showcase strong and complex characters?',
    'Are you interested in literary works that have made their mark on the history of literature?',
    'Do you appreciate stories that offer reflection on the great themes of existence?',
    'Are you willing to explore fictional universes populated by colorful characters and fantastic creatures?',
  ],
};

function QuestBook() {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  function getRandomQuestion() {
    const styles = Object.keys(questions);
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const randomQuestion =
      questions[randomStyle][
        Math.floor(Math.random() * questions[randomStyle].length)
      ];
    setCurrentQuestion(randomQuestion);
  }

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    if (answers.length === 4) {
      setAnswers([...answers, answer]);
      setCurrentQuestion(null);
    } else {
      getRandomQuestion();
    }
  }

  function restartQuiz() {
    setAnswers([]);
    getRandomQuestion();
  }

  useEffect(() => {
    getRandomQuestion();
  }, []);

  return (
    <div>
      {currentQuestion ? (
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      ) : (
        <Result answers={answers} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default QuestBook;
