import { Component } from 'react';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import {Section} from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState({ [value]: this.state[value] + 1 });
    document.activeElement.blur();
  };

  countTotalFeedback() {
    const stateValuesArr = Object.values(this.state);
    const total = stateValuesArr.reduce((total, value) => {
      return total + value;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.ceil((this.state.good / total) * 100);
    return positivePercentage;
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const option = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
