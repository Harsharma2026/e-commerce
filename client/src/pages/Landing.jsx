import Sale from '../assets/Sale.png';
import iphone from '../assets/iphone.png';
import store from '../assets/store.png';
export default function Landing(){
    return(
        <div className="grid bg-slate-100 grid-rows-[1fr_6fr]">
               <div className="grid bg-white grid-rows-2">
                  <div className="grid bg-white">
                  <div class="inline-flex gap-[2px] flex-row-reverse">
                     <button class="flex h-[70%] place-self-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border border-black ">
                       Login
                      </button>
                     <button class="flex h-[70%] place-self-center bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border border-black">
                       Signup
                      </button>
                    </div>
                  </div>
                 <div className="grid bg-white">
                    <img className="w-[100%] h-[80%] place-self-center" src={Sale} alt="" />
                 </div>
               </div>
               <div className="grid grid-rows-[1fr_2fr]">
                 <div className="grid bg-white">
                    <img className="w-[90%] place-self-center" src={iphone} alt="" />
                 </div>
                 <div className="grid bg-white">
                 <img className="w-[100%] h-[70%] place-self-center" src={store} alt="" />
                 </div>
               </div>
        </div>
    )
}