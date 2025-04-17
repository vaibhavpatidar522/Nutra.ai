import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default page;
