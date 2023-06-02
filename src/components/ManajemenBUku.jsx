import React, { useState } from "react";
import TabelBuku from "./TabelBuku";

const ManajemenBuku = () => {
  const [formMode, setFormMode] = useState("");

  function showCreateButton() {
    setFormMode("show");
  }

  return (
    <div className="container mt-3">
      <h1 className="tetxt-center">Manajemen Buku</h1>
      <button
        className="btn btn-sm btn-primary my-2"
        onClick={showCreateButton}
      >
        Tambah Buku
      </button>

      {formMode === "show" && (
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
              <div className="col-2">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      <TabelBuku />
    </div>
  );
};

export default ManajemenBuku;
