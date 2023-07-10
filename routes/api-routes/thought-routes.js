const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// routes for GET and POST all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// routes for GET, PUT and DELETE thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// route for POST reaction to thought
router.route('/:thoughtId/reactions').post(createReaction);

// route for DELETE reaction to thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;