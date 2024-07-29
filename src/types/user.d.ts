type User = {
  id: string;
  name?: string;
  role: Role;
  email?: string;
  phoneNumber?: string;
  blockStatus: boolean;
  countryDetails?: CountryDetails;
  password?: string;
  emailVerify: VerifyData;
  phoneVerify: VerifyData;
  dob?: string;
  avatar?: string;
  avatarPath?: string;
  isOnline: boolean;
  lastOnline?: string;
  fcmToken?: FcmToken;
  createdAt: string;
  updatedAt: string;
};

type FcmToken = {
  web?: string;
  android?: string;
  ios?: string;
};

type CountryDetails = {
  countryName?: string;
  countryCode?: string;
  countryPhone?: string;
};

type VerifyData = {
  isVerified: boolean;
  otp?: number;
  otpExpiry?: DateTime;
};

type Role = "admin" | "user";
