<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {{
    apiKey: "AIzaSyBEyOl8Fzctpz9HPVC6CS95BcJfJZ_zdzk",
    authDomain: "duoc-qr.firebaseapp.com",
    projectId: "duoc-qr",
    storageBucket: "duoc-qr.appspot.com",
    messagingSenderId: "348940376253",
    appId: "1:348940376253:web:bc244132070a3325cfbfd4",
    measurementId: "G-5FFCKJVBZP"
  }};

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
</script>