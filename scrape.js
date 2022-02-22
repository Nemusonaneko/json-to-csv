const axios = require("axios");
const api = "https://api.llama.fi/protocols"
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function extractInfo() {
    const data = (await axios.get(api)).data;
    const csvWriter = createCsvWriter({
        path: "data.csv",
        header: [
            {id: "name", title: "name"},
            {id: "symbol", title: "symbol"},
            {id: "url", title: "url"},
            {id: "chains", title: "chains"},
            {id: "category", title: "category"},
            {id: "twitter", title: "twitter"},
            {id: "audit_links", title: "audit links"}
        ]
    });

    csvWriter.writeRecords(data).then(()=> console.log("CSV export successful"));

}

extractInfo()