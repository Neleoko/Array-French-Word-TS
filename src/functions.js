"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordsFromFile = void 0;
var fs = require("fs");
function getWordsFromFile() {
    try {
        // Lire le contenu du fichier JSON
        var jsonData = fs.readFileSync("./index.json", 'utf-8');
        console.log(jsonData);
        // Convertir le JSON en tableau
        return JSON.parse(jsonData);
    }
    catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
        return [];
    }
}
exports.getWordsFromFile = getWordsFromFile;
console.log(getWordsFromFile());
