import React from "react";
import Sidebar from "./Sidebar";
import { FaUserEdit } from "react-icons/fa";
import { BsDatabase,BsGraphUpArrow } from "react-icons/bs";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group mt-2 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..." 
                  aria-label="Search..."
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card" style={{ height: "150px" }}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h3>Hi, Vinuthna!</h3>
                    <p>Ad Manager @C&S</p>
                  </div>
                  <div className="float-end">
                    <button className="btn btn-light mr-2">
                      Enroll a Ticket
                    </button>
                    <button className="btn btn-primary"><BsGraphUpArrow/>Upgrade a plan</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ height: "150px" }}>
                <div
                  className="card-body bg-light"
                  style={{ backgroundColor: "#ADD8E6" }}
                >
                  <h6>Carry yours deals to the top</h6>
                  <h3>Upgrade now</h3>
                  <button className="btn btn-primary"><BsDatabase/>see all add plans</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mt-2">
              <div className="card">
                <div className="card-body">
                  <h3>Deals Dashboard Overview</h3>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Ad Date</th>
                        <th>Missing Deals</th>
                        <th>Ad Theme</th>
                        <th>Level</th>
                        <th>Ad Version</th>
                        <th>Modify</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>06/06/2023</td>
                        <td>Missing Deals</td>
                        <td>06/5/2023 Ad Speacial</td>
                        <td>1</td>
                        <td>Ad Master</td>
                        <td><FaUserEdit/></td>
                      </tr>
                      <tr>
                        <td>06/06/2023</td>
                        <td>Missing Deals</td>
                        <td>06/5/2023 Ad Speacial</td>
                        <td>1</td>
                        <td>Ad Master</td>
                        <td><FaUserEdit/></td>
                      </tr>
                      <tr>
                        <td>06/06/2023</td>
                        <td>Missing Deals</td>
                        <td>06/5/2023 Ad Speacial</td>
                        <td>1</td>
                        <td>Ad Master</td>
                        <td><FaUserEdit/></td>
                        <td>
                          <i
                            className="fas fa-edit ml-2"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
