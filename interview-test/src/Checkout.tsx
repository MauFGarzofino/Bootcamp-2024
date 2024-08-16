import { useState, useEffect } from 'react';
import styles from './Checkout.module.css';
import { LoadingIcon } from './Icons';
import { getProducts } from './dataService';
import { Product as BaseProduct } from './dataService';

type ProductProps = {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity: number;
  total: string;  
  onAdd: () => void;
  onRemove: () => void;
};

type Product = BaseProduct & {
  orderedQuantity: number;
  total: string;
};

const Product = ({ id, name, availableCount, price, orderedQuantity, total, onAdd, onRemove }: ProductProps) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button 
          className={styles.actionButton} 
          onClick={onAdd} 
          disabled={orderedQuantity >= availableCount}
        >
          +
        </button>
        <button 
          className={styles.actionButton} 
          onClick={onRemove} 
          disabled={orderedQuantity <= 0}
        >
          -
        </button>
      </td>
    </tr>    
  );
}

const Checkout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts().then((data) => {
      const initialProducts = data.map(product => ({
        ...product,
        orderedQuantity: 0,
        total: "0.00",
      }));
      setProducts(initialProducts);
      setLoading(false);
    });
  }, []);

  const handleAdd = (id: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = Math.min(product.orderedQuantity + 1, product.availableCount);
        return {
          ...product,
          orderedQuantity: newQuantity,
          total: (newQuantity * product.price).toFixed(2),
        };
      }
      return product;
    }));
  };
  
  const handleRemove = (id: number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = Math.max(product.orderedQuantity - 1, 0);
        return {
          ...product,
          orderedQuantity: newQuantity,
          total: (newQuantity * product.price).toFixed(2),
        };
      }
      return product;
    }));
  };  

  const orderTotal = products.reduce((acc, product) => acc + parseFloat(product.total), 0);
  const discount = orderTotal > 1000 ? orderTotal * 0.1 : 0;
  const totalAfterDiscount = (orderTotal - discount).toFixed(2);

  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {loading ? <LoadingIcon /> : (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th># Available</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    availableCount={product.availableCount}
                    price={product.price}
                    orderedQuantity={product.orderedQuantity}
                    total={product.total}
                    onAdd={() => handleAdd(product.id)}
                    onRemove={() => handleRemove(product.id)}
                  />
                ))}
              </tbody>
            </table>
            <h2>Order summary</h2>
            {discount > 0 && <p>Discount: ${discount.toFixed(2)}</p>}
            <p>Total: ${totalAfterDiscount}</p>  
          </>
        )}
      </main>
    </div>
  );
};

export default Checkout;