import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  const Image = session.user.image || undefined;
  // console.dir(session);

  return (
    <div>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
      <img src={Image} alt="User Avatar" />
    </div>
  );
}
