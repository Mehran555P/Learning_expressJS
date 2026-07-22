import express from 'express';
import usersController from './users/usersController.js';
const app = express();
app.get('/', (req, res) => {
    console.log("home page log");
    res.send("home page");
});
app.use('/users', usersController);
app.listen(3000);
//# sourceMappingURL=server.js.map