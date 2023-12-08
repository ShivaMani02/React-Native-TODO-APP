import { config } from 'dotenv';
import { app } from './app.js';

import connectDB from './config/database.js';

config({
  path: './config/config.env',
});

connectDB();

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is working on Port ${process.env.PORT}`);
});
