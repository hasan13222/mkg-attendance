import React, { useState } from "react";
import { Slot, Stack } from "expo-router";
import Login from "../components/login";

const RootLayout = () => {
  const [user, setUser] = useState(true);

  return user ? (
    <Stack >
      <Stack.Screen options={{headerShown: false}} name="(tabs)" />
      <Stack.Screen name="Reports" options={{headerShown: false}} />
      <Stack.Screen name="Students" options={{headerShown: false}} />
    </Stack>
  ) : (
    <Login setUser={setUser} />
  );
};

export default RootLayout;
