import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import StackRoutes from './routes/StackRoutes'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoutes/>
      </NavigationContainer>
    </PaperProvider>
  );
}

