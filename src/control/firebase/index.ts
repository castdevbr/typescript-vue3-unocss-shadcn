import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
} from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const db = getFirestore(app)

async function writeDocument(
  path: string,
  data: Record<string, unknown>,
) {
  const docRef = doc(db, path)
  await setDoc(docRef, data)
  return docRef
}

async function addDocument(
  collectionPath: string,
  data: Record<string, unknown>,
) {
  const colRef = collection(db, collectionPath)
  const docRef = await addDoc(colRef, data)
  return docRef
}

async function readDocument(path: string) {
  const docRef = doc(db, path)
  const snapshot = await getDoc(docRef)
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null
}

export {
  app,
  auth,
  googleProvider,
  db,
  writeDocument,
  addDocument,
  readDocument,
}
