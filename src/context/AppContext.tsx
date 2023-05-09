// src/context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
    selectedSticker: number | null;
    setSelectedSticker: (stickerIndex: number | null) => void;
    selectedAnimal: number | null;
    setSelectedAnimal: (animal: number | null) => void;
}

const AppContext = createContext<AppState>({
    selectedSticker: null,
    setSelectedSticker: () => { },
    selectedAnimal: null,
    setSelectedAnimal: () => { },
});

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
    const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
    return (
        <AppContext.Provider value={{ selectedSticker, setSelectedSticker, selectedAnimal, setSelectedAnimal }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
