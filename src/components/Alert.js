import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`rounded-md ${
            props.alert.type === "success"
              ? "bg-green-100 border-green-300"
              : props.alert.type === "danger"
              ? "bg-red-100 border-red-300"
              : "" // Add more cases for other alert types if needed
          } p-4 border`}
        >
          <div className="flex">
            <div
              className={`flex-shrink-0 text-${
                props.alert.type === "success" ? "green" : "red"
              }-400`}
            >
              {/* Icon or symbol for the alert type */}
              {props.alert.type === "success" && (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Success icon path */}
                </svg>
              )}
              {props.alert.type === "danger" && (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Danger icon path */}
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p
                className={`text-sm leading-5 text-${
                  props.alert.type === "success" ? "green" : "red"
                }-700`}
              >
                <strong>{capitalize(props.alert.type)}:</strong>{" "}
                {props.alert.msg}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
