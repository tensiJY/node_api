const express = require(`express`);

const { body } = require(`express-validator`);
const feedController = require(`../../../controllers/feedControllers`);

const router = express.Router();
//  라우터에서 컨트롤러 실행s
router.get(`/posts`, feedController.getPosts);
router.post(
  `/post`,
  [
    body(`title`).trim().isLength({ min: 3 }),
    body(`content`).trim().isLength({ min: 5 }),
  ],

  feedController.createPost
);

router.get(`/post/:postId`, feedController.getPost);

module.exports = router;
