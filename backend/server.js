const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// suas rotas de API
const artigosRoute = require('./routes/artigos');
app.use('/api/artigos', artigosRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
