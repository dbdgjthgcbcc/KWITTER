var firebaseConfig = {
      apiKey: "AIzaSyA05A4r0C2w1PEhZWMFEMGkEmEMCtXP6X8",
      authDomain: "k-w-i-t-t-e-r-4534e.firebaseapp.com",
      databaseURL: "https://k-w-i-t-t-e-r-4534e-default-rtdb.firebaseio.com",
      projectId: "k-w-i-t-t-e-r-4534e",
      storageBucket: "k-w-i-t-t-e-r-4534e.appspot.com",
      messagingSenderId: "350314592904",
      appId: "1:350314592904:web:84a037fb2ea7f8b99efd3d"
};
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
