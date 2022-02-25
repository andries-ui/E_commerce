import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import PagerView from "react-native-pager-view";
import { FontAwesome5 } from "@expo/vector-icons";
import headerstyle from "../../stylesheet/sharable/hearder";
import Colors from "../../stylesheet/color";
import { Icon } from "react-native-elements";
import CreditCard, { CardImages } from "react-native-credit-card";
import Swiper from "react-native-swiper";
import { Form, Formik } from "formik";
import * as yup from "yup";
import errStyle from "../../stylesheet/sharable/ErrorText";
import styleinput from "../../stylesheet/components/inputbox";
import styleButton from "../../stylesheet/components/button";
import stylelogin from "../../stylesheet/views/signinscreen";

const { height, width } = Dimensions.get("window");
const SWIPER_HEIGHT = 180;

const cardSchema = yup.object({
  names: yup.string().required("Required").min(4),
  number: yup
    .string()
    .required()
    .matches(
      /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/,
      "Invalid card number."
    )
    .length(16),
  expdate: yup
    .string()
    .required("Required")
    .matches(/\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/, "Invalid date"),
  cvv: yup
    .string()
    .required("Required")
    .matches(/^[0-9]{3,4}$/, "invalid pin")
    .length(4),
});

const cardScreen = () => {
  const [addcard, setaddcard] = useState(false);
  const [Statusbarcolor, setStatusbarcolor] = useState(Colors.Grey);

  const handleAddNewCard = () => {
    addcard ? setaddcard(false) : setaddcard(true);

    addcard ? setStatusbarcolor(Colors.Grey) : setStatusbarcolor(Colors.Green);
  };

  

  const handleRegisterCard = (props: any) => {
    console.log("");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.White,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={Statusbarcolor} />

      <View style={headerstyle.container}>
        <View style={headerstyle.icon}>
          <Icon type="ionicon" name="card" size={28} />
        </View>
        <Text style={headerstyle.text}>Cards </Text>
      </View>

      <View
        style={{
          width: "100%",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      ></View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          flex: 0.2,
          justifyContent: "center",
          paddingBottom: 25,
        }}
      >
        <Button
          mode="contained"
          style={{
            backgroundColor: Colors.Grey,
            borderRadius: 8,
            width: "80%",
            elevation: 0,
          }}
          onPress={handleAddNewCard}
          uppercase={false}
          labelStyle={{ fontSize: 16, color: Colors.Green }}
        >
          {" "}
          Add new card
        </Button>
      </View>

      {addcard ? (
        <View
          style={{
            backgroundColor: Colors.Green,
            width: "100%",
            flex: 0.4,
            marginBottom: 0,
            position: "absolute",
            height: "100%",
          }}
        >
          <View style={headerstyle.container}>
            <View style={headerstyle.icon}>
              <Icon
                onPress={handleAddNewCard}
                type="ionicon"
                name="arrow-back"
                size={28}
              />
            </View>
            <Text style={headerstyle.text}>Cards </Text>
          </View>

          <ScrollView>
            <View>
              <View
                style={{
                  marginHorizontal: 30,
                  alignSelf: "center",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 215,
                }}
              >
                <Image
                  source={require("../../../assets/images/addcard-front.png")}
                  resizeMode={"cover"}
                />
                <View
                  style={{
                    position: "absolute",
                    padding: 40,
                    height: "100%",
                    width: "100%",
                    marginHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.White,
                      fontSize: 16,
                      fontWeight: "900",
                      width: "100%",
                      backgroundColor: Colors.Blue,
                      alignText: "right",
                    }}
                  >
                    **** **** **** 1107
                  </Text>

                  <Text
                    style={{
                      color: Colors.White,
                      fontSize: 16,
                      fontWeight: "900",
                      width: "100%",
                      alignText: "right",
                      backgroundColor: Colors.Blue,
                    }}
                  >
                    Karabo
                  </Text>

                  <Text
                    style={{
                      color: Colors.White,
                      fontSize: 16,
                      width: "100%",
                      fontWeight: "bold",
                      alignSeft: "end",
                      backgroundColor: Colors.Blue,
                    }}
                  >
                    3/24
                  </Text>
                </View>
              </View>

              <View style={styles.containerform}>
                <Formik
                  initialValues={{
                    names: "",
                    number: "",
                    expdate: "",
                    cvv: "",
                  }}
                  onSubmit={(values, action) => {
                    handleRegisterCard(values);
                  }}
                  validationSchema={cardSchema}
                >
                  {(props) => (
                    <View>
                      <View>
                        <TextInput
                          left={<TextInput.Icon name="account" />}
                          underlineColorAndroid="transparent"
                          style={styleinput.fields.email}
                          placeholder="card holder names"
                          onChangeText={props.handleChange("names")}
                          value={props.values.names}
                        />

                        <Text style={errStyle.err}>
                          {props.errors.names?.toString()}
                        </Text>
                      </View>
                      <View>
                        <TextInput
                          left={<TextInput.Icon name="card-bulleted" />}
                          underlineColorAndroid="transparent"
                          style={styleinput.fields.email}
                          placeholder="card number"
                          onChangeText={props.handleChange("number")}
                          value={props.values.number}
                        />

                        <Text style={errStyle.err}>
                          {props.errors.number?.toString()}
                        </Text>
                      </View>
                      <View style={styles.flexContainer}>
                        <View>
                          <TextInput
                            left={<TextInput.Icon name="calendar-range" />}
                            underlineColorAndroid="transparent"
                            style={styleinput.fields.email}
                            placeholder="expiry date"
                            onChangeText={props.handleChange("expdate")}
                            value={props.values.expdate}
                          />

                          <Text style={errStyle.err}>
                            {props.errors.expdate?.toString()}
                          </Text>
                        </View>
                        <View>
                          <TextInput
                            left={<TextInput.Icon name="code-equal" />}
                            underlineColorAndroid="transparent"
                            style={styleinput.fields.email}
                            placeholder="CVV"
                            onChangeText={props.handleChange("cvv")}
                            value={props.values.cvv}
                          />

                          <Text style={errStyle.err}>
                            {props.errors.cvv?.toString()}
                          </Text>
                        </View>
                      </View>

                      <Button
                        title="submit"
                        style={styles.button}
                        uppercase={false}
                        labelStyle={styleButton.buttom.labelWhite}
                        onPress={props.handleSubmit}
                      >
                        {" "}
                        Submit
                      </Button>
                    </View>
                  )}
                </Formik>
              </View>
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
  },
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    paddingTop: 30,
  },
  containerform: {
    borderTopEndRadius: 22,
    borderTopStartRadius: 22,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    height: height - 300,
    backgroundColor: Colors.Grey,
  },
  flexContainer: {
    borderRadius: 12,
    padding: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    height: SWIPER_HEIGHT,
  },
  slide: {
    height: SWIPER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {},
  card: {
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 3,
    elevation: 3,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  button: {
    height: 40,
    backgroundColor: Colors.Green,
    justifyContent: "center",
    marginTop: 0,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
  },
});

export default cardScreen;
