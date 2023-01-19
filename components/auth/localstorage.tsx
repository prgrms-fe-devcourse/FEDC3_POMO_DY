export const setLocalstorage = (key: string, value: string) => {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLocalstorage = (key: string) => {
  try {
    if (typeof window !== 'undefined') {
      const localItem = window.localStorage.getItem(key);
      return localItem;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocalstorage = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
