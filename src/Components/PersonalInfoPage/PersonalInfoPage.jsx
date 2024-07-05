import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const PersonalInfoPage = () => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    occupation: 'Software Developer',
    bio: 'This is a sample bio.',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    // Here you can add logic to save the updated data to your backend
    alert('Profile saved!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            {editing ? (
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm">{formData.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            {editing ? (
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm">{formData.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
              Occupation
            </label>
            {editing ? (
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            ) : (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm">{formData.occupation}</p>
            )}
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            {editing ? (
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows="4"
              ></textarea>
            ) : (
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md shadow-sm">{formData.bio}</p>
            )}
          </div>
          {editing && (
            <div>
              <Link to="/profilesaved">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4  rounded-full shadow-sm text-sm font-medium text-gray-800 bg-orange-400 hover:bg-transparent border-[2px] border-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Save
              </button>
              </Link>
            </div>
          )}
        </form>
        <div className="mt-6">
          <button
            onClick={handleEditToggle}
            className="w-full flex justify-center py-2 px-4  rounded-full shadow-sm text-sm font-medium text-gray-800 bg-orange-400 hover:bg-transparent border-[2px] border-orange-400  focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoPage;

