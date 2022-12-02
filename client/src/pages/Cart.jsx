import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Cart() {
  const [cartProducts,setCartProducts] = useState([]);
  const [cartTotal,setCartTotal] = useState(0);
  const navigate = useNavigate()
  const {user} = useAuth();
  useEffect(() => {
    axios.post('/user/getCart',{userId: user.role.userId}).then(res => {
      console.log(res)
      if(res.data.status){
        
        let total = 0;
        res.data.data.products.map((val) => {
          total+=val.amount
        })
        setCartTotal(total)
        setCartProducts(res.data.data.products);
      }
    })
  },[])
  const takeMeBack = () => {
    navigate('/h')
  }
  const takeMeAddress = () => {
    navigate('/address')
  }
  const removeItem = (productId,amount) =>{
    axios.post('/user/deleteCart',{productId,userId:user.role.userId}).then((res) => {
      console.log(res)
      if(res.data.success){
        document.getElementById(productId+'-product').remove();
        let rest = cartTotal-amount;
        setCartTotal(rest);
        if(rest == 0)
          navigate('/h')
      }
    })
  }
  return (
    cartProducts.length==0?
<div class="w-full h-screen flex flex-col items-center justify-center">
  
    <div class="flex flex-col items-center justify-center">
        <p class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">404</p>
        <p class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Cart Empty</p>
        <p class="md:text-lg xl:text-xl text-gray-500 mt-4">Add products in cart to continue.
        <a className="text-blue-600 cursor-pointer hover:text-blue-800" onClick={() => {navigate('/h')}}> Go to home</a>
        </p>
    </div>
</div>
    :
    <>
      <div class="flex items-center justify-center py-8">
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <button
          onclick="checkoutHandler(false)"
          class="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Open Modal
        </button>
      </div>
      <div
        class="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
        id="chec-div"
      >
        {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
        <div
          class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div
            class="flex items-end lg:flex-row flex-col justify-end"
            id="cart"
          >
            <div
              class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
            >
              <div
                class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
                onclick="checkoutHandler(false)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p onClick={takeMeBack} class="text-sm pl-2 leading-none dark:hover:text-gray-200">
                  Back
                </p>
              </div>
              <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
                Bag
              </p>
              {
                cartProducts.map((val,index) => (
                  <div id={val._id+'-product'} class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                <div class="md:w-4/12 2xl:w-1/4 w-full grid place-content-center">
                  <img
                    src={val.image}
                    alt={val.name}
                    class="object-center w-[200px] h-[200px]  object-cover md:block hidden place-self-center"
                  />
                  <img
                    src={val.image}
                    alt={val.name}
                    class="md:hidden w-[200px] h-[200px] object-center object-cover place-self-center"
                  />
                </div>
                <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                    
                  </p>
                  <div class="flex items-center justify-between w-full pt-1">
                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">
                      {val.name}
                    </p>
                    <select
                      aria-label="Select quantity"
                      class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                    >
                      <option>01</option>
                    </select>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <div class="flex itemms-center">
                      <p class="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                        Add to favorites
                      </p>
                      <button onClick={() => {removeItem(val._id,val.amount)}} class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </button>
                    </div>
                    <p class="text-base font-black leading-none text-gray-800 dark:text-white">
                      ${val.amount}
                    </p>
                  </div>
                </div>
              </div>
                ))
              }
            </div>
            <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
              <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                    Summary
                  </p>
                  <div class="flex items-center justify-between pt-16">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Subtotal
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      ${cartTotal}
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Shipping
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      $50.80
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Tax
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      3.20
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p class="text-2xl leading-normal text-gray-800 dark:text-white">
                      Total
                    </p>
                    <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                      ${cartTotal+54}
                    </p>
                  </div>
                  <button
                    onclick={takeMeAddress}
                    class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
