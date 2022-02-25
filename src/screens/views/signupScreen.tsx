import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import {
  widthPercentageToDP as WidthScreen,
  heightPercentageToDP as HeightScreen,
} from "react-native-responsive-screen";
import styleinput from "../../stylesheet/components/inputbox";
import styleButton from "../../stylesheet/components/button";
import InputBox from "../components/inputbox";
import style from "../../stylesheet/views/signinscreen";
import { Formik } from "formik";
import * as yup from "yup";
import errStyle from "../../stylesheet/sharable/ErrorText";
import { useRoute } from "@react-navigation/native";
import Colors from "../../stylesheet/color";

const registrationSchema = yup.object({
  names: yup
    .string()
    .required()
    .min(3)
    .matches(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Only characters are allowed."),
  contact: yup
    .string()
    .required()
    .max(10)
    .matches(/^(27|0)[6-8][0-8]{8}/, "Invalid contacts number provided."),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required('Required')
    .min(8, "Weak")
    .matches(
      /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
      "Mediate"
    ),
});


const SignUpScreen = ({ navigation }) => {
  const [checked, setChecked] = useState("checked");
  const [nameVisibility, setnameVisibility] = useState(true);
  const [contactVisibility, setcontactVisibility] = useState(true);
  const [emailVisibility, setemailVisibility] = useState(true);
  const [passwordVisibility, setpasswordVisibility] = useState(true);

  

  const [weak, setWeak] = useState(false)
  const [mediate, setmediate] = useState(false)
  const [strong, setStrong] = useState(false)

  const route = useRoute();
  const [browsed, setbrowsed] = useState(route.params.screen);


  const handlePassValidator = (password) =>
  {
    /[^\w\*]/.test(password) || /[^a-z]/.test(password) || / [^ A - Z] /.test(password) || /[^0-9]/.test(password) && password.length > 8 ? setWeak(true) : setWeak(false);
  }


  const handleRememberMe = () => {
    if (checked === "checked") {
      setChecked("unchecked");
    } else {
      setChecked("checked");
    }
  };
  const handleSignIn = () => {
    navigation.navigate("signinscreen", { screen: route.params.screen });
  };

  const handleRegister = (values) => {
    navigation.navigate(route.params.screen);
  };

  return (
    <View style={style.parent}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.Green} />

      <ScrollView><View>
      <View style={style.mainContainer}>
        <Text style={style.caption}>Sign up to</Text>
        <Text style={style.title}>Quarter 2</Text>

        <Formik
          initialValues={{
            names: "",
            contact: "",
            email: "",
            password: "",
          }}
          onSubmit={(values, onchange) => {
            handleRegister(values);
          }}
          validationSchema={registrationSchema}
        >
          {(props) => (
            <View style={style.container}>
              <View>
                <Text>Full names</Text>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styleinput.fields.email}
                  left={<TextInput.Icon name="account" />}
                  onChangeText={ props.handleChange("names")}
                  value={props.values.names}
                />
                <Text style={errStyle.err}>{props.errors.names}</Text>
              </View>
              <View>
                <Text> Phone number</Text>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styleinput.fields.email}
                  left={<TextInput.Icon name="phone" />}
                  onChangeText={props.handleChange("contact")}
                  value={props.values.contact}
                />
                <Text style={errStyle.err}>{props.errors.contact}</Text>
              </View>
              <View>
                <Text>E-mail</Text>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styleinput.fields.email}
                  left={<TextInput.Icon name="email" />}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <Text style={errStyle.err}>{props.errors.email}</Text>
              </View>
              <View style={style.inputView}>
                <Text>Password</Text>
                <TextInput
                  secureTextEntry={passwordVisibility}
                  left={<TextInput.Icon name="lock" />}
                  right={
                    <TextInput.Icon
                      name={passwordVisibility ? "eye" : "eye-off"}
                      onPress={() => {
                        passwordVisibility
                          ? setpasswordVisibility(false)
                          : setpasswordVisibility(true);
                      }}
                    />
                  }
                  underlineColorAndroid="transparent"
                  style={styleinput.fields.password}
                  onChangeText={ props.handleChange("password")  }
                  value={props.values.password}
                />
                <View style={style.passContainer}>
                  <View style={style.passwordvaidation}>
                  { weak? <View style={{
                      backgroundColor: props.errors.password==='Required'? Colors.Red : Colors.Red,
                      height: 5,
                      width: "30%",
                      borderRadius: 3
                    }}></View>: null}
                   { mediate? <View style={{
                      backgroundColor: props.errors.password === 'Weak' ? Colors.Yellow : Colors.GreyLight,
                      height: 5,
                      width: "30%",
                      borderRadius: 3
                    }}></View>:null}
                    {strong?<View style={{
                      backgroundColor: props.errors.password === 'Strong' ? Colors.Green : Colors.GreyLight,
                      height: 5,
                      width: "30%",
                      borderRadius: 3
                    }}></View>: null}
                  </View>
                  <Text style={style.passwordStatus}>
                    {props.errors.password ? props.errors.password : "Strong"}
                  </Text>
                </View>
              </View>

              <View style={styleinput.checkboxview.view}>
                <Checkbox status={checked} onPress={handleRememberMe} />

                <View>
                  <Text>
                    By creating an account, you aggree to our Term and
                    Conditions
                  </Text>
                </View>
              </View>

              <Button
                mode="text"
                onPress={props.handleSubmit}
                style={styleButton.buttom.buttonYellow}
                uppercase={false}
                labelStyle={styleButton.buttom.labelWhite}
              >
                {" "}
                Register
              </Button>
            </View>
          )}
        </Formik>
      </View>

      </View>
      
      </ScrollView>
          <View style={style.signupview}>
            <Text>Don’t have an account?</Text>
            <Button
              mode="text"
              onPress={handleSignIn}
              uppercase={false}
              labelStyle={styleButton.buttom.labelWhite}
            >
              {" "}
              Sign in
            </Button>
          </View>
    </View>
  );
};

export default SignUpScreen;
