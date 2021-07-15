user_name = localStorage.getItem("user_name")
document.getElementById("user_name"). innerHTML = "Welcome " + user_name + "!";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCZaAIaWm2uniiQm-1JrWdt2O-kD1SoYo4",
    authDomain: "classtest-e92a8.firebaseapp.com",
    databaseURL: "https://classtest-e92a8-default-rtdb.firebaseio.com",
    projectId: "classtest-e92a8",
    storageBucket: "classtest-e92a8.appspot.com",
    messagingSenderId: "516825638176",
    appId: "1:516825638176:web:8c66cae3f16f58c5bce345",
    measurementId: "G-M1PEV9RL8J"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -" + Room_names);
row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#'" + Room_names + "<di><hr>";
document.getElementById("output").innerHTML += row;
//End code
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
});});}
function redirectToRoomName(name) {
  console.log("name");
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}


