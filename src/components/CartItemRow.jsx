import { Link } from "react-router";
import { BsTrash3 } from "react-icons/bs";

export default function CartItemRow({
  item,
  handleUpdateQuantity,
  handleCartDelete,
}) {
  const { id, image, title, price, quantity } = item;

  return (
    <tr className="border-b border-gray-200">
      {/* product image */}
      <td className="w-20 px-1.5 py-2 md:px-3">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="w-full" />
        </Link>
      </td>
      {/* title */}
      <td className="px-1.5 py-2 md:px-3">
        <Link to={`/products/${id}`}>{title}</Link>
      </td>
      {/* quanity */}
      <td className="px-1.5 py-2 md:px-3">
        <div className="flex justify-center border border-gray-200 md:w-32">
          <button
            onClick={() => handleUpdateQuantity(id, quantity - 1)}
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
            value={quantity ? quantity : 1}
            className="w-full bg-gray-200 py-1 text-center tabular-nums outline-none"
          />
          <button
            onClick={() => handleUpdateQuantity(id, quantity + 1)}
            className="w-full cursor-pointer py-1 transition-all duration-200 ease-linear hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </td>
      {/* Per Unit Price */}
      <td className="px-1.5 py-2 md:px-3">{price}</td>
      {/* price based on quantiy */}
      <td className="px-1.5 py-2 tabular-nums md:px-3">
        <div className="flex items-center justify-between gap-1.5 md:justify-normal">
          {quantity ? price * quantity : price * 1}
          <button onClick={() => handleCartDelete(item.id)}>
            <BsTrash3 className="hover:text-accent cursor-pointer transition-all duration-200 ease-in-out" />
          </button>
        </div>
      </td>
    </tr>
  );
}
