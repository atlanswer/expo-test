import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonProp = {
  label: string;
};

export default function Button({ label }: ButtonProp) {
  return (
    <View style={style.buttonContainer}>
      <Pressable
        style={style.button}
        onPress={() => alert("You pressed a button.")}
      >
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
  buttonLabel: {
    color: "black",
    fontSize: 16,
  },
});
