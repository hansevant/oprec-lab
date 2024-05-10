import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {

  const bgc = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
  ]

  const bdc = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ]

  const getChartRole = async() => {
    const r = await axios.get('http://localhost:4000/registrants/chart/role');
    setChartDataRole({
      labels: ['Asisten', 'Programmer'],
      datasets: [
        {
          label: '# of Votes',
          data: r.data.data,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
    setChartOptionsRole({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Pendaftar Berdasarkan Posisi",
        },
      },
    });
  }

  const getChartRegion = async() => {
    const r = await axios.get('http://localhost:4000/registrants/chart/region');
    setChartDataRegion({
      labels: ['Depok', 'Kalimalang', 'Karawaci', 'Cengkareng', 'Salemba'],
      datasets: [
        {
          label: '# of Votes',
          data: r.data.data,
          backgroundColor: bgc,
          borderColor: bdc,
          borderWidth: 1,
        },
      ],
    });
    setChartOptionsRegion({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Pendaftar Berdasarkan Region",
        },
      },
    });
  }

  const getChartBatch = async() => {
    const r = await axios.get('http://localhost:4000/registrants/chart/batch');
    setChartDataBatch({
      labels: ['2019', '2020', '2021'],
      datasets: [
        {
          label: '# of Votes',
          data: r.data.data,
          backgroundColor: bgc,
          borderColor: bdc,
          borderWidth: 1,
        },
      ],
    });
    setChartOptionsBatch({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Pendaftar Berdasarkan Angkatan",
        },
      },
    });
  }

  const [chartDataRegion, setChartDataRegion] = useState({
    datasets: [],
  });
  const [chartOptionsRegion, setChartOptionsRegion] = useState({});

  const [chartDataRole, setChartDataRole] = useState({
    datasets: [],
  });
  const [chartOptionsRole, setChartOptionsRole] = useState({});
 
  const [chartDataBatch, setChartDataBatch] = useState({
    datasets: [],
  });
  const [chartOptionsBatch, setChartOptionsBatch] = useState({});
 
  useEffect(() => {
    getChartRole();
    getChartRegion();
    getChartBatch();
  }, []);

  return (
    <>
        <Navbar active="dashboard" />
          <div className="w-full p-4 flex flex-wrap justify-center">
            <div className="mb-12 w-[400px] p-4">
              <Pie data={chartDataRegion} options={chartOptionsRegion} />
            </div>
            <div className="mb-12 w-[400px] p-4">
              <Pie data={chartDataBatch} options={chartOptionsBatch} />
            </div>
            <div className="mb-12 w-[400px] p-4">
              <Pie data={chartDataRole} options={chartOptionsRole} />
            </div>
          </div>
    </>
  )
}

export default Dashboard