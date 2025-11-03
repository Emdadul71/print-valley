export const isAuthenticated = (userTokenCookie: string) => {
  if (userTokenCookie) {
    return true;
  }
  return false;
};
export const isUserRoute = (userRole: string, requiredRole: string) => {
  if (userRole === requiredRole) {
    return true;
  }
  return false;
};

export const isPaidUser = (isVerified: string) => {
  if (isVerified === "ALIVE") {
    return true;
  }
  return false;
};
