// Fonction pour récupérer les personnages depuis l'API locale
async function getCharacters() {
	try {
		const response = await fetch('./../data/characters.json');
		if (!response.ok) {
			throw new Error('Erreur lors de la récupération des personnages');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

// Appel de la fonction et affichage dans la console
getCharacters().then(data => {
    console.log('Personnages récupérés :', data);
});