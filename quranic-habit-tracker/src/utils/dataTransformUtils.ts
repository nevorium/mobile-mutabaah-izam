// src/utils/dataTransformUtils.ts
export function groupByDate(activities) {
  return activities.reduce((acc, curr) => {
    const date = curr.date.split('T')[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(curr);
    return acc;
  }, {});
}

export function sortByDateDesc(arr) {
  return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
}
