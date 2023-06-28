import { ERROR_MESSAGES, REGEX_EMAIL } from '../utils/constants';

export function validateEmail(email) {
  if (email !== undefined) {
    if (email.length === 0) {
      return {
        invalid: true,
        message: (ERROR_MESSAGES.NOT_EMPTY)
      };
    } else if (!REGEX_EMAIL.test(email.toLowerCase())) {
      return {
        invalid: true,
        message: (ERROR_MESSAGES.EMAIL_ERROR)
      };
    } else if (REGEX_EMAIL.test(email.toLowerCase())) {
      return {
        invalid: false,
        message: ''
      };
    }
  } else {
    return {
      invalid: true,
      message: ''
    };
  }
}