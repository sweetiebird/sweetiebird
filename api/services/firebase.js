import admin from 'firebase-admin';

// environment variables are created async and aren't available immediately
// to circumvent this we have an init function for the database, called later
let db;
function initDatabase() {
  if (db !== undefined) return;

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
  static async saveUserPurchase(userId, purchase, product, guid) {
    const purchaseId = await FirebaseService.savePurchase(purchase, product, guid);
    await db.ref(`/users/${userId}/purchases`).push({ payment: purchase, product, guid });
  }

  static async savePurchase(purchase, product, guid) {
    initDatabase();

    const newPurchaseKey = db.ref('purchases').push().key;
    await db.ref(`/purchases/${newPurchaseKey}`).update({ payment: purchase, product, guid });

    return newPurchaseKey;
  }
}

export default FirebaseService;
