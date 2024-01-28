import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Pathfinders - Sign-up "
}


export default function SignUpPage() {
    return(
        <div>
            <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }}/>
        </div>
    )
}