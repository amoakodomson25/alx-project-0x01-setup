import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ user }) => {
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p>@{user.username}</p>
        <p>Email: {user.email}</p>
  
        <p className="mt-2 font-medium">Address:</p>
        <p>{user.address.street}, {user.address.city}</p>
  
        <p className="mt-2 font-medium">Company:</p>
        <p>{user.company.name}</p>
      </div>
    );
  };
  
  export default UserCard;
  