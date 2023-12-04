export const getToken = () => {
  return localStorage.getItem('jwt');
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem('jwt', token);
  }
};

export const removeToken = () => {
  localStorage.removeItem('jwt');
};

export const decodeToken = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};
