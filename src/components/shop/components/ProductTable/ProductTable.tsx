import { Product } from '@/app/page';
import { ProductCategoryRow } from './components/ProductCategoryRow';
import { ProductRow } from './components/ProductRow';

export function ProductTable({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}) {
  const filterProduct = (product: Product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    return product.category === 'Fruits';
  };

  const fruits: Product[] = products.filter(filterProduct);
  const vegetables: Product[] = products.filter(filterProduct);

  return (
    <>
      <ProductCategoryRow category='Fruits' />
      {fruits.map((fruit) => (
        <ProductRow product={fruit} key={fruit.name} />
      ))}

      <ProductCategoryRow category='Vegetables' />
      {vegetables.map((vegetable) => (
        <ProductRow product={vegetable} key={vegetable.name} />
      ))}
    </>
  );
}
