import { type ShiftRecord } from "../types";

const STORAGE_KEY = "guarita-log-records";

export function getRecords(): ShiftRecord[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveRecord(record: ShiftRecord): void {
  const records = getRecords();
  records.unshift(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}
