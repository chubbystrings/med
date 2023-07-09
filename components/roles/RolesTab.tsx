import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import RoleCard from "../card/Role";
import MailIcon from "../icons/MailIcon";
import { FiDownloadCloud } from "react-icons/fi";
import ActiveUsers from "../../public/avatar_group.svg";
import Table from "../table/Table"

const RolesTab = () => {
  return (
    <>
      <div>
        <h2 className="title-large">User Roles</h2>
        <p className="text-gray-400 text-sm font-normal">
          Manage your team and preferences here.
        </p>
      </div>
      <hr className="text-gray-200 " />

      <div className="flex gap-5 mt-3">
        <div className="flex flex-wrap flex-col md:flex-row gap-5 w-[60%]">
          <div>
            <p className="text-sm font-normal text-gray-700">Connected email</p>
            <p className="text-sm font-normal text-gray-400">
              Select role account
            </p>
          </div>
          <div className="flex-col flex gap-3 flex-1">
            <div className="flex gap-2 items-start w-full">
              <div>
                <input type="radio" className="hidden" />
                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              </div>
              <div className="text-sm font-medium">
                <p className="text-sm font-normal text-gray-700">
                  My account email
                </p>
                <p className="text-sm font-normal text-gray-400">
                  olivia@untitledui.com
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start w-full">
              <div>
                <input type="radio" className="hidden" />
                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
              </div>
              <div className="text-sm font-medium flex flex-col gap-2 w-full">
                <p className="text-sm font-normal text-gray-700">
                  An alternative email
                </p>
                <div className="w-100 relative">
                  <span className="absolute left-2 top-1/2  -translate-y-1/2 font-bold">
                    <MailIcon />
                  </span>
                  <input
                    className="pl-8 pr-3 rounded-md py-2 outline-none w-full border border-gray-300"
                    placeholder="billing@untitledui.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-gray-200 " />

      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div>
          <p className="text-sm font-normal text-gray-700">Active Role</p>
          <p className="text-sm font-normal text-gray-400">
            Select active role available to the user.
          </p>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((v) => {
              return <RoleCard key={v} />;
            })}
            <div className="flex gap-1 items-center text-gray-500 text-sm">
              <span className="text-gray-500 text-lg">
                <IoIosAdd />
              </span>
              <span>Add role to user</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 items-start sm:items-center w-100 mt-4">
        <h2 className="text-gray-900 font-medium text-lg">User Roles</h2>
        <div>
          <button className="outline-none border border-gray-300 rounded-lg bg-base-default flex gap-2 justify-center items-center text-gray-700 px-3 py-2">
            <span className="text-gray-700">
              <FiDownloadCloud />
            </span>
            <span>Download all</span>
          </button>
        </div>
      </div>

      <div className="mt-4 -mb-3">
        <Table />
      </div>
    </>
  );
};

export default RolesTab;
