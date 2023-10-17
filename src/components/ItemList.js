import "./ItemList.css";
import { BiSitemap } from "react-icons/bi";
function ItemList() {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="card p-3 custom-shadow">
          <h6>
            <BiSitemap style={{ marginRight: "10px" }} />
            Add Item List Summary
          </h6>
        </div>
      </div>
      <div className="col-md-12" style={{ marginLeft: "20px" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group mt-2 mb-3" style={{ maxWidth: "1300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search..."
                aria-describedby="basic-addon2"
              />
              <div
                className="input-group-append"
                style={{ marginLeft: "15px" }}
              >
                <button className="btn btn btn-primary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-2">
          <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h3>Add Item Lists</h3>
              </div>
              <div className="float-end">
                <button className="btn btn-light mr-2">List Item View</button>
                <button className="btn btn-primary">Link Code View</button>
              </div>
            </div>

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
                  <td></td>
                </tr>
                <tr>
                  <td>06/06/2023</td>
                  <td>Missing Deals</td>
                  <td>06/5/2023 Ad Speacial</td>
                  <td>1</td>
                  <td>Ad Master</td>
                  <td></td>
                </tr>
                <tr>
                  <td>06/06/2023</td>
                  <td>Missing Deals</td>
                  <td>06/5/2023 Ad Speacial</td>
                  <td>1</td>
                  <td>Ad Master</td>
                  <td></td>
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
  );
}

export default ItemList;
