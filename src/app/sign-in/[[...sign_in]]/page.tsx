import { SignIn } from "@clerk/nextjs";


export default function SignInPage() {
    return(
        <div className="flex h-screen item-center justify-center">
        <SignIn appearance={{ variables: { colorPrimary: "0F172A"}}}/>
        </div>
    )
    }