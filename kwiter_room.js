var firebaseConfig = {
    apiKey: "AIzaSyCZaAIaWm2uniiQm-1JrWdt2O-kD1SoYo4",
    authDomain: "classtest-e92a8.firebaseapp.com",
    projectId: "classtest-e92a8",
    storageBucket: "classtest-e92a8.appspot.com",
    messagingSenderId: "516825638176",
    appId: "1:516825638176:web:8c66cae3f16f58c5bce345",
    measurementId: "G-M1PEV9RL8J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData(){
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code
    
          //End code
        });
      });
    }
    getData();
