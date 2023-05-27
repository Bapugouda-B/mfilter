
import React from "react";
import "./graphContainer.css";
import Areachart from "../graphComponent/areaChart.js";
import Piechart from "../graphComponent/pieChart.js";
import Mixedchart from "../graphComponent/mixedBarChart.js";
import Barchart from "../graphComponent/barChart1.js";
import { BsThreeDotsVertical, BsClock } from "react-icons/bs";
import {
  FaAddressBook,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Barchart2 from "../graphComponent/barChart2.js";
import Fraudchart from "../graphComponent/fraudChart.js";

export default function Graphcontainer() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="card">
          <h4 className="chart-title">Total Installs vs Fraudulent Installs</h4>
          <Areachart />
        </div>
        <div className="card">
          <div className="piechart-container">
            <div className="piechart-content">
              <div className="left-content">
                <h5>Fraud Categories</h5>
                <Piechart />
              </div>
              <div className="right-content">
                <h5>
                  Sub Fraud Categories <br /> for Distribution Fraud
                </h5>
                <p>OS-0</p>
                <p>ISP-0</p>
                <p>IP-0</p>
              </div>
            </div>
            <div className="piechart-table">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Fraud Categories</th>
                    <th>Counts</th>
                    <th>Fraud %</th>
                  </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <td>Distribution Fraud</td>
                    <td>8,457</td>
                    <td>11.5</td>
                  </tr>
                  <tr>
                    <td>Device Fraud</td>
                    <td>8636</td>
                    <td>11.7</td>
                  </tr>
                  <tr>
                    <td>Click Fraud</td>
                    <td>56,415</td>
                    <td>76.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="barchart-container">
            <div className="barchart-1">
              <div className="chart1-header">
                <div>
                  <h4 style={{ margin: 0, padding: 0 }}>Clean Installs</h4>
                  <small>Top 5 Publichers</small>
                </div>
                <div className="dot-icon">
                  <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                </div>
              </div>
              <div className="chart1">
                <Barchart />
              </div>
            </div>
            <div className="barchart-2">
              <div className="chart2-header">
                <div>
                  <h4 style={{ margin: 0, padding: 0 }}>Fraudulent Installs</h4>
                  <small>Top 5 Publichers</small>
                </div>
                <div className="dot-icon">
                  <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                </div>
              </div>
              <div className="chart2">
                <Barchart2 />
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="chart2-header">
            <div>
              <h5 style={{ margin: 0, padding: 0 }}>
                Distribution Fraud <small>Over Date</small>{" "}
              </h5>
              <span>
                8,457 <small>0.57%</small>{" "}
              </span>
            </div>
            <div className="data-filter">
              <div className="icon-box">
                <BsClock className="icon" />
                <FaUsers className="icon" />
              </div>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div>
            <Fraudchart />
          </div>
        </div>
        <div className="card">
          <div className="chart2-header">
            <div>
              <h5 style={{ margin: 0, padding: 0 }}>
                Total/Fraudulent Installs <small>Over Date</small>{" "}
              </h5>
              <span>
                8,457 <small>0.57%</small>{" "}
              </span>
            </div>
            <div className="data-filter">
              <div className="icon-box">
                <BsClock className="icon" />
                <FaUsers className="icon" />
                <FaAddressBook className="icon" style={{}} />
              </div>
              <BsThreeDotsVertical />
            </div>
          </div>
          <Mixedchart />
        </div>
        <div className="card">
          <div className="chart2-header">
            <div className="headline">
              <h5 style={{ margin: 0, padding: 0 }}>
                Sub Fraud Categories <small>Over Date</small>{" "}
              </h5>
            </div>
            <div className="data-filter">
              <div className="icon-box">
                <BsClock className="icon" />
                <FaUsers className="icon" />
              </div>
              <BsThreeDotsVertical />
            </div>
          </div>

          <div>
            <div className="carousel-container">
              <FaChevronLeft style={{ cursor: "pointer" }} />

              <span>OS</span>
              <span>ISP</span>
              <span>IP</span>
              <span>Device</span>

              <FaChevronRight style={{ cursor: "pointer" }} />
            </div>
            <div className="fraud-category">No Data Found</div>
          </div>
        </div>
      </div>
    </div>
  );
}