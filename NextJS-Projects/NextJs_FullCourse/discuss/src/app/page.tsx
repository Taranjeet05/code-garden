import { Button } from "@/components/ui/button";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <div className="">
        <h1 className="text-5xl text-center font-mono">Home Page</h1>
        <div className="flex justify-start space-x-4 m-7">
          <form action={signIn}>
            <Button type="submit">SignIn with GITHUB</Button>
          </form>
          <form action={signOut}>
            <Button type="submit">SignOut</Button>
          </form>
        </div>
        {
          session?.user && <div>{JSON.stringify(session.user)}</div>
        }
      </div>
    </>
  );
}
