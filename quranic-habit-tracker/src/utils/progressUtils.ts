// src/utils/progressUtils.ts
export function calculateProgress(activities, period = 'daily') {
  const now = new Date();
  let filtered = [];
  if (period === 'daily') {
    filtered = activities.filter(a => new Date(a.date).toDateString() === now.toDateString());
  } else if (period === 'weekly') {
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
    filtered = activities.filter(a => new Date(a.date) >= weekStart);
  } else if (period === 'monthly') {
    filtered = activities.filter(a => new Date(a.date).getMonth() === now.getMonth());
  }
  return filtered.length;
}

export function calculateTargetAchievement(activities, target) {
  return Math.min(1, activities.length / target);
}
