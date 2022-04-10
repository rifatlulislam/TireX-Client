import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddCylce = () => {
  const [error, setError] = useState(false);
  // const [ratingError,setRatingError] = useState(false);
  const { notify } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);
    if (
      data.name === "" ||
      data.img === "" ||
      data.description === "" ||
      data.rating === 0
    ) {
      setError(true);
      return;
    }
    axios
      .post("https://calm-reaches-87696.herokuapp.com/addBicycle", data)
      .then((res) => {
        if (res.data.insertedId) {
          notify("success", "Cycle Added Successfully");
        }
      });
    reset();
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div className="addCycle-container">
          <div className="form-container">
            <h2
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textAlign: "center",
                margin: "8px 0",
                borderBottom: "2px solid #15c7e7",
                width: "max-content",
              }}
            >
              Add Bicycle
            </h2>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("name")}
                  // defaultValue={user?.displayName}
                  placeholder="Cycle Name"
                  className="input-field"
                />
              </div>

              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("img")}
                  type="url"
                  placeholder="Cycle Image"
                  className="input-field"
                />
              </div>
              <input
                {...register("description")}
                type="text"
                placeholder="Enter Cycle Description"
                className="input-field"
              />
              <input
                {...register("rating")}
                type="number"
                placeholder="Rating (Max 5)"
                className="input-field"
              />
              {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  Input filelds cannot be empty
                </p>
              )}

              <input type="submit" value="SUBMIT" className="submit-btn" />

              {/* <input type="submit" value="SUBMIT" className="review-btn" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCylce;
