import app from './app';

const port = process.env.PORT || 5001;
console.log(process.env.PORT)
app.listen(port, () => {
  console.log(`🔥 Server is running on port http://localhost:${port}`);
});
