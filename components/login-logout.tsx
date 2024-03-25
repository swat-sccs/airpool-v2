import { signIn, signOut } from 'next-auth/react'
export const LoginButton = (props: any) => {
  return <button className={props.className} onClick={() => signIn()}>Sign in</button>
}
export const LogoutButton = (props:any) => {
  return <button className={props.className} onClick={() => signOut()}>Sign Out</button>
}