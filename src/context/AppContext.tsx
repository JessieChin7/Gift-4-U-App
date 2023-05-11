// src/context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppState {
    selectedSticker: number | null;
    setSelectedSticker: (stickerIndex: number | null) => void;
    selectedAnimal: number | null;
    setSelectedAnimal: (animal: number | null) => void;
    checkedItems: { id: number, title: string }[];
    checkeRItems: { id: number, title: string }[];
    checkedPItems: { id: number, title: string }[];
    setCheckedItems: (items: { id: number, title: string }[]) => void;
    setCheckedRItems: (items: { id: number, title: string }[]) => void;
    setCheckedPItems: (items: { id: number, title: string }[]) => void;
    showMingChatRoom: boolean;
    setShowMingChatRoom: (show: boolean) => void;
}

const AppContext = createContext<AppState>({
    selectedSticker: null,
    setSelectedSticker: () => { },
    selectedAnimal: null,
    setSelectedAnimal: () => { },
    checkedItems: [],
    checkeRItems: [],
    checkedPItems: [],
    setCheckedItems: () => { },
    setCheckedRItems: () => { },
    setCheckedPItems: () => { },
    showMingChatRoom: false,
    setShowMingChatRoom: () => { },
});

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [selectedSticker, setSelectedSticker] = useState<number | null>(null);
    const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
    const [checkedItems, setCheckedItems] = useState<{ id: number, title: string }[]>([]);
    const [checkeRItems, setCheckedRItems] = useState<{ id: number, title: string }[]>([]);
    const [checkedPItems, setCheckedPItems] = useState<{ id: number, title: string }[]>([]);
    const [showMingChatRoom, setShowMingChatRoom] = useState(false);
    return (
        <AppContext.Provider value={{
            selectedSticker,
            setSelectedSticker,
            selectedAnimal,
            setSelectedAnimal,
            checkedItems,
            checkeRItems,
            checkedPItems,
            setCheckedItems,
            setCheckedRItems,
            setCheckedPItems,
            showMingChatRoom,
            setShowMingChatRoom,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
