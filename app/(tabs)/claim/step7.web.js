import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDocumentFile } from "../../../redux/features/claimslice";

const UploadDocumentScreen = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
      dispatch(setDocumentFile(uploadedFile)); // Save the file in Redux
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>
        Booking confirmation email or boarding pass, or any other document
        confirming your ticket reservation.
      </p>

      {file && (
        <img
          src={file}
          alt="Uploaded File"
          style={{ width: 200, height: 200, marginBottom: 10 }}
        />
      )}

      <div>
        <label htmlFor="fileUpload">
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default UploadDocumentScreen;
