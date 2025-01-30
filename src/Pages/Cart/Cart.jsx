import useCart from "../../hooks/useCart";
import CartItemRow from "../../components/CartItemRow";

export default function Cart() {
  const { cartItems, handleCartDelete } = useCart();

  return (
    <main>
      <section className="px-5 py-10 md:container md:mx-auto md:px-0 md:py-20">
        <h2 className="font-merriweather text-center text-xl font-medium md:text-3xl">
          Shopping Cart
        </h2>

        <table className="mt-10 w-full">
          <thead className="bg-gray-100">
            <tr className="divide-x divide-white text-left">
              <th className="w-20 px-3 py-2">Image</th>
              <th className="px-3 py-2">Product Name</th>
              <th className="px-3 py-2 text-center">Quantity</th>
              <th className="px-3 py-2 text-center">Unit Price</th>
              <th className="px-3 py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  handleCartDelete={handleCartDelete}
                />
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
