import React from "react";

const ScopeContainer = ({ className = "", state = "error", children }) => {
  if (state === "failure") return null;

  const containerClass = `${className} flex flex-col`;

  const stateMap = {
    idle: children,
    loading: <span className="loading loading-spinner loading-xl text-base-content loading-center" />,
    error: <span className="loading loading-spinner loading-xl text-warning loading-center" />,
  };

  return <div className={containerClass}>{stateMap[state] || stateMap.error}</div>;
};

export default ScopeContainer;