export const setLocalstorage = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getLocalstorage = (key: string) => {
  try {
    const localItem = window.localStorage.getItem(key);
    return localItem;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteLocalstorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error: any) {
    throw new Error(error);
  }
};
