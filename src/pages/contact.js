import React from "react";

const Contact = () => {
  return (
    <div>
      <section>
        <div>LinkedIn</div>
        <div>GitHub</div>
        <div>Email</div>
      </section>
      <section>
        <form action="/send-data-here" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label for="message">Message:</label>
          <input type="text" id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
