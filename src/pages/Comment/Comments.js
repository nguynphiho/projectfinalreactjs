import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import "./style.scss";

//data
const data = [
  {
    id: "1",
    body: "Essent abhorreant efficiantur at sea. Hadem omnes fastidii.",
    username: "JULIE AUSTIN",
    userId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
    avatar:
      "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
  },
  {
    id: "2",
    body: "Aeque accusata quo eu, at aliqu am periculis salutatus has, tem por bonor ei eos. His tatio altera te, omnes oblim ius aliquid mes dem sarchum dom manis.",
    username: "ANN MILLER",
    userId: "2",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
    avatar:
      "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-user-img-1.png",
  },
  {
    id: "3",
    body: "Ne hinc consetetur ius.",
    username: "JULIE AUSTIN",
    userId: "1",
    parentId: "2",
    createdAt: "2021-08-16T23:00:33.010+02:00",
    avatar:
      "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
  },
  {
    id: "4",
    body: "Aeque accusata quo eu, at aliqu am periculis salutatus has, tem por bonor ei eos. His tatio altera te, omnes oblim ius aliquid mes dem sarchum dom manis.",
    username: "ANN MILLER",
    userId: "2",
    parentId: "1",
    createdAt: "2021-08-16T23:00:33.010+02:00",
    avatar:
      "https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-user-img-1.png",
  },
];

function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState(data);
  const [actionComment, setActionComment] = useState(false);
  const rootComments = backendComments.filter(
    (backendComments) => backendComments.parentId === null
  );
  const getReplies = (commendId) => {
    return backendComments.filter(
      (backendComments) => backendComments.parentId === commendId
    );
  };

  const createComment = (text, parentId = null, username) => {
    return {
      id: Math.random().toString(36).substring(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: username,
      createdAt: new Date().toISOString(),
      avatar:
        "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    };
  };
  const addComment = (text, parentId, username) => {
    setBackendComments([
      createComment(text, parentId, username),
      ...backendComments,
    ]);
  };

  return (
    <div className="comment comments">
      <span className="comment__title">Comments</span>
      {rootComments.map((rootComment) => (
        <Comment
          key={rootComment.id}
          comment={rootComment}
          replies={getReplies(rootComment.id)}
          currentUserId={currentUserId}
          addComment={addComment}
          actionComment={actionComment}
          setActionComment={setActionComment}
        />
      ))}

      {actionComment ? (
        false
      ) : (
        <>
          <div className="comment__title">
            <span>post a comment</span>
          </div>
          <CommentForm handleSubmit={addComment} />
        </>
      )}
    </div>
  );
}

export default Comments;
