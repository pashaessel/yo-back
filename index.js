import express from 'express';
import campaignRouter from './routes/campaignsRouter.js'

import { BACK_PATH, FRONT_PATH, PORT } from './config.js';

const app = express();
app.use(express.json()) // for parsing application/json

//CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});

//Регистрируем роутер для кампаний
app.use('/api/', campaignRouter);

app.post('/api/sign-in', (req, res) => {

})


async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

startApp();


