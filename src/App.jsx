
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    Name: '',
    mobilenumber: '',
    email: '',
    education: '',
    yearofpassing: '',
    university: '',
    PANnumber: '',
    skills: '',
    address: ''
  });

  const inputHandle = (e) => {
    setState({
      ...state, // Spread the previous state to ensure you're updating the correct part
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return re.test(String(email).toLowerCase());
  };

  const next = () => {
    if (formNo === 1 && state.Name && state.mobilenumber && state.email) {
      if (!validateEmail(state.email)) {
        toast.error('Invalid email format');
        return;
      }
      setFormNo(formNo + 1);
    } else if (formNo === 2 && state.education && state.yearofpassing && state.university) {
      setFormNo(formNo + 1);
    } else {
      toast.error('Please fill up all input fields');
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  const submit = () => {
    console.log('Form submitted', state);
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center bg-cover h-screen w-screen">
      <ToastContainer />
      <div className="card w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] h-[35px] my-3 text-white rounded-full flex justify-center items-center ${
                  formNo === v ? 'bg-blue-500' : 'bg-gray-400'
                }`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && <div className="w-[85px] h-[2px] bg-blue-500"></div>}
            </>
          ))}
        </div>

        {/* Form Section */}
        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-4">
              <label htmlFor="Name" className="font-semibold">
                Name
              </label>
              <input
                value={state.Name}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                name="Name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="mobilenumber" className="font-semibold">
                Mobile Number
              </label>
              <input
                value={state.mobilenumber}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="number"
                name="mobilenumber"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                value={state.email}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={next}
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className="flex flex-col mb-4">
              <label htmlFor="education" className="font-semibold">
                Education
              </label>
              <input
                value={state.education}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                name="education"
                placeholder="Enter your education"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="yearofpassing" className="font-semibold">
                Year of Passing
              </label>
              <input
                value={state.yearofpassing}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="number"
                name="yearofpassing"
                placeholder="Enter year of passing"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="university" className="font-semibold">
                University
              </label>
              <input
                value={state.university}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                name="university"
                placeholder="Enter your university"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={pre}
                className="w-1/2 mr-2 bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="w-1/2 bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className="flex flex-col mb-4">
              <label htmlFor="PANnumber" className="font-semibold">
                PAN Number
              </label>
              <input
                value={state.PANnumber}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                name="PANnumber"
                placeholder="Enter your PAN number"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="skills" className="font-semibold">
                Skills
              </label>
              <input
                value={state.skills}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                name="skills"
                placeholder="Enter your skills"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="font-semibold">
                Address
              </label>
              <textarea
                value={state.address}
                onChange={inputHandle}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                name="address"
                placeholder="Enter your address"
              ></textarea>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={pre}
                className="w-1/2 mr-2 bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Previous
              </button>
              <button
                onClick={submit}
                className="w-1/2 bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
