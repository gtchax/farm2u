import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Heading from "../components/heading";
import { Button } from "../components/ui/button";
// import Layout from "../components/layout";

const Cart = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <Header />
      <main className="content mt-20 container min-h-screen">
        <Heading title="Your Cart" subtitle="Shopping Basket" />
      </main>
      <Footer>
        <div className="flex flex-col">
          <div className="w-full flex justify-between">
            <div className="flex flex-col items-start">
              <p className="font-mono font-normal text-md">Item Count</p>
              <p className="font-bold text-lg font-sans">12</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-mono font-normal text-md">Price</p>
              <p className="font-bold text-lg font-sans">$245.80</p>
            </div>
          </div>
          <div>
            <Button className="hover:cursor-pointer" onClick={handleClick} className="font-mono w-full">
              Checkout
            </Button>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Cart;
