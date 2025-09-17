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

// Appel de la fonction et affichage dynamique dans la liste
getCharacters().then(data => {
	if (data && Array.isArray(data)) {
		const list = document.getElementById('character-list');
		list.innerHTML = '';
		data.forEach(character => {
			const li = document.createElement('li');
			li.textContent = character.name || character;
			list.appendChild(li);
		});
	} else {
		console.error('Aucune donnée de personnage trouvée.');
	}
});