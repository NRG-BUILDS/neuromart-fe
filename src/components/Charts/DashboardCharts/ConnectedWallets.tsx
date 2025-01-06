import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { LucidePlusCircle } from 'lucide-react';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';
import React from 'react';

const ConnectedWallets: React.FC = () => {
  return (
    <div className="col-span-12 rounded-3xl bg-secondary text-white bg-opacity-70 px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-6">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap"></div>
      <h2 className="font-bold text-xl">Connected Apps and Wallets</h2>
      <ScrollArea className="w-[95%] whitespace-nowrap">
        <div className="flex w-max space-x-4 pl-0 p-4">
          <FaGithub size={71} />
          <FaGoogleDrive size={71} />
          <button className="rounded-full flex items-center justify-center">
            <LucidePlusCircle size={71} strokeWidth={0.7} />
          </button>
        </div>
        <ScrollBar
          color="#582cff"
          orientation="horizontal"
          className="bg-primary/20"
        />
      </ScrollArea>
    </div>
  );
};

export default ConnectedWallets;
