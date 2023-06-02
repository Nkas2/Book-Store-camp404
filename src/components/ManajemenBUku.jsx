import React from "react";

const ManajemenBuku = () => {
  return (
      <div className="container mt-3">
         <h1 className="tetxt-center">Manajemen Buku</h1>
         <button className="btn btn-sm btn-primary my-2">
            Tambah Buku
         </button>

         <div id="form" className="card py-3 my-3 bg-secondary">
            <div className="card-body">
               <h4>Form Buku</h4>
               <form className="row">
                  <div className="col-6">
                     <input 
                        type="text"
                        name="judul"   
                        className="form-control mx-2"
                        placeholder="judul..."
                     />
                  </div>
                  <div className="col-4">
                     <input 
                        type="text" 
                        name="pengarang"
                        className="form-control mx-2"
                        placeholder="pengarang..."
                     />
                  </div>
               </form>
            </div>
         </div>

      </div>
  );
};

export default ManajemenBuku;