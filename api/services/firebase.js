import admin from 'firebase-admin';

// environment variables are created async and aren't available immediately
// to circumvent this we have an init function for the database, called later
let db;
function initDatabase() {
  if (db) return;

  const env = process.env.NODE_ENV;

  let credential;
  if (env === 'development') {
    const serviceAccount = require('../../sweetiebird-firebase');
    credential = admin.credential.cert(serviceAccount);
  } else {
    const certFromSecret = process.env.FB_SERVICE_ACCOUNT;
    const privateKey = Buffer.from(certFromSecret, 'base64').toString();
    credential = admin.credential.cert({
      projectId: process.env.FB_PROJECT_ID,
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey,
    });
  }

  admin.initializeApp({
    credential,
    databaseURL: 'https://sweetie-bird.firebaseio.com/',
    databaseAuthVariableOverride: {
      uid: process.env.FB_ADMIN_USER,
    },
  });

  db = admin.database();
}

class FirebaseService {
  static async getTest() {
    initDatabase();
    const snapshot = await db.ref('test').once('value');
    return snapshot.val();
  }
}

export default FirebaseService;
