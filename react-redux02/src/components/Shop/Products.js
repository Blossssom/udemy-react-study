import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'Book', description: 'dummy 1 data' },
  { id: 'p2', price: 4, title: 'Cup', description: 'dummy 2 data' },
  { id: 'p3', price: 7, title: 'Case', description: 'dummy 3 data' },
  { id: 'p4', price: 12, title: 'Perfume', description: 'dummy 4 data' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map(v => {
            return (
              <ProductItem
                key={v.id}
                id={v.id}
                title={v.title}
                price={v.price}
                description={v.description}
              />
            )
          })
        }
        
      </ul>
    </section>
  );
};

export default Products;
