import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useAuth } from "../context/authContext";
import paymentgif from '../assets/payment.gif'
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Address() {

  const {user} = useAuth();
  console.log(user);
  const [name,setName] = useState(user.role.first_name+' '+user.role.last_name);
  const [email,setEmail] = useState(user.email);
  const [payment,setPayment] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1]
    }
    const finalData = {...data, name,email,userId:user.role.userId}
    console.log(finalData);
    setPayment(true);


    axios.post("order/create",finalData).then((res) => {
      console.log(res)
      if(res.data.status){
        navigate(`/status/${res.data.data.id}`)
      }
    })

  }
  return (
    // <!-- component -->
    <div class="min-h-screen relative p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Address Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <form onSubmit={handleSubmit} class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input
                      type="text"
                      required
                      onChange={(e) => {setName(e.target.value)}}
                      defaultValue={name}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      defaultValue={email}
                      disabled={true}
                      class="h-10 border disabled:bg-gray-200 disabled:border-gray-300 mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      required
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Address"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      name="city"
                      required

                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="City"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="country">Country / region</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        placeholder="Country"
                      required

                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-2">
                    <label for="state">State / province</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                      required

                        placeholder="State"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                      <button
                        tabindex="-1"
                        class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabindex="-1"
                        for="show_more"
                        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                      >
                        <svg
                          class="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      required

                      class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                    />
                  </div>

                  {/* <div class="md:col-span-5">
                    <div class="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        class="form-checkbox"
                      />
                      <label for="billing_same" class="ml-2">
                        My billing address is different than above.
                      </label>
                    </div>
                  </div> */}

                  <div class="md:col-span-5 text-right">
                    <div class="inline-flex items-end">
                      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Proceed to Pay
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute z-50 place-content-center bg-white w-full h-full ${payment?'grid':'hidden'}`}>
      <div className="w-[500px] h-[500px] grid place-content-center">
        <img src={paymentgif} alt="" />
      </div>
      </div>

    </div>
  );
}
