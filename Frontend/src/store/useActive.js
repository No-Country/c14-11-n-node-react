import create from 'zustand';

const useActiveStore = create((set) => ({
  active: '',
  setActive: (value) => set({ active: value }),
}));

export default useActiveStore;
