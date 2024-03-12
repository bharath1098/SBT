import { useState } from "react";
import "./ratingComponent.css"; // Import CSS file for styling
import { useTranslation } from "react-i18next";

const RatingContainer = ({ setfunction, value }) => {
  const { t } = useTranslation();

  function getCurrentDateInFormat() {
    // Get the current date
    const currentDate = new Date();

    // Define an array of month names
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the day, month, and year from the current date
    const day = String(currentDate.getDate()).padStart(2, "0"); // Ensure two digits
    const monthIndex = currentDate.getMonth();
    const month = months[monthIndex];
    const year = currentDate.getFullYear();

    // Concatenate the day, month, and year in the desired format
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }

  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    review: "",
    Rating: 0,
    Date: "",
  });

  let array = value;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (Rating) => {
    setFormData((prevData) => ({
      ...prevData,
      Rating: Rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.Date = getCurrentDateInFormat();
    array.push(formData);
    setfunction(array);
    console.log(array);
    // Reset form fields
    setFormData({
      phoneNumber: "",
      name: "",
      review: "",
      Rating: 0,
      Date: "",
    });
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit}>
        <input
          className="name"
          type="text"
          name="name"
          placeholder={t("fullName")}
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <input
          className="mobileNumber"
          type="tel"
          name="phoneNumber"
          placeholder={t("phoneNumber")}
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />

        <textarea
          className="textarea"
          name="review"
          placeholder={t("Description")}
          value={formData.review}
          onChange={handleInputChange}
          required
        />
        <div className="rating-container">
          <p>{t("Rating")}</p>
          <div className="star-container">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={index < formData.Rating ? "star selected" : "star"}
                onClick={() => handleRatingChange(index + 1)}
              >
                &#9733;
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="submit">
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default RatingContainer;
