import { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic here
  };

  return (
    <div className="exeet-form-wrapper">
      <div className="exeet-form-container">
        <h1>HUMAN SPACEFLIGHT</h1>
        <p>
          To join, please submit the form below and a member of our team will
          follow up as soon as possible
        </p>
        <br />
        <hr />
        <form onSubmit={handleSubmit} className="exeet-contact-form">
          <div className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label>
                  Prenom <span>*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="exeet-input"
                />
              </div>
              <div className="form-group">
                <label>
                  Nom <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="exeet-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  E-Mail <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="exeet-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Message <span>*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="exeet-textarea"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="exeet-submit-button">
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div className="exeet-footer-note">
        <p>© EXEET 2025.</p>
      </div>
    </div>
  );
}

export default Form;
