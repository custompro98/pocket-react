export const submitDisabled = (formData) => (
  !(formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.password &&
    formData.password === formData.confirmPassword)
);
