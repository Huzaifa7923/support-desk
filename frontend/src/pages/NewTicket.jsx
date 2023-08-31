import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("iphone");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <section className="heading">
          <h1>Create new ticket</h1>
          <p>Please fill out the form below</p>
        </section>

        <section className="form">
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input type="text" className="form-control" value={name} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Customer Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              disabled
            />
          </div>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="product">Product</label>
              <select
                name="product"
                id="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="iphone">iphone</option>
                <option value="Macbook Pro">Macbook Pro</option>
                <option value="ipad">iphone</option>
                <option value="android">iphone</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description of issue</label>
              <textarea
                name="description"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
        </section>
      </form>
    </>
  );
}

export default NewTicket;
