import React from 'react'
import { Link,  Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

console.log("All Environment Variables:", import.meta.env);
const KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log("Clerk Publishable Key:", KEY);
if (!KEY) {
  throw new Error("Missing Publishable Key")
}
console.log(KEY)


function Layout() {
  return (
    <ClerkProvider publishableKey={KEY} afterSignOutUrl="/">
      <div className='w-full h-16 flex justify-between drop-shadow-xl bg-black px-3 py-3.5'>
        <div>
          <Link className='text-2xl font-extrabold text-white' to="/">
            Logo
          </Link>
        </div>
        <div className='text-white'>
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </ClerkProvider>
  )
}

export default Layout
