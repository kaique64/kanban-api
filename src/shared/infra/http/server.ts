import app from './app';

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`🔥 Server is running on port http://localhost:${port}`);
});
