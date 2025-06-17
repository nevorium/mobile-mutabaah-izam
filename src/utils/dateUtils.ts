// src/utils/dateUtils.ts
import moment from 'moment-hijri';

export function getTodayGregorian() {
  return new Date().toISOString().split('T')[0];
}

export function getTodayHijri() {
  return moment().format('iYYYY-iMM-iDD');
}

export function isSameDay(date1: string, date2: string) {
  return date1.split('T')[0] === date2.split('T')[0];
}

export function getWeekRange(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const start = new Date(d.setDate(diff));
  const end = new Date(d.setDate(start.getDate() + 6));
  return [start, end];
}
