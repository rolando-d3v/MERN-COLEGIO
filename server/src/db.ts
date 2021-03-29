import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${config.db.user}:${config.db.pass}@cafe.8wspk.mongodb.net/${config.db.name}`,
      {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        // auth: {
        //   user: "",
        //   password: "",
        // },
      }
    );

    console.log(`server db ${db.connection.name} conected `);
  } catch (err) {
    console.log({ msn: "Error db", err });
  }
})();

//   mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe
