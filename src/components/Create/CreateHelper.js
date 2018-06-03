export const submitDisabled = (numChildren, formData) => (
  !(numChildren === Object.keys(formData).length)
);
