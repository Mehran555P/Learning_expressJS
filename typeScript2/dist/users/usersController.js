import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    console.log("users page log");
    res.send("users page");
});
export default router;
//# sourceMappingURL=usersController.js.map