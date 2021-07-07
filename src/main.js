import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'


// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBVD1nbPcZOV1lpZ79utuaeEHLAbK700EY",
    authDomain: "vue-firestore-chat-51559.firebaseapp.com",
    projectId: "vue-firestore-chat-51559",
    storageBucket: "vue-firestore-chat-51559.appspot.com",
    messagingSenderId: "591199542004",
    appId: "1:591199542004:web:e59aa403be8eed575a5ca1",
    measurementId: "G-9V9CWRWB29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;
//Disable deprecated features
db.settings({
    timestampsInSnapShots: true
});

createApp(App).use(store).use(router).mount('#app')