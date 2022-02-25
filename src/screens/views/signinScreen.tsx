import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";

import Colors from "../../stylesheet/color";
import styleinput from "../../stylesheet/components/inputbox";
import styleButton from "../../stylesheet/components/button";
import InputBox from "../components/inputbox";
import style from "../../stylesheet/views/signinscreen";
import { Form, Formik } from "formik";
import * as yup from "yup";
import errStyle from '../../stylesheet/sharable/ErrorText'
import { useRoute } from "@react-navigation/native";

const loginSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});



const SignInScreen = ({ navigation}) =>
{

  const route = useRoute();
  const [hidePassword, setHidePassword] = useState(true);
  const [isPassword] = useState(true);
  const [checked, setChecked] = useState("checked");
  const [visible, setVisible] = useState(true);
  const [browsed, setbrowsed] = useState(null);

  const handleSignUp = () => {
    navigation.navigate("signupscreen", { screen: route.params.screen });
  };

  const handleRememberMe = () => {
    if (checked === "checked") {
      setChecked("unchecked");
    } else {
      setChecked("checked");
    }
  };

  const handleSignIn = (values: any) =>
  {
    navigation.navigate(route.params.screen);
  
    console.log( values );
    
  };

  return (
    <View style={style.parent}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.Green} />
     
      <View style={style.mainContainer}>
        <Text style={style.caption}>Sign in to</Text>
        <Text style={style.title}>Quarter 2</Text>
        <View style={style.container}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, action) => {
              handleSignIn(values);
            }}
            validationSchema={loginSchema}
          >
            {(props) => (
              <View>
                <View>
                  <Text>E-mail </Text>
                  <TextInput
                    left={<TextInput.Icon name="email" />}
                    underlineColorAndroid="transparent"
                    style={styleinput.fields.email}
                    placeholder="E-mail"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />

                  <Text style={errStyle.err}>
                    {props.errors.email?.toString()}
                  </Text>
                </View>
                <View style={style.inputView}>
                  <Text>Password</Text>
                  <TextInput
                    secureTextEntry={visible}
                    right={
                      <TextInput.Icon
                        name={visible ? "eye" : "eye-off"}
                        onPress={() => {
                          visible ? setVisible(false) : setVisible(true);
                        }}
                      />
                    }
                    left={<TextInput.Icon name="lock" />}
                    underlineColorAndroid="transparent"
                    style={styleinput.fields.password}
                    placeholder="Password"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                  />
                  <Text style={errStyle.err}>
                    {props.errors.password?.toString()}
                  </Text>
                </View>

                <View style={styleinput.checkboxview.view}>
                  <Checkbox status={checked} onPress={handleRememberMe} />
                  <Text>Remember me</Text>
                </View>

                <Button
                  title="submit"
                  style={styleButton.buttom.buttonYellow}
                  uppercase={false}
                  labelStyle={styleButton.buttom.labelWhite}
                  onPress={props.handleSubmit}
                >
                  {" "}
                  Signin
                </Button>
              </View>
            )}
          </Formik>
        </View>

        <Button
          mode="text"
          style={styleButton.buttom.button}
          onPress={handleSignIn}
          uppercase={false}
          labelStyle={styleButton.buttom.labelWhite}
        >
          {" "}
          Browse for now
        </Button>
      </View>
      <View style={style.signupview}>
        <Text>Don’t have an account?</Text>
        <Button
          mode="text"
          onPress={handleSignUp}
          uppercase={false}
          labelStyle={styleButton.buttom.labelWhite}
        >
          {" "}
          Sign up
        </Button>
      </View>
    </View>
  );
};

export default SignInScreen;
