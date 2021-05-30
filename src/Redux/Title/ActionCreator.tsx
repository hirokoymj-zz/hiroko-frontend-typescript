import { SET_TITLE, RESET_TITLE } from "./Actions";

export const setTitle = (title: string) => {
  return {
    type: SET_TITLE,
    title,
  };
};

export const resetTitle = (title: string) => {
  return {
    type: RESET_TITLE,
  };
};
