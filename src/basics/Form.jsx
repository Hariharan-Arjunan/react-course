import React from "react";

const Form = () => {
  return (
    <div>
      <form action="/send" method="POST">
        <div>
          <label htmlFor="title">Name </label>
          <input id="title" type="text" name="title" required />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email </label>
          <input id="email" type="email" name="email" />
        </div>
        <br />
        <div>
          <input type="checkbox" name="cache" />
          <label htmlFor="">Remembe Me</label>
          <input type="checkbox" name="Mr" />
          <label htmlFor="">Mr</label>
          <input type="checkbox" name="Ms" />
          <label htmlFor="">Ms</label>
        </div>
        <br />
        <div>
          <input type="radio" value="s" name="size" />
          <label htmlFor="">Short</label>
          <input type="radio" name="size" />
          <label htmlFor="" value="l">
            Large
          </label>
          <input type="radio" value="xl" name="size" />
          <label htmlFor="">Extra Large</label>
        </div>
        <br />
        <div>
          <label>Occupation</label>
          <select name="occupation">
            <option value="student">Student</option>
            <option value="workingProfessional">Working Professional</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="message">Message </label>
          <textarea
            name="message"
            minLength="3"
            maxLength="10"
            rows="5"
            cols="30"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default Form;
