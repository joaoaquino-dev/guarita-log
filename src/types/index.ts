export type Equipment = {
  id: string;
  name: string;
  checked: boolean;
};

export type ShiftRecord = {
  id: string;
  guardName: string;
  date: string;
  equipment: Equipment[];
  notes: string;
  createdAt: string;
};
