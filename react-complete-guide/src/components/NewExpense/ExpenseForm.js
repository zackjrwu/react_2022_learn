import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpensesForm = () => {
  //  const [title, setTitle] = useState("");
  //  const [amount, setAmount] = useState("");
  //  const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputChangeHandler = (e) => {
    const type = e.target.name;
    // setUserInput({
    //   ...userInput,
    //   type: e.target.value,
    // });
    if (type === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: e.target.value };
      });
    } else if (type === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: e.target.value };
      });
    } else if (type === "date") {
      setUserInput((prevState) => {
        return { ...prevState, date: e.target.value };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  //   const titleChangeHandler = (e) => {
  //     console.log(e.target.name);
  //     setUserInput({
  //       ...userInput,
  //       title: e.target.value,
  //     });
  //   };

  //   const amountChangeHandler = (e) => {
  //     setUserInput({
  //       ...userInput,
  //       amount: e.target.value,
  //     });
  //   };

  //   const dateChangeHandler = (e) => {
  //     setUserInput({
  //       ...userInput,
  //       date: e.target.value,
  //     });
  //   };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={inputChangeHandler}
            name="title"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
            name="amount"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
            name="date"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpensesForm;
