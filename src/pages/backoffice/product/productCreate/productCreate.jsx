import React, { useEffect, useState } from "react";
import "./productCreate.css";
import SideNavBar from "../../admin/sideBar/sideBar";

const CreateProduct = () => {
  const [form, setForm] = useState({
    nom: "",
    prix: "",
    description: "",
    categorie: "",
    couleur: "",
    sexe: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [categories, setCategories] = useState([]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 🔁 Fetch categories from API on mount
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/produits") // Replace with your real endpoint
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
      formData.append("nom", form.nom);
      formData.append("prix", form.prix);
      formData.append("description", form.description);
      formData.append("couleur", form.couleur);
      formData.append("categorie", form.categorie);
      if (imageFile) formData.append("image", imageFile);

      const response = await fetch("https://your-api.com/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create product");

      setSuccess(true);
      setForm({ nom: "", prix: "", description: "", categorie: "" });
      setImageFile(null);
      setImagePreview(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="create-product-container">
      <SideNavBar></SideNavBar>
      <h2>Create New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="product-form"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="nom"
          placeholder="nom"
          value={form.nom}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="prix"
          placeholder="prix"
          value={form.prix}
          onChange={handleChange}
          required
        />

        {/* Dynamic categorie select */}
        <select
          name="categorie"
          value={form.categorie}
          onChange={handleChange}
          required
        >
          <option value="">Select categorie</option>
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

export default CreateProduct;
