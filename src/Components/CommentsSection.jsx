import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CommentsSection = () => {
    const [comments, setComments] = useState([]);

    const handlePostComments = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        const commentForm = document.getElementById("commentForm");
        const commentsSection = document.getElementById("comments");

        commentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            const nameInput = document.getElementById("nameInput");
            const commentBox = document.getElementById("commentBox");

            const commenterName = nameInput.value;
            const commentText = commentBox.value;

            if (commenterName && commentText) {
                // Create a new comment element and append it to the comments section
                const newComment = document.createElement("div");
                newComment.className = "comment";
                newComment.innerHTML = `<strong>${commenterName}:</strong> ${commentText}`;

                commentsSection.appendChild(newComment);

                // Clear the input fields
                nameInput.value = "";
                commentBox.value = "";
            }
        }
        )
    });

    return (
        <div className="entire-commentSect">
            <form className="comment-section" id="commentForm" onSubmit={handlePostComments}>
                <label className="Commenter" htmlFor="nameInput"> Commenter Name:</label>
                <input id="nameInput" className="CommName" type="text" placeholder="Name" />
                <br />
                <br />
                <br />
                <label className="oneone" htmlFor="commentBox">1 on 1 Comments:</label>
                <textarea id="commentBox" className="commentbox" placeholder="Place text here"></textarea>

                <button type="submit" className="submitBtn">Submit</button>
            </form>

            <div className="commentsArea" id="comments">
                {/* Place existing comments here */}
            </div>
        </div >
    )
}


export default CommentsSection;