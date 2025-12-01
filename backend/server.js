const express = require('express');
const app = express();
const sampleRoute = require('./routes/sampleRoute');

app.use(express.json());
app.use('/api/sample', sampleRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
