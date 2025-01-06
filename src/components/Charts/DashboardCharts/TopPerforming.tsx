import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const models = [
  {
    name: 'Dataset Model',
    popularity: 70,
    downloads: 7600,
    position: 1,
  },
];

const TopPerformingChart: React.FC = () => {
  return (
    <div className="col-span-12 rounded-3xl bg-secondary text-white bg-opacity-70 px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap"></div>
      <h2 className="font-bold">Top Performing</h2>
      <div className="hidden lg:grid grid-cols-4 w-full justify-between py-2">
        <p>#</p>
        <p>Name</p>
        <p>Popularity</p>
        <p>Downloads</p>
      </div>
      <div className="grid items-center"></div>
    </div>
  );
};

export default TopPerformingChart;
