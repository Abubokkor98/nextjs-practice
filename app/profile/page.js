import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();
//   console.log(user);

  return (await isAuthenticated()) ? (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Welcome to your profile, {user?.given_name}!
        </h1>
        <p className="text-secondary text-lg mb-6">
          This is your protected profile page.
        </p>
        <div className="mb-4">
          <img
            src={user?.picture}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto border-2 border-teal-500"
          />
        </div>
      </div>
    </>
  ) : (
    <p className="text-gray-600 mb-6 text-center">
      Please{" "}
      <LoginLink className="text-teal-500 font-medium underline">
        log in
      </LoginLink>{" "}
      to view this page.
    </p>
  );
}
