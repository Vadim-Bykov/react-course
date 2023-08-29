import styles from './styles.module.css';
import { User } from '../types';
import { MIN_AGE } from '@/components/users/constants/rules';
import clsx from 'clsx';

export function User({
  user,
  ageRestriction,
}: {
  user: User;
  ageRestriction: boolean;
}) {
  const currentYear = new Date().getFullYear();
  const birthYear = user.birthDate.split('-')[0];

  const fullYearAge = currentYear - +birthYear;
  const prohibited = ageRestriction && fullYearAge < MIN_AGE;

  return (
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
  );
}
