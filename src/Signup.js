import React, { useState, useEffect } from "react";

function Signup() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  if (!formData) {
    return <div>No data available</div>;
  }
  return (
    <>
      <div>
        <h1>Submitted Details </h1>
        {Object.keys(formData).map((k, i) => {
          return (
            <>
              <div key={i} className="flex flex-row">
                <h1 className="mx-2 font-semibold">{k}:</h1>
                <p>{formData[k]}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Signup;
