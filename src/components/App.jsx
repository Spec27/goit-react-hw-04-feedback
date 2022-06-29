import React, { Component } from 'react';
import { Container } from "../components/Container";
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';


class App extends Component {
  state = {
      good: 0,
      neutral:0,
      bad:0,
  };
  
  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
    
  countTotalFeedback = () => {
    const { good , neutral , bad }=this.state
    return good + neutral + bad; 
  }

    countPositiveFeedbackPercentage = () => {
      return  this.countTotalFeedback() ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  }
     
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
      return (<div>
    <Container>
        <Section title='Please leave feedback'>
              <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </Container>
  </div>);
    
  }
}
export default App;