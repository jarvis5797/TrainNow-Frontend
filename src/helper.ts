export const doLogin = (token: string, next: () => void) => {
  localStorage.setItem("token", JSON.stringify(token));
  next();
};

export const doLogout = (next: () => void) => {
  localStorage.removeItem("token");
  next();
};

export const isLoggedIn = (): boolean => {
  return localStorage.getItem("token") !== null;
};
