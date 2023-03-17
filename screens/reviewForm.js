import React from "react";
import { Formik, useFormik } from "formik";
import { Button, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { TextInput } from "react-native-gesture-handler";
import * as Yup from "yup";
import FlatButton from "../share/button";

export default function ReviewForm({ addReview }) {
  const ReviewSchema = Yup.object({
    title: Yup.string().required().min(4),
    body: Yup.string().required().min(8),
    rating: Yup.string()
      .required()
      .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      rating: "",
    },
  });

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
        validationSchema={ReviewSchema}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur("rating")}
            ></TextInput>
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

            <FlatButton
              text="submit"
              onPress={formikProps.handleSubmit}
            ></FlatButton>
          </View>
        )}
      </Formik>
    </View>
  );
}
