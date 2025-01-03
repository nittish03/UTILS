import React, { useState } from "react";
import QRCode from "react-qr-code";

const Qrcode = () => {
  const [value, setValue] = useState(" ");

  return (
    <>
      <div className="w-full h-[88vh] flex flex-col justify-center items-center content-center">
        <form className="flex flex-col items-center">
          <input
            type="text"
            className="border-2 mb-6 w-64"
            placeholder="hello"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="flex justify-center items-center">
            <QRCode size={256} value={value} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Qrcode;
