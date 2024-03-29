export const ValidationMessages: { [errorCode: string]: string } = {
  required: 'This field is required.',
  email: 'Please provide a valid email.',
  minlength: 'Password should have at least 8 characters.',
  pattern: 'Password should have min 1 number and special character.',
  mismatch: 'Passwords do not match.'
}
