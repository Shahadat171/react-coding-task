import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [tdatas, setTdatas] = useState([]);
  const [show, setShow] = useState("all");
  useEffect(() => {
    fetch(`http://localhost:5000/allTdatas`)
      .then((res) => res.json())
      .then((data) => {  
        if(show === "active") {
          const active = data.filter(sdata => sdata.status === "active");
          setTdatas(active);
        } else if(show === "completed") {
          const completed = data.filter(sdata => sdata.status === "completed");
          setTdatas(completed);
        } else {
            const sortedTdatas = [...data].sort((a, b) => {
                if (a.status === "active") return -1; 
                if (b.status === "active") return 1;  
                if (a.status === "completed") return -1; 
                if (b.status === "completed") return 1; 
        
                return 0;
              });
              setTdatas(sortedTdatas);
        }
      });
  }, [show]);
  
  const handleClick = (val) => {
    setShow(val);
  };
  const addtable = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const status = form.status.value;
    const newTeddyBear = { name, status };
    fetch("http://localhost:5000/tdatas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTeddyBear),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={addtable}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {tdatas.map((tdata)=>
            <tr key={tdata._id}>
                <td>{tdata.name}</td>
                <td>{tdata.status}</td>
            </tr>     
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
