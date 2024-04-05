const express = require("express");
const app = express();

function calculateSum(n) {
    let ans = 1;
    for (let i=1;i<=n;i++) {
        ans *= i;
    }
    return ans;
    
}

app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(`Sum of first ${n} numbers is ${ans}`);
});

app.listen(3000)