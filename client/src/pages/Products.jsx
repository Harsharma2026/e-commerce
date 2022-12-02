import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const {user} = useAuth();
    const [userCart,setUserCart] = useState([]);
    useEffect(() => {
      axios.post('/user/getCart',{userId:user.role.userId}).then((res) => {
        console.log(res)
        if(res.data.status){
          setUserCart(res.data.data.products)
        }
        axios.get('/product/get').then((res) => {
          setProducts(res.data.data.products)
      })
      })
    },[])
    const addToCart = (productId) => {
      axios.patch('/user/updateCart',{productId,userId:user.role.userId}).then((res) => {
        console.log(res);
        if(res.data.status){

          navigate('/cart');
        }
      })
    }
    const returnAddedOrNot = (productId) => {
      console.log(productId)
      userCart.map((cartItem) =>{
        if(cartItem._id == productId){
          // document.getElementById(productId+'-cartbtn').disabled = true;
          return("Already in Cart")
        }
      })
      return(
        "Add to Cart"
      )
    }
    return (
        products.map((val, index) => (
            index % 2 == 0 ?
                (
                    <div class="container my-24 px-6 mx-auto ">
                        <section class="mb-32 text-gray-800 text-center md:text-left dark:shadow-box-shadow:rgba(240,_46,_170,_0.4) [-5px_5px], rgba(240,_46,_170,_0.3) [-10px_10px], rgba(240,_46,_170,_0.2) [-15px_15px], rgba(240,_46,_170,_0.1) [-20px_20px], rgba(240,_46,_170,_0.05) [-25px_25px]">
                            <div class="block rounded-lg shadow-lg bg-gray-200">
                                <div class="flex flex-wrap items-center">
                                    <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                        <img
                                            src={val.image}
                                            alt="Headphone"
                                            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        />
                                    </div>
                                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                        <div class="px-6 py-12 md:px-12">
                                            <h2 class="text-3xl font-bold mb-6 pb-2">
                                                {val.name}
                                            </h2>
                                            <p class="text-gray-500 mb-6 pb-2">
                                                {val.description}
                                            </p>
                                            <div class="flex flex-wrap mb-6">
                                                {
                                                    val.features.map((feature,ind) => (
                                                        <div class="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                                    <p class="flex items-center justify-center md:justify-start">
                                                        <svg
                                                            class="w-4 h-4 mr-2"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                            ></path>
                                                        </svg>
                                                        {feature}
                                                    </p>
                                                </div>
                                                    ))
                                                }
                                            </div>
                                            <button
                                            id={val._id+'-cartbtn'}
                                            onClick={() => {addToCart(val._id)}}
                                                type="button"
                                                class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                {
                                                  returnAddedOrNot(val._id)
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
                :
                <div class="container my-24 px-6 mx-auto">
          <section class="mb-32 text-gray-800">
            <div class="container mx-auto xl:px-32 text-center lg:text-left">
              <div class="grid lg:grid-cols-2 items-center">
                <div class="mb-12 lg:mb-0">
                  <div
                    class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    <h2 class="text-3xl font-bold mb-6 pb-2">
                      {val.name}
                    </h2>
                    <p class="text-gray-500 mb-6 pb-2">
                      {val.description}
                    </p>
                    <div class="flex flex-wrap mb-6">
                      {
                        val.features.map((feature,ind) => (
                            <div class="w-full md:w-4/12 mb-4">
                        <p class="flex items-center justify-center lg:justify-start">
                          <svg
                            class="w-4 h-4 mr-2 text-gray-900"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                          {feature}
                        </p>
                      </div>
                        ))
                      }
                    </div>
                    <button
                    onClick={() => {addToCart(val._id,val.amount)}}
                    id={val._id+'-cartbtn'}
                      type="button"
                      class="inline-block px-7 py-3 bg-gray-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      {
                        returnAddedOrNot(val._id)
                      }
                    </button>
                  </div>
                </div>

                <div>
                  <img
                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/132.jpg"
                    class="w-full rounded-lg shadow-lg"
                    alt="watches"
                  />
                </div>
              </div>
            </div>
            {/* <!-- Jumbotron --> */}
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>

        ))
    )
}