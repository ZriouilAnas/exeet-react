import React, { useState } from "react";
import "./form.css";

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

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <a href="/">EXEET</a>
        </div>
      </header>

      <main className="main-content">
        <h2>PERSONAL DETAILS</h2>

        <hr className="full-width" />
        <br />
        <form className="form">
          <div className="form-group">
            <label>
              Prenom <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.prenom}
              onChange={(e) =>
                setFormData({ ...formData, prenom: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>
              Nom <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.nom}
              onChange={(e) =>
                setFormData({ ...formData, nom: e.target.value })
              }
            />
          </div>

          <div className="form-group full-width">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-group full-width">
            <label>
              Tel <span className="required">*</span>
            </label>
            <input
              type="tel"
              value={formData.tel}
              onChange={(e) =>
                setFormData({ ...formData, tel: e.target.value })
              }
            />
          </div>

          <div className="form-group full-width">
            <label>
              Adress 1 <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.adress1}
              onChange={(e) =>
                setFormData({ ...formData, adress1: e.target.value })
              }
            />
          </div>

          <div className="form-group full-width">
            <label>
              Adress 2 <span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.adress2}
              onChange={(e) =>
                setFormData({ ...formData, adress2: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>
              Code Postal<span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) =>
                setFormData({ ...formData, zipCode: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>
              Etat \ Prevance<span className="required">*</span>
            </label>
            <input
              type="text"
              value={formData.etat}
              onChange={(e) =>
                setFormData({ ...formData, etat: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>
              Pays de résidence principale <span className="required">*</span>
            </label>
            <select
              value={formData.countryResidence}
              onChange={(e) =>
                setFormData({ ...formData, countryResidence: e.target.value })
              }
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
              value={formData.countryPassport}
              onChange={(e) =>
                setFormData({ ...formData, countryPassport: e.target.value })
              }
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
                  name="age"
                  value="yes"
                  checked={formData.isOver18 === "yes"}
                  onChange={(e) =>
                    setFormData({ ...formData, isOver18: e.target.value })
                  }
                />{" "}
                Yes
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  name="age"
                  value="no"
                  checked={formData.isOver18 === "no"}
                  onChange={(e) =>
                    setFormData({ ...formData, isOver18: e.target.value })
                  }
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
                  name="financial"
                  value="yes"
                  checked={formData.financialQualification === "yes"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      financialQualification: e.target.value,
                    })
                  }
                />{" "}
                Yes
              </label>
              <label className="radio-container">
                <input
                  type="radio"
                  name="financial"
                  value="no"
                  checked={formData.financialQualification === "no"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      financialQualification: e.target.value,
                    })
                  }
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
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
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
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </div>
          <div className="form-group full-width">
            <label>
              Veuillez fournir des détails sur les objectifs spécifiques de
              votre mission. <span className="required">*</span>
            </label>
            <textarea
              type="textarea"
              value={formData.pleaseShare}
              onChange={(e) =>
                setFormData({ ...formData, pleaseShare: e.target.value })
              }
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
              vous fournissez, Exeet peut toujours être en mesure de travailler
              avec vous.<span className="required">*</span>
            </p>
            <br />
            <div className="checkbox-container">
              <label className="checkbox-container">I CONFIRM </label>
              <input type="checkbox" required />
            </div>
            <br />
          </div>
          <div className="form-group full-width">
            <p>
              Veuillez cliquer pour confirmer votre consentement à notre
              politique de confidentialité. Remarque - vous avez le droit de
              retirer votre consentement à tout moment en communiquant avec nous
              à exeet@exeet.com. Veuillez consulter notre politique de
              confidentialité pour plus d’informations sur la façon dont nous
              traitons vos données. Le fait de remplir ce formulaire ne vous
              garantit pas une place sur un futur vol.
              <span className="required">*</span>
            </p>
            <br />
            <div className="checkbox-container">
              <label className="checkbox-container">I CONFIRM </label>
              <input type="checkbox" required />
            </div>
            <br />
          </div>
          <div className="submit">
            <a
              className="btn"
              onClick={() => {
                submit();
              }}
            >
              <div className="hover"></div>
              <span>Submit</span>
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}
