import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { AppProvider } from './src/context/AppContext';
const App = () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
