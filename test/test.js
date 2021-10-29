require("dotenv").config();
const WeebyAPI = require("../src/index"); // Change this to: require("weeby-js")
const weeby = new WeebyAPI(process.env.WEEBYAPI);

(async () => {
    const votedUser = await weeby.utility.topGGVoteChecker({ botID: "520531771679571970", userID: "34152755938249932" });

    console.log(votedUser);
})();
