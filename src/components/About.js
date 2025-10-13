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
    <div>
      <h1>About Us</h1>
      <div className="user-list">
        {userList.map((user) => {
          return <User key={user.id} userInfo={user} />;
        })}
      </div>
    </div>
  );
};

export default About;
