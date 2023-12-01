import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigators/Root";

SplashScreen.preventAutoHideAsync();

const loadFonts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};
const loadImages = (images) =>
  images.map((img) => {
    if (typeof img === "string") {
      return Image.prefetch(img);
    } else {
      return Asset.loadAsync(img);
    }
  });

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        const fonts = loadFonts([Ionicons.font, MaterialCommunityIcons.font]);
        const images = loadImages([
          require("./assets/icons/icon.png"),
          "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        ]);
        await Promise.all([...fonts, ...images]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Root />
    </NavigationContainer>
  );
}
