import { UserProps } from "@/interface";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ClientCard: React.FC<UserProps> = ({
  id,
  name,
  profession,
  userImage,
  review,
}) => {
  return (
    <div className="bg-white shadow-md dark:bg-gray-900 rounded-lg m-3 p-6 relative">
      <QuoteIcon className="w-8 h-8 absolute top-4 right-4 text-red-600 dark:text-yellow-300 opacity-20" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
        <FaStar className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
        <FaStar className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
        <FaStar className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
        <FaStar className="w-4 h-4 text-yellow-600 dark:text-yellow-300" />
      </div>
      <div className="mt-6 text-base text-gray-600 dark:text-gray-300 font-semibold line-clamp-3">
        {review}
      </div>
      <div className="w-full h-[1.2px] bg-gray-300 opacity-10 mt-6 mb-6"></div>
      <div className="flex items-center space-x-4">
        <Image
          src={userImage}
          alt="img"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800 dark:text-gray-200">{name}</h1>
          <p className="text-sm text-gray-500">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
