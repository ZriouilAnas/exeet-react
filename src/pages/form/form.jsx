import React, { useState } from "react";
import "./form.css";
import { NavLink } from "react-router-dom";

export default function Form() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    adress1: "",
    adress2: "",
    zipCode: "",
    etat: "",
    countryResidence: "",
    countryPassport: "",
    isOver18: "",
    financialQualification: "",
    destination: "",
    year: "",
    pleaseShare: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://localhost:5000/api/create-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Contact créé avec succès !");
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          tel: "",
          adress1: "",
          adress2: "",
          zipCode: "",
          etat: "",
          countryResidence: "",
          countryPassport: "",
          isOver18: "",
          financialQualification: "",
          destination: "",
          year: "",
          pleaseShare: "",
        });
      } else {
        const errorData = await response.json();
        setStatus("Erreur : " + (errorData.error || "Une erreur est survenue"));
      }
    } catch (error) {
      setStatus("Erreur : " + error.message);
    }
  };

  return (
    <div id="form-background">
      <div className="container">
        <header className="form-header-container">
          <div className="logo">
            <NavLink style={{ fontSize: "1.8rem" }} to="/">
              <img
                style={{ width: "10vw" }}
                src="src\assets\img\Logo-White-EXEET-01.png"
                alt="Home EXEET"
              />
            </NavLink>
          </div>
          <div className="home-navlink">
            <NavLink style={{ fontSize: "1.8rem" }} to="/shop">
              Shop
            </NavLink>
          </div>
        </header>

        <main className="main-content">
          <h2>PERSONAL DETAILS</h2>

          <hr className="full-width" />
          <br />
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Prenom <span className="required">*</span>
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Nom <span className="required">*</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>
                Tel <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>
                Adress 1 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="adress1"
                value={formData.adress1}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>
                Adress 2 <span className="required">*</span>
              </label>
              <input
                type="text"
                name="adress2"
                value={formData.adress2}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Code Postal<span className="required">*</span>
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Etat \ Prevance<span className="required">*</span>
              </label>
              <input
                type="text"
                name="etat"
                value={formData.etat}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Pays de résidence principale <span className="required">*</span>
              </label>
              <select
                name="countryResidence"
                value={formData.countryResidence}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Pays de passeport <span className="required">*</span>
              </label>
              <select
                name="countryPassport"
                value={formData.countryPassport}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Confirmez votre âge
                <span className="required">*</span>
              </label>
              <p>Avez-vous 18 ans ou plus?</p>
              <div className="radio-group">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="isOver18"
                    value="yes"
                    checked={formData.isOver18 === "yes"}
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label className="radio-container">
                  <input
                    type="radio"
                    name="isOver18"
                    value="no"
                    checked={formData.isOver18 === "no"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>
                Qualification financière <span className="required">*</span>
              </label>
              <p>Êtes-vous prêt à être qualifié financièrement par Exeet?</p>
              <div className="radio-group">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="financialQualification"
                    value="yes"
                    checked={formData.financialQualification === "yes"}
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label className="radio-container">
                  <input
                    type="radio"
                    name="financialQualification"
                    value="no"
                    checked={formData.financialQualification === "no"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <h2>MISSION DETAILS</h2>
            <hr className="full-width" />

            <div className="form-group">
              <label>
                Destination <span className="required">*</span>
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Select a destination</option>
                <option value="moon">To the Moon</option>
                <option value="orbit">Orbit around Earth</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Année <span className="required">*</span>
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label>
                Veuillez fournir des détails sur les objectifs spécifiques de
                votre mission. <span className="required">*</span>
              </label>
              <textarea
                name="pleaseShare"
                value={formData.pleaseShare}
                onChange={handleChange}
              />
            </div>

            <h2>Acknowledgements</h2>
            <hr className="full-width" />
            <br />
            <div className="form-group full-width">
              <p>
                En sélectionnant "JE CONFIRME", vous déclarez que vous avez
                examiné et confirmé l’exactitude des renseignements fournis dans
                ce formulaire, et que ces renseignements ne sont pas faux ou
                trompeurs. Il s’agit d’un formulaire initial pour Exeet afin
                d’évaluer la faisabilité de la mission, et ne constitue pas un
                contrat entre vous et Exeet. Peu importe les renseignements que
                vous fournissez, Exeet peut toujours être en mesure de
                travailler avec vous.<span className="required">*</span>
              </p>
              <br />
              <div className="checkbox-container">
                <label className="checkbox-container">
                  I CONFIRM{" "}
                  <input type="checkbox" required name="acknowledge1" />
                </label>
              </div>
              <br />
            </div>
            <div className="form-group full-width">
              <p>
                Veuillez cliquer pour confirmer votre consentement à notre
                politique de confidentialité. Remarque - vous avez le droit de
                retirer votre consentement à tout moment en communiquant avec
                nous à exeet@exeet.com. Veuillez consulter notre politique de
                confidentialité pour plus d’informations sur la façon dont nous
                traitons vos données. Le fait de remplir ce formulaire ne vous
                garantit pas une place sur un futur vol.
                <span className="required">*</span>
              </p>
              <br />
              <div className="checkbox-container">
                <label className="checkbox-container">
                  I CONFIRM{" "}
                  <input type="checkbox" required name="acknowledge2" />
                </label>
              </div>
              <br />
            </div>

            <div className="submit">
              <button type="submit" className="btn">
                <div className="hover"></div>
                <span>Submit</span>
              </button>
            </div>
          </form>
          {status && <p>{status}</p>}
        </main>
      </div>
      <br />
    </div>
  );
}
