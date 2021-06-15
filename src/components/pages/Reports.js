import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import http from "../../http-common";
const Reports = () => {
  const [chartData, setChartData] = useState({});
  const [region, setRegion] = useState('North');
  const mom_sales = async () => {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0];
    const res =  await http.get(`policy/sales?region=${region}`);
    console.log(res);
    res.data && res.data.forEach(element => {arr[element.month_of_year-1] = element.count});
    console.log(arr);
    return arr;

  };
  const chart = async () => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Month on Month Sales",
          data: await mom_sales(),
          backgroundColor: ["rgba(63,127,191,0.8)"],
          borderWidth: 4,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  const onInputChange = (e) => {
    setRegion(e.target.value);
    chart();
  };
  return (
    <div className="container">
      <form>
        <div className="input-group">
          <select
            className="form-select mr-2"
            id="inputGroupSelect04"
            name="searchType"
            value={region}
            onChange={(e) => onInputChange(e)}
          >
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </div>
      </form>
      <Line data={chartData} options={{
            responsive: true,
            title: { text: "Month on Month Sales", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}/>
    </div>
  );
};
export default Reports;
