const mongoose = require("mongoose");
const Listing = require("../modules/listing");
const initData = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((result) => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "689c7a29b40db0a4d0f18f04",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
