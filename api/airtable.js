const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appO3hFgzO9X7jbIQ");

export const getSides = (symbol) => {
  const table = "sides";

  return new Promise((resolve, reject) => {
    let votes = {};
    base(`${table}`)
      .select({
        maxRecords: 100,
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            console.log("recipee: ", record.get("recipe"));
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(votes);
          }
        }
      );
  });
};
