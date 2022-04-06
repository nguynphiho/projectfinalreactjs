import React, { useState } from "react";
import "./style.scss";

function CommentForm({handleSubmit, parentId = null, replyId}) {
  const [text, setText] = useState("")
  const [userName, setUserName] = useState("")
  const onSubmit = (event) => {
      event.preventDefault()
      handleSubmit(text,replyId ,userName)
      setText('')
  }
  const isTextareaDisabled = text.length === 0;
  return (
    <div className="comment__form">
      <form onSubmit={onSubmit} className="comment__form-chat">
        <textarea
          rows="7"
          cols="70"
          name="comment"
          placeholder="Your comment"
          value={text}
          onChange={(e)=> setText(e.target.value)}
        />
        <input
          type="text"
          className="comment__form-text"
          placeholder="Your Name"
          required
          value={userName}
          onChange={(e)=> setUserName(e.target.value)}
        />
        <input
          type="email"
          className="comment__form-text"
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          className="comment__form-text"
          placeholder="Website"
          required
        />
        <label htmlFor="checkaccept" className="comment__form-label">
        <input
          type="checkbox"
          id="checkaccept"
          className="comment__form-check"
        />
          Save my name, email, and website in this browser for the next time I comment.
        </label>
        <input type="submit" value="SUBMIT" className="comment__form-submit" disabled={isTextareaDisabled} />
      </form>
    </div>
  );
}

export default CommentForm;
