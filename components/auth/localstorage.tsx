export const setLocalstorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    throw new Error(error);
  }
};

export const getLocalstorage = (key) => {
  try {
    const localItem = window.localStorage.getItem(key);
    return localItem;
  } catch (error) {
    throw new Error(error);
  }
};
