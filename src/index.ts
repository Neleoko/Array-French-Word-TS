export async function getWordsFromFile(): Promise<string[]> {

    try {
        // Lire le contenu du fichier JSON
        const jsonData = await fetch("https://raw.githubusercontent.com/words/an-array-of-french-words/master/index.json")
        const json = await jsonData.json();
        // Convertir le JSON en tableau
        return JSON.parse('"' + json + '"')
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
        return [];
    }
}

