import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const FeedBackSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short")
    .max(20, "Too long")
    .required("required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .max(20, "Too long")
    .required("required"),
  massages: Yup.string()
    .min(5, "Too Short")
    .max(200, "Too long")
    .required("required"),
  level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
});

const initialValues = {
  userName: "",
  email: "",
  massages: "",
  level: "good",
};

const FormikForm = () => {
  const userNameId = useId();
  const emailId = useId();
  const massageId = useId();
  const levelId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedBackSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={userNameId}>User name</label>
        <Field name="userName" type="text" id={userNameId} />
        <ErrorMessage name="userName" component="span" />

        <label htmlFor={emailId}>Email</label>
        <Field name="email" type="email" id={emailId} />
        <ErrorMessage name="email" component="span" />

        <label htmlFor={massageId}>Massage</label>
        <Field as="textarea" name="massages" id={massageId} />
        <ErrorMessage name="massages" component="span" />

        <label htmlFor={levelId}>Service satisfaction level</label>
        <Field as="select" id={levelId} name="level">
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </Field>
        <ErrorMessage name="level" component="span" />

        <button type="submit">button</button>
      </Form>
    </Formik>
  );
};
export default FormikForm;
