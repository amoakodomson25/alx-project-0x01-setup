import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Users</h1>

          <button
            onClick={() => {
              setSelectedUser(null); 
              setIsModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {posts.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              setSelectedUser(user); 
              setIsModalOpen(true);
            }}
            className="cursor-pointer"
          >
            <UserCard user={user} />
          </div>
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
