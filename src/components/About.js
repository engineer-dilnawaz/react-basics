import { useEffect, useState } from "react";
import User from "./User";

const About = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUserList(data?.users);
    } catch (error) {
      console.log("Something went wrong!!!! ", error);
      setUserList([]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="p-4">
      <p className="font-bold text-4xl text-center font-serif">
        About Our Team
      </p>
      <div className="w-full h-[0.5px] bg-gray-200 my-4" />
      <div className="flex flex-col gap-2">
        {userList.map((user) => {
          return <User key={user.id} userInfo={user} />;
        })}
      </div>
    </div>
  );
};

export default About;
