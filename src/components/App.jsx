import {Feedback} from "components/Feedback/Feedback"
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  return (
    <>
      <Feedback 
      feedbackTitle = "Leave feedback"
      statisticTitle = "Statistic"
      feedbackOptions = {["Good", "Neutral", "Bad"]}
      percentageOptions ={["Good", "Bad"]}/>

      <Phonebook/>
    </>
    
  );
};
