document.addEventListener('DOMContentLoaded', function() {
	// // The Firebase SDK is initialized and available here!
	//
	// firebase.auth().onAuthStateChanged(user => { });
	// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
	// firebase.messaging().requestPermission().then(() => { });
	// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
	try {
		dao.ifNotExistDoThis("word", dao.selectAll, "word");
		dao.ifNotExistDoThis("state", dao.selectAll, "state");
		dao.initState();

	} catch (e) {
		console.log(e);
	}
});
