import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("Talky-theme") || "coffee",
    setTheme: (theme) => {
    
        localStorage.setItem("Talky-theme", theme);
        set({theme});
    },
}))
