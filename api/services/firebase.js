import admin from 'firebase-admin';

// environment variables are created async and aren't available immediately
// to circumvent this we have an init function for the database, called later
let db;
function initDatabase() {
  if (db) return;

  const privateKey = process.env.FB_SERVICE_ACCOUNT;

  const credential = admin.credential.cert({
    projectId: process.env.FB_PROJECT_ID,
    clientEmail: process.env.FB_CLIENT_EMAIL,
    privateKey,
  });

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
