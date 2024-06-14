import Image from "next/image";
import { CheckoutProductDetails } from "../_components/checkout-product-details";


const Checkout = () => {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2">
        <Image src={"/images/user.jpg"} alt="User" width={50} height={50} className="rounded-full" />
        <h2 className="font-medium font-rubik">John Doe</h2>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 container mx-auto">
      <CheckoutProductDetails />
    </div>
    </div>
  );
};
export default Checkout;
