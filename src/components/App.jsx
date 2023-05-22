import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const updateStatistic = option => {
  if (option === 'good') setGood(prevState => prevState + 1);
  if (option === 'neutral') setNeutral(prevState => prevState + 1);
  if (option === 'bad') setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    
    return good + neutral + bad;
  };

const countPositiveFeedbackPercentage = () => {
  const totalFeedback = countTotalFeedback();
  return good ? Math.round((good / totalFeedback) * 100) : 0;
  };
  


  const options = Object.keys({good, neutral, bad});
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#010101',
    }}>
      <Section title="Please leave feedback for Cafe Expresso" shadow='true'>
        <FeedbackOptions options={options} updateStatistic={updateStatistic} />
      <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              options={options}
              value= {{ good, neutral, bad }}
                totalFeedback={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
          )}
        </Section>
      </Section>
  </div>
  )
};

       