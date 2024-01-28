import { SignUp } from "@clerk/nextjs";


export default function SignUpPage() {
    return(
        <div className="flex h-screen item-center justify-center">
        <SignUp appearance={{ variables: { colorPrimary: "0F172A"}}}/>
        </div>
    )
    }