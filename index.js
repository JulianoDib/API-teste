const express = require("express");
const app = express();

app.use(express.json());

//Importar rotas do user
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.get("/", (req,res) =>{
    res.json({message:"API rodando no codespace"});
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}!`);
});