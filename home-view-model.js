import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYPusJw3GKFG9cf94RPVcQVlPazmlhfOs",
    authDomain: "fitu-3ad62.firebaseapp.com",
    projectId: "fitu-3ad62",
    storageBucket: "fitu-3ad62.appspot.com",
    messagingSenderId: "1038158856368",
    appId: "1:1038158856368:web:09de0ce0b61b4849c33b75",
    measurementId: "G-2EPLK1M150",
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var app = new Vue({
    el: '#app',
    data: 
    {
      signUpEmail: 'Hello Vue!'
    },
    methods: {
        async signUp() {
            const auth = getAuth();

            let userData = null;
            
            try
            {
                userData = await createUserWithEmailAndPassword();
            }
            catch (e)
            {
                console.error(e);
            }
        },
        async signIn() {
            const auth = getAuth();

            let userData = null;
            
            try
            {
                userData = await createUserWithEmailAndPassword();
            }
            catch (e)
            {
                console.error(e);
            }
        }
    },
})