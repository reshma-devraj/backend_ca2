const express = require("express");
const app = express();
app.use(express.json());
const PORT=3000;

const users=[
    {email:"crystal@gmail.com",password:reshma0205},
    {email:"jkayy@gmail.com",password:jk0802},
];

app.put("/update-user", (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).send("Email and new password are not found");
    }

   const users = users.find(users => users.email === email);

    if (users) {
        users.password = newPassword;
        return res.status(200).json({ message: "Password updated successfully", data: users });
    }

    res.status(404).json({ message: "Email not found" });
});

app.delete("/delete-user", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email not found" });
    }

    const index = userData.findIndex(user => users.email === email);
    userData.splice(index, 1);
    res.status(200).json({ message: "User deleted successfully", data: users });
});

app.listen(PORT, () => {
    console.log(`Server is running on`);
});