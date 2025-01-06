import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import TopPerformingChart from '@/components/Charts/DashboardCharts/TopPerforming';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="p-4 px-5 rounded-3xl bg-[#0D0F40B5] bg-opacity-70 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="col-span-full">
          <h1 className="col-span-full text-xl font-bold text-white">
            Overview Section
          </h1>
          <p className="text-gray-500">Summary</p>
        </div>

        <CardDataStats
          title="Total Models Uploaded"
          total="3K"
          rate="0.43% from yesterday"
          levelUp
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FA5A7D" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 11C11.8954 11 11 11.8954 11 13V27C11 28.1046 11.8954 29 13 29H27C28.1046 29 29 28.1046 29 27V13C29 11.8954 28.1046 11 27 11H13ZM16 21C16 20.4477 15.5523 20 15 20C14.4477 20 14 20.4477 14 21V25C14 25.5523 14.4477 26 15 26C15.5523 26 16 25.5523 16 25V21ZM20 17C20.5523 17 21 17.4477 21 18V25C21 25.5523 20.5523 26 20 26C19.4477 26 19 25.5523 19 25V18C19 17.4477 19.4477 17 20 17ZM26 15C26 14.4477 25.5523 14 25 14C24.4477 14 24 14.4477 24 15V25C24 25.5523 24.4477 26 25 26C25.5523 26 26 25.5523 26 25V15Z"
              fill="white"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Total Datasets Uploaded"
          total="452"
          rate="5% from yesterday"
          levelUp
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FF947A" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 14C12 11.7909 13.7909 10 16 10H22V14C22 16.2091 23.7909 18 26 18H28V26C28 28.2091 26.2091 30 24 30H16C13.7909 30 12 28.2091 12 26V14ZM16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H16ZM16 23C15.4477 23 15 23.4477 15 24C15 24.5523 15.4477 25 16 25H20C20.5523 25 21 24.5523 21 24C21 23.4477 20.5523 23 20 23H16ZM24.6818 12.1988L24.5509 14.1629C24.5106 14.7666 25.0115 15.2674 25.6152 15.2272L27.5792 15.0962C28.4365 15.0391 28.8274 13.9989 28.2198 13.3913L26.3867 11.5582C25.7792 10.9507 24.7389 11.3415 24.6818 12.1988Z"
              fill="white"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Total Earnings"
          total="$2.4k"
          rate="2.59% from yesterday"
          levelDown
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20.5" r="20" fill="#080510" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.6261 13.7653L21.3263 14.2367C20.8222 14.3087 20.4103 14.549 20.1162 14.8811L12.4167 22.5806C11.6357 23.3616 11.6357 24.6279 12.4167 25.409L15.2452 28.2374C16.0263 29.0185 17.2925 29.0185 18.0736 28.2374L25.773 20.538C26.1051 20.2439 26.3454 19.832 26.4174 19.3279L26.8888 16.028C27.0775 14.7081 25.946 13.5767 24.6261 13.7653ZM22.3162 18.3379C22.7067 18.7284 23.3399 18.7285 23.7305 18.3379C24.121 17.9474 24.1209 17.3142 23.7305 16.9237C23.34 16.5332 22.7068 16.5332 22.3162 16.9237C21.9257 17.3142 21.9257 17.9474 22.3162 18.3379Z"
              fill="white"
            />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Active Subscriptions"
          total="900"
          rate="0.95% from yesterday"
          levelDown
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#BF83FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 16C22 18.2091 20.2091 20 18 20C15.7909 20 14 18.2091 14 16C14 13.7909 15.7909 12 18 12C20.2091 12 22 13.7909 22 16ZM18 21C14.134 21 11 23.2386 11 26C11 27.1046 11.8954 28 13 28H23C24.1046 28 25 27.1046 25 26C25 23.2386 21.866 21 18 21ZM26 14C26.5523 14 27 14.4477 27 15V16H28C28.5523 16 29 16.4477 29 17C29 17.5523 28.5523 18 28 18H27V19C27 19.5523 26.5523 20 26 20C25.4477 20 25 19.5523 25 19V18H24C23.4477 18 23 17.5523 23 17C23 16.4477 23.4477 16 24 16H25V15C25 14.4477 25.4477 14 26 14Z"
              fill="white"
            />
          </svg>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <TopPerformingChart />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Dashboard;
