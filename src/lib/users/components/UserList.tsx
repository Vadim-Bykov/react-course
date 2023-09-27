import styles from "./styles.module.css";
import { User as UserType } from "../types";
import { User } from "./User";
import { MIN_AGE } from "@/lib/users/constants/rules";

export function UserList({
  users,
  filterText,
  ageRestriction,
}: {
  users: UserType[];
  filterText: string;
  ageRestriction: boolean;
}) {
  const filterProduct = (user: UserType) => {
    if (user.firstname.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    // if (ageRestriction) {
    //   const currentYear = new Date().getFullYear();
    //   const birthYear = user.birthDate.split('-')[0];

    //   const fullYearAge = currentYear - +birthYear;

    //   if (fullYearAge < MIN_AGE) return;
    // }

    return user;
  };

  const usersData: UserType[] = users.filter(filterProduct);

  return (
    <div>
      <div className={styles.listTitle}>Users</div>
      {usersData.map((user) => (
        <User user={user} key={user.id} ageRestriction={ageRestriction} />
      ))}
    </div>
  );
}
