const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error));
