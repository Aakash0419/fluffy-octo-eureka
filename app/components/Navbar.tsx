import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {auth,signOut,signIn} from '@/auth'
 const Navbar = async () => {
    const session = await auth()
  return (
    <header className="px-5 py-3 bg-red-400 shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href='/'>
                <Image src='/logo.jpeg' alt="logo" width={75} height={25}/>
            </Link>
            <div className ='flex items-center gap-5 text-white'>
                {
                    session? (
                        <>
                            <Link href='/startup/create'>
                                <span>Create</span>
                            </Link>
                            <button onClick={signOut}>
                                <span>Logout</span>
                            </button>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>

                        </>
                    ) : (
                        <button onClick={signIn('github')}>
                            <span>Login</span>
                        </button>
                    )
                 }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
