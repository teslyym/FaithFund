import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";
import logo from "../../Components/../assets/logo.png";
import axios from "axios";

const RegisterMosque = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image: "",
    description: "",
    currentState: "",
    accountNumber: "",
    accountName: "",
    bankName: "",
  });

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState("false");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("true");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/mosque/create-mosque",
        formData,
      );
      console.log(response);
      setLoading("false");
    } catch (error) {
      console.log(error);
      setLoading("false");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/login");
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <div className="items-start">
          <Link to={"/"}>
            <img
              className="w-[74px] h-[64px] sm:w-[94px] sm:h-[80px] ml-4 sm:ml-[10%] mt-6 sm:mt-10"
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <div className="rounded-lg flex flex-col border w-[92%] sm:w-[70%] md:w-[55%] lg:w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)] px-4">
          <div className="text-2xl sm:text-[2.125rem] w-full text-center font-medium pt-4">
            <p>Register A Mosque</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[24rem] mb-[10px] flex flex-col gap-8"
          >
            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Mosque Name
              </h1>
              <input
                type="text"
                placeholder="Enter Mosque Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Mosque Address
              </h1>
              <input
                type="text"
                placeholder="Enter Mosque Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Description (precise and accurate)
              </h1>
              <input
                type="text"
                placeholder="Enter Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Account Number
              </h1>
              <input
                type="text"
                placeholder="Enter Account Number"
                value={formData.accountNumber}
                onChange={(e) =>
                  setFormData({ ...formData, accountNumber: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Account Name
              </h1>
              <input
                type="text"
                placeholder="Enter Account Name"
                value={formData.accountName}
                onChange={(e) =>
                  setFormData({ ...formData, accountName: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Bank Name
              </h1>
              <input
                type="text"
                placeholder="Enter Bank Name"
                value={formData.bankName}
                onChange={(e) =>
                  setFormData({ ...formData, bankName: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Current State
              </h1>
              <input
                type="text"
                placeholder="Input Current State"
                value={formData.currentState}
                onChange={(e) =>
                  setFormData({ ...formData, currentState: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full outline-none">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Upload Image
              </h1>

              <input
                type="file"
                onChange={handleImageChange}
                className="my-2 w-full text-sm"
              />
            </div>

            <div className="flex justify-center">
              <button type="submit">
                <CustomButtons
                  text={"Get Started"}
                  button_width={"126px"}
                  disabled={loading}
                />
              </button>
            </div>
          </form>

          <p className="bg-[#017358] text-white px-2">{errors && errors}</p>

          <div className="w-full max-w-[22rem] mb-[10px] flex flex-col gap-6 text-base font-normal text-center">
            <h1>
              By continuing, you agree to the{" "}
              <button>
                <span className="text-[#017358]">
                  Terms of Service & Privacy Policy.
                </span>
              </button>
            </h1>

            <h1>
              Already have an account,{" "}
              <span className="text-[#017358]">
                <button>Login</button>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMosque;
