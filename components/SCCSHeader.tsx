'use client'
import styles from "./SCCSHeader.module.css"
import Image from "next/image"
import sccsLogo from "@/img/sccs-dark-logo.png"
import { LoginButton } from './login-logout'
import { LogoutButton } from './login-logout'
import { useSession } from 'next-auth/react';

// TODO: Add hamburger drop-down icon in the top right

export default  function SCCSHeader(){
    const { data: session } = useSession();
    return (
        <header className={styles.SCCSHeader + " h-[49px] md:h-[60px] bg-primary"}>
            <Image src={sccsLogo} width={48} height={48} alt={"SCCS"}/>
            {session ? (
                <>
                <LogoutButton className="px-4 py-2 m-2 bg-blue-500 hover-bg-blue-700 text-white font-semibold rounded" />
                </>
            ) : (
                <LoginButton className="px-4 py-2 m-2 bg-blue-500 hover-bg-blue-700 text-white font-semibold rounded" />
            )}
        </header>
    );
}