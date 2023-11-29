import React from "react";
import styles from "../../assets/css/tailwind.scss?inline";

type Props = {
  name: string;
};

const index: React.FC<Props> = ({ name }) => {
  return (
    <>
      <style>{styles.toString()}</style>
      <div className="absolute w-full h-screen bg-gray-300" />
      <div className="relative flex items-center justify-center h-screen bg-yellow-500 z-10">
        <div className="bg-green-100 w-1/4 h-1/2 text-green-500">
          <div className="w-full py-3 bg-red-500">{}</div>
          <div className="w-full py-3 bg-red-500 flex-1 h-96">Content</div>
          <div className="w-full py-3 bg-red-500">Footer</div>
        </div>
      </div>
    </>
  );
};

export default index;
