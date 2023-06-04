import React, { useEffect, useState } from "react";
import TabelBuku from "./TabelBuku";
import axios from "axios";

const ManajemenBuku = () => {
  const [formMode, setFormMode] = useState("");
  const [books, setBooks] = useState([]);
  const [inputForm, setInputForm] = useState();

  function showCreateButton() {
    setInputForm("");
    setFormMode("create");
  }
  function showEditForm(book) {
    setInputForm(book)
    setFormMode("edit");
  }

  useEffect(() => {
    retriveData();
  }, []);

  function retriveData() {
    axios.get('http://localhost:4000/book')
      .then((response) => setBooks(response.data))
      .catch((err) => console.log(err.response.data));
  };

  function handleJudul(e) {
    setInputForm({...inputForm, judul: e.target.value});
  }

  function handlePengarang(e) {
    setInputForm({...inputForm, pengarang: e.target.value});
  }

  function deleteOne(book) {
    axios.delete("http://localhost:4000/book/delete/" + book._id)
      .then(() => {
        retriveData();
        alert("Data Berhasil di hapus");
      })
      .catch((error) => {console.log(error.response)})
  } 

  function submitForm(e) {
    e.preventDefault();
    if(formMode === "create") {
      axios.post("http://localhost:4000/book/add", inputForm)
      .then(() => {
        alert("Data berhasil ditambahkan!");
        retriveData();
      })
      .catch((error) => {console.log(error.response)});
    }

    if (formMode === "edit") {
      axios.put("http://localhost:4000/book/update/" + inputForm._id, inputForm)
      .then(() => {
        retriveData();
        alert("Data berhasil diubah!");
      })
      .catch((error) => {console.log(error.response)});
    }
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

      {formMode !== "" && (
        <div id="form" className="card py-3 my-3 bg-secondary">
          <div className="card-body">
            <h4>Form Buku</h4>
            <form className="row" onSubmit={submitForm}>
              <div className="col-6">
                <input
                  type="text"
                  name="judul"
                  className="form-control mx-2"
                  placeholder="judul..."
                  value={inputForm.judul || ""}
                  onChange={handleJudul}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="pengarang"
                  className="form-control mx-2"
                  placeholder="pengarang..."
                  value={inputForm.pengarang || ""}
                  onChange={handlePengarang}
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

      <TabelBuku showEdit={showEditForm} books={books} requestToDelete={deleteOne} />
    </div>
  );
};

export default ManajemenBuku;
