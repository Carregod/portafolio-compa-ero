import React from "react";

const withStyle = (WrappedComponent) => {
  return (props) => (
    <div style={{ /* tus estilos aquí */ }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withStyle;
