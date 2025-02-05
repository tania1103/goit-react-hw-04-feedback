import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = value => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [value]: prevFeedback[value] + 1,
    }));
    document.activeElement.blur();
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.ceil((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
};
