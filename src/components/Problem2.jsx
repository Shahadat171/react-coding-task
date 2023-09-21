import React, { useEffect } from "react";

const Problem2 = () => {
   useEffect(()=>{
    fetch('https://contact.mediusware.com/api-doc/?format=openapi')
    .then((res) => res.json())
    .then((data)=>{
        console.log(data)
    })
   },[])
  return (
    <div className="container flex flex-col items-center justify-center">
         <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
      {/* //     <div className="row justify-content-center mt-5">
               
        //         <div className="d-flex justify-content-center gap-3">
        //         <button className="btn btn-lg btn-outline-primary ml-5" type="button" >All Contacts</button>
        //         <button className="btn btn-lg btn-outline-warning ml-9" type="button" >US Contacts</button>
        //         </div>
                
        //     </div> */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
     <div className="flex items-center justify-center gap-5">
     <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        All Contacts
      </button>
      <button
        className="btn ml-6"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Us Contacts
      </button>
     </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Problem2;
