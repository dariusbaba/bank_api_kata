import express from 'express';
import {createAccount} from './services/accounts'
import {
  loadAllAccounts,
  loadAccount,
  transfer,
} from './bank-api';

const app = express();
app.use(express.json());
app.get('/', (_req, res) => res.send('bank api'));

app.post('/accounts', createAccount);
app.get('/accounts/:id', loadAccount);
app.get('/accounts', loadAllAccounts);
app.post('/transfer', transfer);

export { app };
