import styles from "./styles.module.css";
import { User } from "../types";
import { MIN_AGE } from "@/layout/users/constants/rules";
import clsx from "clsx";
import Link from "next/link";

export function User({
  user,
  ageRestriction,
  detailsLink = true,
}: {
  user: User;
  ageRestriction?: boolean;
  detailsLink?: boolean;
}) {
  const currentYear = new Date().getFullYear();
  const birthYear = user.birthDate.split("-")[0];

  const fullYearAge = currentYear - +birthYear;
  const prohibited = ageRestriction && fullYearAge < MIN_AGE;

  return (
    <>
      <div
        className={clsx(styles.userContainer, prohibited && styles.prohibited)}
      >
        <span className={styles.text}>
          Name: {user.firstname} {user.lastname}.
        </span>
        <span className={styles.text}>Birth date: {user.birthDate}</span>
        <span className={styles.text}>Age: {fullYearAge}</span>
        <span className={styles.text}>Email: {user.email}</span>
      </div>
      {detailsLink && (
        <div className="mb-3">
          <Link className="underline" href={`/users/${user.id}`}>
            Details
          </Link>
        </div>
      )}
    </>
  );
}
