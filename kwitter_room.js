/*const firebaseConfig = {
  apiKey: "AIzaSyCh-3IYUl802oQ9nJd8wbFjUmLZUDNP0ug",
  authDomain: "kwit1-81d76.firebaseapp.com",
  databaseURL: "https://kwit1-81d76-default-rtdb.firebaseio.com",
  projectId: "kwit1-81d76",
  storageBucket: "kwit1-81d76.appspot.com",
  messagingSenderId: "1020195305235",
  appId: "1:1020195305235:web:a04f394abc6d56f0decce6"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyB4HXw9SGsg0n41Gi-P5VbBNEGZnqEfzus",
  authDomain: "advc94-8739c.firebaseapp.com",
  databaseURL: "https://advc94-8739c-default-rtdb.firebaseio.com",
  projectId: "advc94-8739c",
  storageBucket: "advc94-8739c.appspot.com",
  messagingSenderId: "441015868002",
  appId: "1:441015868002:web:fb1b553e3f9ddf709c0f3b"
};


firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
