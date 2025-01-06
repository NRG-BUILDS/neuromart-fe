import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Revenue from '../components/Charts/DashboardCharts/RevenueChart';
import ChartThree from '../components/Charts/ChartThree';
import DownloadStatistics from '../components/Charts/DashboardCharts/DownloadStatisticsChart';

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <Revenue />
        <DownloadStatistics />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
