
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
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function addroom(){
         room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

   }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Names -"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
 
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
window.location="index.html";
}