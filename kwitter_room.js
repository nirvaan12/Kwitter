
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAbAkpP8ByucXvIHFozgY5BIDy-39xG1QA",
      authDomain: "kwitter-1801d.firebaseapp.com",
      databaseURL: "https://kwitter-1801d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1801d",
      storageBucket: "kwitter-1801d.appspot.com",
      messagingSenderId: "775277174671",
      appId: "1:775277174671:web:45e98f9c8ea995151f35fa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
