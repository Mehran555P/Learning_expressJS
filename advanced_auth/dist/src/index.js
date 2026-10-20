"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Home page.");
});
app.get('/users', (req, res) => {
    const users = [
        { name: "Mehran", age: 18 },
        { name: "Mahan", age: 11 },
        { name: "sara", age: 20 },
    ];
    res.send(users);
});
app.listen(3000, () => {
    console.log("Server is running in port 3000");
});
//# sourceMappingURL=index.js.map