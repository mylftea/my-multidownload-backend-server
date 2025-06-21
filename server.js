const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/downloads', express.static('downloads'));

app.post('/download', (req, res) => {
  const { url, format } = req.body;
  console.log(`Download request for: ${url} as ${format}`);
  const fileName = `sample.${format}`;
  res.json({ fileUrl: `/downloads/${fileName}` });
});

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
