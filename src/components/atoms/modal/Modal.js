import React from "react";
import ReactMarkdown from 'react-markdown'

import Heading from '../heading'

import "./Modal.scss";

const Modal = function ({ buttonHandler }) {
  const input = "** Add Task **\n\nFill in the task and click on `Add Task`\n\n** View Pending & Completed Tasks **\n\n* See the list and track your tasks\n\n* Mark the pending tasks as completed\n\n* Remove task from the pending list\n\n** Quick Adds **\n\nAdd the suggested Tasks based on the history\n\n";
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__wrapper__header">
        <Heading className="modal__wrapper__header__heading" type="h3">Tips to use</Heading>
          <button
            className="modal__wrapper__header__button"
            onClick={() => buttonHandler(false)}
          >
            <img src="https://icon.now.sh/x/000000" alt="close" />
          </button>
        </div>
        <div className="modal__wrapper__body">
          {<ReactMarkdown source={input} className="markdown-container"/>}
        </div>
        <div className="modal__wrapper__footer">
          <button
            onClick={() => buttonHandler(false)}
            className="modal__wrapper__footer__button"
          >
            OK
          </button>
        </div>
      </div>
      <div className="modal__bg" onClick={() => buttonHandler(false)} />
    </div>
  );
};

export default Modal;
