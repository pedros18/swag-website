import { SignIn } from "@clerk/nextjs";
import "../../styles/global.css"
 
export default function Page() {
  return (
    <div className="fl">
  <SignIn afterSignInUrl="/uploads" />
  </div>
  )
}