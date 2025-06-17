// src/utils/streakUtils.ts
import { isSameDay, getTodayGregorian } from './dateUtils';

export function calculateStreak(activities: any[]) {
  let streak = 0;
  let lastDate = null;
  const today = getTodayGregorian();
  for (let i = 0; i < activities.length; i++) {
    const activityDate = activities[i].date;
    if (i === 0 && isSameDay(activityDate, today)) {
      streak = 1;
      lastDate = activityDate;
    } else if (lastDate && isSameDay(activityDate, lastDate)) {
      continue;
    } else if (lastDate && new Date(activityDate) - new Date(lastDate) === -86400000) {
      streak++;
      lastDate = activityDate;
    } else {
      break;
    }
  }
  return streak;
}
