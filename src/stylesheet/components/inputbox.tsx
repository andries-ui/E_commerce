import { StyleSheet } from "react-native";
import Colors from "../color";

const style = {
  auto: "placeholders",

  fields: {
    email: {
      maxLength: 250,
      autoCorrect: false,
      keyboardType: "email-address",
      autoCapitalize: "none",
      underlineColorAndroid: "transparent",
      backgroundColor: Colors.GreyLight,
      borderRadius: 7,
      letterSpacing: 5,
      height: 40,
      minWidth: "48%",
      //onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus()
    },
    password: {
      maxLength: 70,
      secureTextEntry: true,
      underlineColorAndroid: "transparent",
      backgroundColor: Colors.GreyLight,
      borderRadius: 7,
      keyboardType: "password",
      letterSpacing: 5,
      height: 40,
      minWidth: "50%",
    },
  },
  checkboxview: {
    view: {
      flexDirection: "row",
      alignItems: "center",
      width: "90%",
    },
  },
};

   

export default style;

