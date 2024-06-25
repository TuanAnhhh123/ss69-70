import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../../interface/interface";

export default function Cart() {
    const cart: any = useSelector(state => state);

    // Calculate total amount
    const totalAmount = cart.cartReducer.reduce((total: number, product: Product) => {
        return total + (product.price * product.quantity);
    }, 0);

    return (
        <div>
            <h2>Cart</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.cartReducer.map((product: Product, index: number) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                <img src={product.image} alt={product.name} />
                            </td>
                            <td>{product.price}</td>
                            <td>
                                <button>+</button>
                                {product.quantity}
                                <button>-</button>
                            </td>
                            <td><button>Xóa</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Tổng tiền phải trả: {totalAmount}</p>
        </div>
    );
}
