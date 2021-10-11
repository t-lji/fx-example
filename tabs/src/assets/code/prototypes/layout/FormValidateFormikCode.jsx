import React from "react";
import { 
  Box,
  Flex,
  Form,
  FormInput, 
  FormButton,
  FormDropdown,
  Header, 
  Segment,
  Text } from '@fluentui/react-northstar';
import { Formik } from 'formik';

export default function FormValidateFormik() {
  return (
    <Box>
      <Box styles={{ marginTop: '20px' }}>
          <Segment>
            <Header as="h3" content="List with context menu" />
            <Text>Context menu can be opened by clicking on the more button or by right mouse button</Text>
          </Segment>
          <Segment>
            <Flex>
              <Formik
                initialValues={{
                  firstName: '',
                  city: '',
                }}
                validate={values => {
                  const errors: {
                    firstName?: string;
                    city?: string;
                  } = {};
                  if (!values.firstName) {
                    errors.firstName = 'Required';
                  }
                  if (values.firstName && values.firstName.length < 4) {
                    errors.firstName = 'Too small';
                  }
                  if (!values.city.length) {
                    errors.city = 'Required';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // eslint-disable-next-line no-console
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }}
                render={({ handleSubmit, handleChange, errors, handleBlur, setTouched, touched, values, setFieldValue }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormInput
                      errorMessage={touched.firstName && errors.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      showSuccessIndicator={Boolean(values.firstName.length >= 4)}
                      label="First Name"
                      name="firstName"
                      id="first-name-inline"
                    />
                    <FormDropdown
                      onBlur={e => {
                        setTouched({ ...touched, city: true });
                      }}
                      onChange={(e, props) => {
                        setFieldValue('city', props.value);
                      }}
                      label="City"
                      id="city"
                      errorMessage={touched.city && errors.city}
                      items={['prague', 'new york']
                    }
                    />
                    <FormButton content="Submit" />
                  </Form>
                )}
              />
            </Flex>
          </Segment>
        </Box>
      </Box>
  )
}