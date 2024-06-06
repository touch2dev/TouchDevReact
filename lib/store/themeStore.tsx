import { create } from 'zustand'

const useThemeStore = create((set) => ({
    theme: false,
    setTheme: (theme: any) => set({ theme }),
    changeTheme: () => set((state: { theme: any; }) => ({ theme: !state.theme })),
}))

export default useThemeStore

export const Themer = (state: any) => {
    const theme = useThemeStore((state: any) => state.theme);
    return theme;
}