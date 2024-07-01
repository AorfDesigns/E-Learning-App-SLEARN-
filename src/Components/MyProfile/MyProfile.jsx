import React from 'react';

const MyProfile = () => {
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const bio = 'This is a sample bio.';
  const occupation = 'Software Developer';

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 flex">
        <div className="w-1/3 flex justify-center items-center">
          <img
            src="./Images/Account.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-gray-300"
          />
        </div>
        <div className="w-2/3 pl-6">
          <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Name</h3>
            <p className="mt-1 text-gray-600">{name}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <p className="mt-1 text-gray-600">{email}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Occupation</h3>
            <p className="mt-1 text-gray-600">{occupation}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-700">Bio</h3>
            <p className="mt-1 text-gray-600">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
