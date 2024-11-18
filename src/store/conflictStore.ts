import { create } from 'zustand';
import { format } from 'date-fns';

interface Conflict {
  id: string;
  type: 'warning' | 'critical';
  department: string;
  employees: string[];
  description: string;
  date: string;
  status: 'active' | 'resolved';
  severity: number;
}

interface ConflictStore {
  conflicts: Conflict[];
  addConflict: (conflict: Omit<Conflict, 'id' | 'date'>) => void;
  resolveConflict: (id: string) => void;
  getActiveConflicts: () => Conflict[];
  getDepartmentStats: () => { department: string; count: number }[];
}

export const useConflictStore = create<ConflictStore>((set, get) => ({
  conflicts: [
    {
      id: '1',
      type: 'warning',
      department: 'Engineering',
      employees: ['John Doe', 'Jane Smith'],
      description: 'Communication issues regarding code review process',
      date: format(new Date(), 'yyyy-MM-dd'),
      status: 'active',
      severity: 7,
    },
    {
      id: '2',
      type: 'critical',
      department: 'Marketing',
      employees: ['Alice Johnson', 'Bob Wilson'],
      description: 'Disagreement over project timeline and deliverables',
      date: format(new Date(), 'yyyy-MM-dd'),
      status: 'active',
      severity: 9,
    },
  ],

  addConflict: (conflict) =>
    set((state) => ({
      conflicts: [
        ...state.conflicts,
        {
          ...conflict,
          id: Math.random().toString(36).substr(2, 9),
          date: format(new Date(), 'yyyy-MM-dd'),
        },
      ],
    })),

  resolveConflict: (id) =>
    set((state) => ({
      conflicts: state.conflicts.map((conflict) =>
        conflict.id === id ? { ...conflict, status: 'resolved' } : conflict
      ),
    })),

  getActiveConflicts: () => {
    const { conflicts } = get();
    return conflicts.filter((conflict) => conflict.status === 'active');
  },

  getDepartmentStats: () => {
    const { conflicts } = get();
    const stats = conflicts.reduce((acc, conflict) => {
      const existing = acc.find((stat) => stat.department === conflict.department);
      if (existing) {
        existing.count += 1;
      } else {
        acc.push({ department: conflict.department, count: 1 });
      }
      return acc;
    }, [] as { department: string; count: number }[]);
    return stats;
  },
}));