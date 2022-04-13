import React from "react";
import "./style.scss";
import CommentForm from "./CommentForm";

function Comment({
	comment,
	replies,
	currentUserId,
	actionComment,
	setActionComment,
	parentId = null,
	addComment,
}) {
	const createdAt = new Date(comment.createdAt).toLocaleDateString();
	const canReply = Boolean(currentUserId);
	const isReplying =
		actionComment &&
		actionComment.type === "replying" &&
		actionComment.id === comment.id;
	const replyId = parentId ? parentId : comment.id;

	const handleHidden = () => {
		setActionComment(false);
	};

	return (
		<>
			<div className="comment">
				<div className="comment__container">
					<div className="comment__customer">
						<img src={comment.avatar} className="comment__customer-avatar" />
						<div className="comment__customer-action">
							<div className="comment__customer-info">
								<span className="comment__customer-name">
									{comment.username}
								</span>
								<span className="comment__customer-time">{createdAt}</span>
								{canReply && (
									<span
										className="comment__customer-reply"
										onClick={() => {
											setActionComment({ id: comment.id, type: "replying" });
										}}
									>
										reply
									</span>
								)}
							</div>
							<p className="comment__customer-text">{comment.body}</p>
						</div>
					</div>
					<div className="comment__bottom">
						{isReplying && (
							<>
								<span className="comment__title">
									REPLY TO {comment.username}{" "}
									<button className="comment__cancel" onClick={handleHidden}>
										CANCEL REPLY
									</button>{" "}
								</span>
								<CommentForm
									replyId={replyId}
									handleSubmit={(text, replyId, username) =>
										addComment(text, replyId, username)
									}
								/>
							</>
						)}
						{replies.length > 0 && (
							<div className="comment__replies">
								{replies.map((reply) => (
									<Comment
										comment={reply}
										key={reply.id}
										replies={[]}
										currentUserId={currentUserId}
										parentId={comment.id}
										addComment={addComment}
										actionComment={actionComment}
										setActionComment={setActionComment}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Comment;
