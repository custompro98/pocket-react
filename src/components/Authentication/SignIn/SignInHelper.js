export const submitDisabled = (formData) => (
  !(formData.email && formData.password)
);
