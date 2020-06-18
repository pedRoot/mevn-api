const mongoose = require("mongoose");
const properties = require("./properties");

module.exports = () => {

  const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(properties.DB, options)
    .then(() => console.log(properties.SUCCESS(`MongoDB connected on ${properties.DB}`)))
    .catch(err => console.log(properties.ERROR(`Connection has error: ${properties.DB}`))
    )

  process.on('SIGINT', () => {
    mongoose.connectio.close(() => {
      console.log(properties.TERMINATION('Mongoose is disconcted'));
      process.exit(0);
    });
  });
};
