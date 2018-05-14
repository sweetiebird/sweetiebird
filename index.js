import express from './api';

require('dotenv').load();

const app = express();

const port = process.env.PORT || 3000;

// listen for http verbs
const server = app.listen(port, () => {
  console.info(`Server starting on port ${port}`);
});
