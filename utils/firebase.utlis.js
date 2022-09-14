import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";
import data from "../data";

const firebaseConfig = {
  apiKey: "AIzaSyBwXN3F5gmSbm1kqPkNwYLXejNeTv7PUHc",
  authDomain: "crown-db-3417b.firebaseapp.com",
  projectId: "crown-db-3417b",
  storageBucket: "crown-db-3417b.appspot.com",
  messagingSenderId: "181639947184",
  appId: "1:181639947184:web:109789179ce44298f36c75",
  measurementId: "G-B2R13DTPEG",
};

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("Error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createMoviesDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach(async (object) => {
    const docRef = await addDoc(collectionRef, object);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getMovies = async () => {
  const collectionRef = collection(db, "movies");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const moviesMap = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  return moviesMap;
};

export const getUserDetails = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;
};

export const signOutUser = () => {
  const auth = getAuth();
  signOut(auth);
};

export const getSpecificMovie = async (id) => {
  const docRef = doc(db, "movies", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : "No data found";
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
