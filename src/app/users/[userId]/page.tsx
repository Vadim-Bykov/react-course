"use client";

import { getUserById } from "@/api/users";
import { User } from "@/layout/users/components/User";
import { User as UserType } from "@/layout/users/types";
import { useEffect, useState } from "react";
import Loading from "../../loading";
import { ErrorComponent } from "@/components/common/ErrorComponent";

interface Props {
  params: { userId: string };
}

export default function UserPage({ params: { userId } }: Props) {
  const [user, setUser] = useState<UserType>();
  const [errorMessage, setErrorMessage] = useState<string>();

  // throw new Error();

  // useEffect(() => {
  //   const retrieveUserData = async () => {
  //     try {
  //       const userData = await getUserById(userId);
  //       setUser(userData);
  //     } catch (error: any) {
  //       setErrorMessage(error.message);
  //     }
  //   };

  //   retrieveUserData();
  // }, [userId]);

  useEffect(() => {
    getUserById(userId)
      .then((data) => setUser(data))
      .catch((err) => setErrorMessage(err.message));
  }, [userId]);

  if (errorMessage) return <ErrorComponent message={errorMessage} />;
  if (!user) return <Loading />;

  return (
    <>
      <div>User id: {userId}</div>
      {user && <User user={user} detailsLink={false} />}
    </>
  );
}
