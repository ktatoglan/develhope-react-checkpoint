import { useState } from "react";

function Dashboard() {
  const [id, setId] = useState(0);

  return (
    <>
      <input
        type="number"
        name="id"
        min={1}
        max={10}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <hr />
      <button
        onClick={() => {
          window.location.replace("/address/" + id);
        }}
      >
        Address
      </button>
      <button
        onClick={() => {
          window.location.replace("/details/" + id);
        }}
      >
        Details
      </button>
    </>
  );
}

export default Dashboard;
