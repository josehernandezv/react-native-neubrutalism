import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { shadowStyle } from "./styles";

export default function TextInput(props) {
  const { style, ...otherProps } = props;
  return (
    <NativeTextInput
      style={[styles.input, shadowStyle, style]}
      placeholderTextColor="#000"
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 2,
    fontFamily: "InriaSans_300Light",
    fontSize: 16,
  },
});
