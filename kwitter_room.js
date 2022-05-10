var firebaseConfig = {
      apiKey: "AIzaSyA05A4r0C2w1PEhZWMFEMGkEmEMCtXP6X8",
      authDomain: "k-w-i-t-t-e-r-4534e.firebaseapp.com",
      databaseURL: "https://k-w-i-t-t-e-r-4534e-default-rtdb.firebaseio.com",
      projectId: "k-w-i-t-t-e-r-4534e",
      storageBucket: "k-w-i-t-t-e-r-4534e.appspot.com",
      messagingSenderId: "350314592904",
      appId: "1:350314592904:web:84a037fb2ea7f8b99efd3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage, setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}