import UserCard from "@/components/common/UserCard";
import { UserCardProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserCardProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {posts.map((user) => (
        <UserCard key={user.user.id} {...user} />
      ))}
    </div>
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
