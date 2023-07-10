const router = require('express').Router();
const {
    getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
} = require('../../controllers/user-controller');

// here we GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// here we GET user ID, PUT update user ID and DELETE user by ID
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// here we POST add friend
router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;