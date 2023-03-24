import { app } from './app.js'
const port = process.env.ENV_PORT;

app.listen(port, () => {
  console.log(`🏃💨 Server is running on port ${port}`);
});
