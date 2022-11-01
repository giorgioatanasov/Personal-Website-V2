import React, { Component } from "react";
import { NotFoundScript, errMsg, resetForm } from "./404Script.js";
import "./404.css";

class NotFound extends Component {
  componentDidMount() {
    NotFoundScript();
    errMsg();
    resetForm(1);
  }

  render() {
    return (
      <html lang="en">
        <meta charset="UTF-8"></meta>
        <link rel="stylesheet" href="/NotFound.css"></link>
        <body>
          <div class="container">
            <form class="four-oh-four-form">
              <input type="text" class="404-input"></input>
            </form>
            <div class="terminal">
              <p class="prompt output new-output"></p>
            </div>{" "}
          </div>
        </body>
      </html>
    );
  }
}

export default NotFound;
