import Middle from "./components/Middle";
import RightComp from "./components/RightComp";
import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Home() {

  const user = await currentUser();

  return <div className="flex gap-3">
    <RightComp user={user}/>
    <Middle user={user}/>
  </div>
}
