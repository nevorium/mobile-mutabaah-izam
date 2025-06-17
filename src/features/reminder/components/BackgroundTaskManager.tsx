import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import { useDispatch } from 'react-redux';
import { setBackgroundStatus } from '../../../app/store/slices/backgroundTaskSlice';

export default function BackgroundTaskManager() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'background') {
        dispatch(setBackgroundStatus('background'));
        // Trigger background sync, schedule notifications, etc.
      } else if (state === 'active') {
        dispatch(setBackgroundStatus('active'));
      }
    });
    return () => subscription.remove();
  }, [dispatch]);
  return null;
}
