import api from "../api/axios"
import type { SignInRequest, SignUpRequest } from "../interfaces/User"

export const signUp=(user: SignUpRequest)=>{
    return api.post("/auth/signup/user", user).then((response)=>response.data)
}

export const sendOtp=(userId: string)=>{
    return api.post(`/auth/sendOtp?userId=${encodeURIComponent(userId)}`).then((response)=>response.data)
}

export const verifyOtp=(userId: string, emailOtp: string, phoneOtp: string)=>{
    return api.post(`/auth/verify?userId=${encodeURIComponent(userId)}&emailOtp=${encodeURIComponent(emailOtp)}&phoneOtp=${encodeURIComponent(phoneOtp)}`).then((response)=>response.data)
}

export const signIn=(user: SignInRequest)=>{
    return api.post('auth/login',user).then((response)=>response.data);
}