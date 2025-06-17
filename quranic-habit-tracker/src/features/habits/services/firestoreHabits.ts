// src/features/habits/services/firestoreHabits.ts
import { db } from '../../../config/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const habitsCollection = collection(db, 'habits');

export const addHabit = async (habit: any) => {
  return await addDoc(habitsCollection, habit);
};

export const getHabitsByUser = async (userId: string) => {
  const q = query(habitsCollection, where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
