import React, { useEffect, useState } from "react";
import "./productEdit.css";
import SideNavBar from "../../admin/sideBar/sideBar";

const EditProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categories, setCategories] = useState([]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 🔁 Fetch categories from API on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories") // Replace with your real endpoint
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => setError("Failed to load categories"));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("price", form.price);
      formData.append("description", form.description);
      formData.append("category", form.category);
      if (imageFile) formData.append("image", imageFile);

      const response = await fetch("https://your-api.com/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create product");

      setSuccess(true);
      setForm({ title: "", price: "", description: "", category: "" });
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="create-product-container">
      <SideNavBar></SideNavBar>
      <h2>Edit a Product</h2>
      <form
        onSubmit={handleSubmit}
        className="product-form"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        {/* Dynamic category select */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Product</button>
      </form>

      {success && (
        <p className="success-msg">✅ Product created successfully!</p>
      )}
      {error && <p className="error-msg">❌ {error}</p>}
    </div>
  );
};

export default EditProduct;
