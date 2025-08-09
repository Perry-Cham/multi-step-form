function Step_1({ stage, formData, updateData, errors }) {
  return (
    <div
      className={`form-step stage-one ${
        stage == 1 ? "show-step" : "hide-step"
      }`}
    >
      <h2 className="main-heading">Personal Information</h2>
      <p className="main-text">
        Please provide name, email address and phone mumber
      </p>
      <label for="name" className={`${errors.name && "errorMsg-Container"}`}>
        <p>Name</p>
        {errors.name && <p className="errorMsg">{errors.name}</p>}
      </label>
      <input
        name="name"
        type="text"
        placeholder="e.g Stephen King"
        onChange={(e) => updateData(e)}
        className={`${errors.address && "error-input"}`}
      />

      <label
        for="address"
        className={`${errors.address && "errorMsg-Container"}`}
      >
        <p>Address</p>
        {errors.address && <p className="errorMsg">{errors.address}</p>}
      </label>
      <input
        name="address"
        type="text"
        placeholder="e.g stephenking@lorem.com"
        onChange={(e) => updateData(e)}
        className={`${errors.address && "error-input"}`}
      />

      <label
        for="phoneNumber"
        className={`${errors.address && "errorMsg-Container"}`}
      >
        <p>Phone number</p>
        {errors.phoneNumber && <p className="errorMsg">{errors.phoneNumber}</p>}
      </label>
      <input
        name="phoneNumber"
        type="text"
        placeholder="e.g +1 234 567 890"
        onChange={(e) => updateData(e)}
        className={`${errors.address && "error-input"}`}
      />
    </div>
  );
}
export default Step_1;
