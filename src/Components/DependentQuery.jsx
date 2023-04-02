import React from "react";
import API from "../Api/API";
import { useQuery } from "react-query";

const fetchuserID = (email) => {
  return API.get(`/users/${email}`);
};
const fetchchannelCourses = (channelID) => {
  return API.get(`/channels/${channelID}`);
};
const DependentQuery = ({ email }) => {
  const { data: users } = useQuery("users-data", () => fetchuserID(email));
  const channelID = users?.data?.channelid;

  const { data: channels } = useQuery(
    ["channel-data", channelID],
    () => fetchchannelCourses(channelID),
    {
      enabled: !!channelID,
    }
  );

  return (
    <div className="bg-orange-300">
      DependentQuery:
      <h1 className="text-[32px] capitalize underline tracking-wider">
        {users?.data.channelid}
      </h1>
      <p>
        {channels?.data.courses.map((course) => {
          return <h1>{course}</h1>;
        })}
      </p>
    </div>
  );
};

export default DependentQuery;
