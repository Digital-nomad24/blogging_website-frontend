import { atom } from 'recoil';
import { signupbody,signinbody,createpost, updatepost} from '@naksh_2409/common';
import {z} from "zod"
type UserSignIn = z.infer<typeof signinbody>
type UserSignUp = z.infer<typeof signupbody>
export type createBlog = z.infer<typeof updatepost>
type bug= z.infer<typeof createpost>
export type Posts =  bug &{
    id:string
}
export const useratom = atom({
    key:`${Math.random()}`,
    default: {} as UserSignUp
});
export const tokenatom = atom<string>({
    key: 'token',
    default: ''
});
export const signinatom=atom({
    key:`${Math.random()}`,
    default:{} as UserSignIn
})
export const blogatom=atom({
    key:`${Math.random()}`,
    default:[] as Posts[]
})
export const postUpdateatom=atom({
    key:`${Math.random()}`,
    default:{} as createBlog
})

