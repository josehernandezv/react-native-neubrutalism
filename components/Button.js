import { TouchableOpacity, StyleSheet } from "react-native";
import { shadowStyle } from "./styles";
import Title from "./Title";

export default function Button(props) {
  const { style, ...otherProps } = props;
  return (
    <TouchableOpacity
      style={[styles.button, shadowStyle, style]}
      {...otherProps}
    >
      <Title style={styles.text}>{props.children}</Title>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ed36ff",
    height: 45,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
  },
});
