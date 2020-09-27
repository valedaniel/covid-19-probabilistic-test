
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} from 'react-native-dotenv';

import * as firebase from 'firebase';

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
}

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    public update(pathRef: string, pathChild: string, value: any) {
        firebase.database().ref(pathRef).child(pathChild).update(value)
    }

    public refOff(pathRef: string) {
        firebase.database().ref(pathRef).off();
    }
}

export default new Firebase();