// import React from "react";
import { Line } from "react-chartjs-2";


export default function MetricsChart() {
  const data1 = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: "origin",
        backgroundColor: "rgba(253, 244, 255, 1)",
        borderColor: "rgba(232, 121, 249, 1)",
        tension: 0.3,
        borderWidth: 2,
        data: [1, 3, 2, 5, 4, 5, 7],
      },
    ],
  };

  const data2 = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: "origin",
        backgroundColor: "rgba(236, 254, 255, 1)",
        borderColor: "rgba(34, 211, 238, 1)",
        tension: 0.3,
        borderWidth: 2,
        data: [1, 5, 4, 5, 3, 6, 3],
      },
    ],
  };

  const data3 = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: "origin",
        backgroundColor: "rgba(255, 251, 235, 1)",
        borderColor: "rgba(251, 191, 36, 1)",
        tension: 0.3,
        borderWidth: 2,
        data: [2, 5, 4, 6, 3, 5, 7],
      },
    ],
  };

  const data4 = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: "origin",
        backgroundColor: "rgba(236, 253, 245, 1)",
        borderColor: "rgba(52, 211, 153, 1)",
        tension: 0.3,
        borderWidth: 2,
        data: [1, 5, 2, 5, 3, 7, 6],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      enabled: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: false,
        },
        display: false,
        ticks: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
        },

        display: false,
        title: {
          display: false,
        },
        ticks: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };

  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-200 dark:bg-gray-900">
        <div className="container max-w-6xl px-5 mx-auto my-28">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
              <div className="text-base text-gray-400 ">Total Sales</div>
              <div className="relative z-10 flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">
                  $9850.90
                </div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1.8%</span>
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0  z-0">
                <Line height={80} data={data1} options={chartOptions} />
              </div>
            </div>
            <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
              <div className="text-base text-gray-400 ">Net Revenue</div>
              <div className="relative z-10 flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">
                  $7520.50
                </div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2.5%</span>
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 z-0">
                <Line height={80} data={data2} options={chartOptions} />
              </div>
            </div>
            <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
              <div className="text-base text-gray-400 ">Customers</div>
              <div className="relative z-10 flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">1375</div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>5.2%</span>
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 z-0">
                <Line height={80} data={data3} options={chartOptions} />
              </div>
            </div>
            <div className="relative p-5 pb-16 overflow-hidden bg-white rounded-md shadow-sm">
              <div className="text-base text-gray-400 ">MRR</div>
              <div className="relative z-10 flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">$250.00</div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2.2%</span>
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 z-0">
                <Line height={80} data={data4} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}