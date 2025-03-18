import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
// @ts-expect-error: No type for image import
import PlaceHolderImage from "@/assets/images/background-image.png";
import Button from "@/components/Button";
import { useState } from "react";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={selectedImage ?? PlaceHolderImage} style={style.image} />
      </View>
      <Button label="Open An Image" setSelectedImage={setSelectedImage} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  imageContainer: {},
  image: {
    height: 440,
    width: 320,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
});
