import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Genie() {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const {user} = useAuth();
  useEffect(() => {
    console.log(user)
    setFirstName(user.role.first_name)
    setLastName(user.role.last_name);
  })
  const navigate = useNavigate()
  const travellerDetails = (e) => {
    console.log(e);
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1]
    }
    const finalData = {...data, firstName,lastName,from:"USA",userId:user.role.userId}
    console.log(finalData);
    axios.post("traveller/create",finalData).then((res) => {
      if(res.data.status){
        navigate('/h')
      }
    })
  }
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="flex justify-center min-h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/5"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2700532/pexels-photo-2700532.jpeg?auto=compress&cs=tinysrgb&w=1200')`}}
        ></div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div class="w-full">
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Fill this traveller form
            </h1>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Let's get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <div class="mt-6">
              <h1 class="text-gray-500 dark:text-gray-300">
                <b>Enter the details</b>
              </h1>

              
            </div>

            <form onSubmit={travellerDetails} class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue={firstName}
                  name="firstName"
                  disabled={true}
                  class="block w-full px-5 py-3 mt-2 disabled:bg-gray-200 disabled:border-gray-400 cursor-not-allowed text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last name
                </label>
                <input
                  type="text"
                  defaultValue={lastName}
                  name="lastName"
                  disabled={true}
                  class="block w-full px-5 py-3 mt-2 disabled:bg-gray-200 disabled:border-gray-400 cursor-not-allowed text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>           

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Your Country
                </label>
                <input
                  type="text"
                  defaultValue={"USA"}
                  disabled={true}
                  name="from"
                  placeholder="Travelling From"
                  class="block w-full px-5 py-3 mt-2 disabled:bg-gray-200 disabled:border-gray-400 cursor-not-allowed text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Destination
                </label>
                <input
                  type="text"
                  required
                  name="destination"
                  placeholder="Enter the Destination"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Date of Travel
                </label>
                <input
                  type="date"
                  required
                  name="date"
                  placeholder="XX-XX-20XX"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Time of Flight
                </label>
                <input
                  type="text"
                  required
                  name="time"
                  placeholder="XX:XX am"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button type="submit" class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Submit Details </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
