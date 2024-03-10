const path = require('path');
const fs = require('fs');

module.exports = {
    saveData: (data, filenameJSON) => {
        const dataJSON = JSON.stringify(data, null, 3);
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`)
        fs.writeFileSync(pathJSON, dataJSON, "utf-8");
    },
    loadData: (filenameJSON) => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
        const fileJSON = fs.readFileSync(pathJSON, "utf-8");
        const jsonParser = JSON.parse(fileJSON);
        return jsonParser
    }
}