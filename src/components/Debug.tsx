import React from "react";

function Debug(props: any): JSX.Element {
  return (
    <div
      style={{
        fontSize: 20,
        border: "1px solid #efefef",
        padding: 10,
        background: "#fff",
      }}
    >
      {Object.entries(props).map(([key, val]: any) => {
        return (
          <pre key={val}>
            <strong style={{color: "#fff", background: "red"}}>{key}</strong>
            {JSON.stringify(val, null, 2)}
          </pre>
        );
      })}
    </div>
  );
}
export default Debug;
