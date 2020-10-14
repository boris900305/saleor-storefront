import { Formik } from "formik";
import React from "react";

import { FormComponent, FormContainer } from "react-authorize-net";
import { Box } from "rebass";

import * as S from "./styles";
import { IProps } from "./types";

let clientKey = "test";
let apiLoginId = "test";

/**
 * Authorize payment gateway.
 */
const AuthorizePaymentGateway: React.FC<IProps> = ({
  config,
  processPayment,
  formRef,
  formId,
  errors = [],
  onError,
  onSubmit,
}: IProps) => {

  const onErrorHandler = (response: any) => {
    
  };

  const onSuccessHandler = (response: any) => {
    
  };


  return (
    <Formik
      initialValues={null}
      onSubmit={async (values, { setSubmitting }) => {
        // await onSubmit(stripe, elements);
        // setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        isSubmitting,
        isValid,
      }) => (
        <S.Form id={formId} ref={formRef} onSubmit={handleSubmit}>   
          <Box className="App" p={3}>
            <FormContainer
              environment="sandbox"
              onError={onErrorHandler}
              onSuccess={onSuccessHandler}
              render={FormComponent}
              clientKey={clientKey}
              apiLoginId={apiLoginId}
            />               
          </Box>
        </S.Form>
      )}
    </Formik>
  );
};

export { AuthorizePaymentGateway };
