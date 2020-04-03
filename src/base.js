import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDjuytTzeneW_gZ7agfDXAmEy2MvBEs8TU",
        authDomain: "chatbox-app-563aa.firebaseapp.com",
        databaseURL: "https://chatbox-app-563aa.firebaseio.com",
    }
)



const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base

