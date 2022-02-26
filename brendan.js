const axios = require("axios");
const api = "https://api.llama.fi/protocols"
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function extractInfo() {
    const data = (await axios.get(api)).data;

    let result = [];
    data.forEach(p => {
        if (p.audits === '0') {
            result.push(p);
        }
    });

    const csvWriter = createCsvWriter({
        path: "data.csv",
        header: [
            {id: "name", title: "name"},
            {id: "url", title: "url"},
            {id: "audits", title: "audits"},
            {id: "twitter", title: "twitter"},
        ]
    });

    csvWriter.writeRecords(result).then(()=> console.log("CSV export successful"));

}

extractInfo()