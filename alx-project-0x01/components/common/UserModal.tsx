import React from "react";
import { UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-xl animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">
          {user ? "User Details" : "Add New User"}
        </h2>

        {user ? (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>

            <div className="mt-3">
              <strong>Address:</strong>
              <p>
                {user.address.street}, {user.address.city}
              </p>
            </div>

            <div className="mt-3">
              <strong>Company:</strong>
              <p>{user.company.name}</p>
              <p className="text-sm italic">{user.company.catchPhrase}</p>
            </div>
          </>
        ) : (
          <>
            {/* Add User Inputs - Example fields */}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Username"
                className="border p-2 rounded"
              />
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded">
              Save User
            </button>
          </>
        )}

        <button
          className="mt-5 w-full bg-gray-300 p-2 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserModal;
