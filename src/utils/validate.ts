export const required = (value: string) =>
  value ? undefined : ErrMsg.required;

const ErrMsg = {
  required: '必須項目',
};
