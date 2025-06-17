import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, addDoc, getDocs, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../../config/firebase';

export const activitiesApi = createApi({
  reducerPath: 'activitiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getActivities: builder.query({
      async queryFn(userId) {
        try {
          const q = query(collection(db, 'activities'), where('userId', '==', userId), orderBy('date', 'desc'));
          const snapshot = await getDocs(q);
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          return { data };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    addActivity: builder.mutation({
      async queryFn(activity) {
        try {
          const docRef = await addDoc(collection(db, 'activities'), activity);
          return { data: { id: docRef.id, ...activity } };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetActivitiesQuery, useAddActivityMutation } = activitiesApi;
