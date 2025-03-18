import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProp = {
  label: string;
  setSelectedImage: (uri: string) => void;
};

export default function Button({ label, setSelectedImage }: ButtonProp) {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: false,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Image selection canceled.");
    }
  };

  return (
    <View style={style.buttonContainer}>
      <Pressable style={style.button} onPress={pickImageAsync}>
        <FontAwesome
          name="picture-o"
          size={18}
          color="yellow"
          style={style.buttonIcon}
        />
        <Text style={style.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    borderWidth: 4,
    borderRadius: 10,
    padding: 3,
    borderColor: "yellow",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: { paddingRight: 12 },
  buttonLabel: {
    color: "black",
    fontSize: 16,
  },
});
