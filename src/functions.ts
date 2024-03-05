import fs from "fs";

function getWordsFromFile(): string[] {

    try {
        // Lire le contenu du fichier JSON
        const jsonData = fs.readFileSync("./index.json", 'utf-8');
        console.log(jsonData)
        // Convertir le JSON en tableau
        return JSON.parse(jsonData);
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
        return [];
    }
}

export {getWordsFromFile};