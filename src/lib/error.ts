import { AxiosError } from "axios";

const serverErrorMsg = "Internal Server Error";

export const resolveAxiosError = (error: any) => {
  if (error instanceof AxiosError) {
    return error.response?.data;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return serverErrorMsg;
  }
};

export const resolveError = (error: any) => {
  if (error instanceof Error) {
    return error.message;
  } else {
    return serverErrorMsg;
  }
};
