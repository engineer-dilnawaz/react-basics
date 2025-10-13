import { useEffect } from "react";

const User = ({ userInfo }) => {
  return (
    <div className="bg-gray-200 px-4 py-5 flex items-center gap-3 rounded-md">
      <div className="bg-white rounded-full flex justify-center items-center p-4">
        <img src={userInfo.image} className="w-15 h-15" />
      </div>
      <div>
        <p className="font-bold text-slate-900 m-0 text-lg/tight">{`${userInfo?.firstName} ${userInfo.lastName}`}</p>
        <p className="m-0 text-gray-600 p-0 text-sm/tight">
          @{userInfo.username}
        </p>
      </div>
    </div>
  );
};

export default User;
