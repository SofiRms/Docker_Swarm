import express from 'express';

const port = 80;
const app = express();

//RUTAS
app.get("/", async (req, res) => {
  res.json('Hello everybody');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en puerto:${port}`);
});