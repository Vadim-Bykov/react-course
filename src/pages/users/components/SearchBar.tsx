import { MIN_AGE } from '@/pages/users/constants/rules';
import styles from './styles.module.css';

export function SearchBar({
  filterText,
  ageRestriction,
  onFilterTextChange,
  onAgeRestrictionChange,
}: {
  filterText: string;
  ageRestriction: boolean;
  onFilterTextChange: (text: string) => void;
  onAgeRestrictionChange: (checked: boolean) => void;
}) {
  return (
    <form style={{ alignSelf: 'center' }}>
      <input
        type='text'
        value={filterText}
        placeholder='Search...'
        onChange={(e) => onFilterTextChange(e.target.value)}
        className={styles.searchInput}
      />
      <label>
        <input
          type='checkbox'
          checked={ageRestriction}
          onChange={(e) => onAgeRestrictionChange(e.target.checked)}
        />{' '}
        Only users over {MIN_AGE}
      </label>
    </form>
  );
}
