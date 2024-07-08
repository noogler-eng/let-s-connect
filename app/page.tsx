import Middle from "./components/Middle";
import RightComp from "./components/RightComp";
import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Home() {

  const user = await currentUser();
  const userPlain = JSON.parse(JSON.stringify(user));

  return <div className="flex gap-3">
    <RightComp user={user}/>
    <Middle user={userPlain}/>
  </div>
}
