export interface SignUpRequest {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface SignInRequest{
  identifier: string;
  password: string;
}

export interface UserRole{
  userType: string;
}

export interface NavBarProps{
  isAdmin?: boolean;
  userImage?: string;
}