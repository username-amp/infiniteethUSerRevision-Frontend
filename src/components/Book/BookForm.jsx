import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    serviceRequired: '',
    patientType: 'new', // default value
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    // Check if it's a radio input
    if (e.target.type === 'radio') {
      setFormData({ ...formData, patientType: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      formData.appointmentDate === '' ||
      formData.appointmentTime === '' ||
      formData.serviceRequired === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/appointments', formData);
      console.log('Appointment created:', response.data);
      alert('Appointment created');

      // Reset form fields after successful submission
      setFormData(initialFormData); // Resetting to initial empty state

      // Optionally, handle success or redirect to a success page
    } catch (error) {
      console.error('Error creating appointment:', error);
      // Handle error state or show user an error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-sky p-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-customDarkBlue mb-6 text-center">Book an Appointment</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your First Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your Last Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="appointmentDate">Preferred Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.appointmentDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="appointmentTime">Preferred Appointment Time</label>
            <input
              type="time"
              id="appointmentTime"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.appointmentTime}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="serviceRequired">Service Required</label>
            <select
              id="serviceRequired"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.serviceRequired}
              onChange={handleChange}
            >
              <option value="" disabled>Select a service</option>
              <option value="cleaning">Cleaning</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="extraction">Tooth Extraction</option>
              <option value="filling">Filling</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Patient Type</label>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="newPatient"
                  name="patientType"
                  value="new"
                  className="mr-2"
                  checked={formData.patientType === 'new'}
                  onChange={handleChange}
                />
                <label htmlFor="newPatient" className="text-gray-700">New Patient</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="returningPatient"
                  name="patientType"
                  value="returning"
                  className="mr-2"
                  checked={formData.patientType === 'returning'}
                  onChange={handleChange}
                />
                <label htmlFor="returningPatient" className="text-gray-700">Returning Patient</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-sky"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
