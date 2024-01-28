import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
   title:  "Pathfinders - chat"
}
export default function SignInPage() {
    return(
        <div>
            <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }}/>
        </div>
    )
}