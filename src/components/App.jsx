import { Container } from "../components/Container";
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { useState } from 'react';

function App() {
const [good,setGood] =useState(0)
const[neutral, setNeutral] =useState(0)
  const [bad, setBad] = useState(0)
  

  const onLeaveFeedback = value => {
    switch (value) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error();
  }
  }
  
  function  countTotalFeedback (){
    return good + neutral + bad; 
  }

  function  countPositiveFeedbackPercentage (){
    return  countTotalFeedback() ? Math.round((good * 100) / countTotalFeedback())
    : 0;
}

  return (
    <div>
    <Container>
        <Section title='Please leave feedback'>
            <FeedbackOptions
           options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </Container>
  </div>
  )
}

export default App;