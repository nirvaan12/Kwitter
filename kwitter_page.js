
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
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("roomname");

   function send(){
         msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0
         });
         document.getElementById("msg").value="";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
