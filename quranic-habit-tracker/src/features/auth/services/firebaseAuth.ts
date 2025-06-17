// src/features/auth/services/firebaseAuth.ts
import { auth } from '../../../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInAnonymously, sendPasswordResetEmail, updateProfile, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const loginAnonymously = () => signInAnonymously(auth);

export const forgotPassword = (email: string) => sendPasswordResetEmail(auth, email);

export const updateUserProfile = (profile: any) => updateProfile(auth.currentUser!, profile);

export const googleSignIn = async (idToken: string) => {
  const provider = new GoogleAuthProvider();
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential);
};

export const getGoogleAuthRequest = () => {
  return useAuthRequest({
    expoClientId: Constants.expoConfig?.extra?.GOOGLE_EXPO_CLIENT_ID,
    iosClientId: Constants.expoConfig?.extra?.GOOGLE_IOS_CLIENT_ID,
    androidClientId: Constants.expoConfig?.extra?.GOOGLE_ANDROID_CLIENT_ID,
    webClientId: Constants.expoConfig?.extra?.GOOGLE_WEB_CLIENT_ID,
  });
};
