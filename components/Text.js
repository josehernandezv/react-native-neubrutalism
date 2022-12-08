import { Text as NativeText } from "react-native";

export default function Text(props) {
  const { style, ...otherProps } = props;
  return (
    <NativeText
      style={[{ fontFamily: "InriaSans_300Light" }, style]}
      {...otherProps}
    >
      {props.children}
    </NativeText>
  );
}
