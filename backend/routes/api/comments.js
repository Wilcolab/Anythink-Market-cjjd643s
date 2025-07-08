/**
 * @route GET /:postId
 * @group Comments - Operations about comments
 * @param {string} postId.path.required - ID of the post to retrieve comments for
 * @returns {Array.<Comment>} 200 - An array of comments for the specified post
 * @returns {Error} 500 - Internal server error
 * @description Retrieves all comments associated with a specific post, including the author's username.
 */

/**
 * @route DELETE /:commentId
 * @group Comments - Operations about comments
 * @param {string} commentId.path.required - ID of the comment to delete
 * @returns {null} 204 - Comment successfully deleted
 * @returns {Error} 500 - Internal server error
 * @description Deletes a comment by its ID.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// hey github copilot, write a route to get all comments for a post
router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ post: postId }).populate("author", "username");
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    const { commentId } = req.params;
    try {
        await Comment.findByIdAndDelete(commentId);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
