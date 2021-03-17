
let form = document.querySelector('#form');

var firebaseConfig = {
    apiKey: "AIzaSyAGgArEP2NNihvz23ySaiSkWMP41cTLLF8",
    authDomain: "petition-writing-d721a.firebaseapp.com",
    projectId: "petition-writing-d721a",
    storageBucket: "petition-writing-d721a.appspot.com",
    messagingSenderId: "894261164997",
    appId: "1:894261164997:web:bcc48aefeb5cf9aa63e9ac",
    measurementId: "G-L94WB06DF5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    // console.log(email);
    // console.log(password);

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            window.location.href = "home.html";
        })
        .catch(err => {
            alert(err.message);
        })
});