import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>About screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default AboutScreen;
