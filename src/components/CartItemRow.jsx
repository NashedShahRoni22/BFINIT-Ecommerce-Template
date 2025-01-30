import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router";

export default function CartItemRow({ item, handleCartDelete }) {
  const { id, image, title, price } = item;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <tr>
      {/* product image */}
      <td className="w-20 px-3 py-2">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="w-full" />
        </Link>
      </td>
      {/* title */}
      <td className="px-3">{title}</td>
      {/* quanity */}
      <td className="px-3 md:w-32">
        <div className="flex justify-center border border-gray-200">
          <button
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className={`w-full py-1 text-lg transition-all duration-200 ease-linear ${quantity > 1 && "cursor-pointer hover:bg-gray-100"}`}
          >
            -
          </button>
          <input
            type="text"
            name="quantity"
            id="quantity"
            readOnly
            value={quantity}
            className="w-full bg-gray-200 py-1 text-center tabular-nums outline-none"
          />
          <button
            onClick={increaseQuantity}
            className="w-full cursor-pointer py-1 transition-all duration-200 ease-linear hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </td>
      {/* Per Unit Price */}
      <td className="text-center md:w-32">{price}</td>
      {/* price based on quantiy */}
      <td className="text-center tabular-nums md:w-32">
        <div className="flex items-center justify-center gap-1.5">
          {price * quantity}
          <button onClick={() => handleCartDelete(item)}>
            <BsTrash3 className="hover:text-accent cursor-pointer transition-all duration-200 ease-in-out" />
          </button>
        </div>
      </td>
    </tr>
  );
}
