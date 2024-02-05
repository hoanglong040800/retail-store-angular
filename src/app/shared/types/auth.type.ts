export type LoginRes = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
};

export type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type RegisterOptions = {
  isLoginAfter: boolean;
};
