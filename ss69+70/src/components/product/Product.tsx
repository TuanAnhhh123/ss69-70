import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../interface/interface";
export default function Products() {
    // lấy dữ liệu ở trong kho đi render
    const products: any = useSelector(state => state);
    const disPatch =useDispatch();
    console.log("sản phẩm", products);
    const addToCart=(product:Product)=>{
        disPatch({
         type:"ADD_TO_CART",
         payload:product
        })
    }
    return (
        <div>Product
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>tên sản phẩm</th>
                        <th>mô tả</th>
                        <th>ảnh</th>
                        <th>giá</th>
                        <th>số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.productReducer.map((product: Product, index: number) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <img src={product.image} alt="" />
                                </td>
                                <td>{product.price}</td>
                                <td><button onClick={() => addToCart(product)}>add to cart</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}