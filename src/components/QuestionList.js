import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({ questions, updateQuestion, deleteQuestion }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => <QuestionItem key={question.id} question={question} updateQuestion={updateQuestion} deleteQuestion={deleteQuestion} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
