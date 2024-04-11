export async function getArrayOfFrenchWord(): Promise<string[]> {

    try {
        const jsonData = await fetch("https://raw.githubusercontent.com/words/an-array-of-french-words/master/index.json")
        return await jsonData.json();
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier :', error);
        return [];
    }
}