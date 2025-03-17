import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Page Not Found" }} />
      <View style={style.container}>
        <Link href="/index" style={style.button}>
          Go back to Home
        </Link>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    margin: 10,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#fff",
    borderCurve: "circular",
    fontSize: 20,
    color: "#fff",
  },
});
