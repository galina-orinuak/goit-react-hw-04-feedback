import { useState } from 'react'
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { NotificationMesage } from './Notification/Notification.jsx';

export const App=()=>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const leaveFeedback = option => {
switch (option) {
  case 'good':
    setGood(prev => prev + 1);
    break;
  case 'neutral':
      setNeutral(prev => prev + 1);
      break;  
  case 'bad':
      setBad(prev => prev + 1);
      break;
      default:
        return;
}
  };

  
  const countTotalFeedback =() => {
      return good + neutral + bad};
    
  const countPositiveFeedbackPercentage =() => {
    const total= countTotalFeedback();
    return Math.round((good / total) * 100)}

  {

  const options = ['good', 'neutral', 'bad'] ;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
        />

        <Section title="Statistics" />
        {good > 1 || neutral > 1 || bad > 1 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <NotificationMesage message="There is no feedback" />
        )}
      </div>
    );
  }
}
