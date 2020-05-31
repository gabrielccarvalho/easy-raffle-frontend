const TOKEN_KEY = 'Token';
const USER = 'User';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = async () => await localStorage.getItem(TOKEN_KEY);

export const getUser = async () => JSON.parse(await localStorage.getItem(USER));

export const setUser = async user =>
  await localStorage.setItem(USER, JSON.stringify(user));

export const login = async (token, user) => {
  await localStorage.setItem(TOKEN_KEY, token);
  await localStorage.setItem(USER, JSON.stringify(user));
};

export const logout = async () => {
  await localStorage.removeItem(TOKEN_KEY);
  await localStorage.removeItem(USER);
};
