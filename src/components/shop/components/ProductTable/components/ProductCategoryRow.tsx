import { Product } from '@/app/page';

export function ProductCategoryRow({
  category,
}: {
  category: Product['category'];
}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
