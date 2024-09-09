import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  RegisterElectricianAction,
  SingleElectricianAction,
} from "../../../../ApiIntegration/Actions/ElectricianAction";
import { GetSingleUserAction } from "../../../../ApiIntegration/Actions/AuthAction";
import {
  CLEAR_REGISTER_ERROR,
  ELECTRICIAN_REGISTER_RESET,
} from "../../../../ApiIntegration/Constants/ElectricianConstants";
import { toast } from "react-toastify";

const AddElectrician = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingSingle, SingleUser, error } = useSelector(
    (state) => state.adminSingleUser
  );

  const { electricianRegisterSuccess } = useSelector(
    (state) => state.registerElectricianData
  );

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [electricianId, setElectricianId] = useState("");

  useEffect(() => {
    if (SingleUser) {
      setName(SingleUser.userName);
      setContact(SingleUser.phone);
      setElectricianId(SingleUser._id);
    }
  }, [SingleUser]);

  useEffect(() => {
    dispatch(GetSingleUserAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      const message = error.data.message;

      if (Array.isArray(message)) {
        message.forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error(message || error.data.extraDetails);
      }

      dispatch({
        type: CLEAR_REGISTER_ERROR,
      });
      navigate("/Admin/Dashboard/adminRegisteruser");
    }

    if (electricianRegisterSuccess) {
      toast.success("Added Successfully");
      navigate("/adminRegisteruser");
      dispatch({ type: ELECTRICIAN_REGISTER_RESET });
    }
  }, [dispatch, error, toast, electricianRegisterSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterElectricianAction(name, contact, electricianId));
  };

  return (
    <>
      <section>
        <div className="complaint-container">
          <h2>Add Electrician</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Electrician Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Mobile:</label>
              <input
                type="number"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <button className="submit-button">Add Electrician</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddElectrician;
