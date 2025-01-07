import { FC } from 'react';
import { ReactNode } from 'react';
type HeroCardProps = {
  video: string;
  videoPoster: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export const HeroCard: FC<HeroCardProps> = ({
  video,
  videoPoster,
  title,
  description,
  action,
}) => {
  return (
    <div className="relative overflow-clip min-h-[201px] rounded-3xl flex items-center p-4 xl:p-9">
      <video
        className="absolute top-0 left-0  w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={video}
        poster={videoPoster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-black to-transparent z-0"></div>
      <div className="grid gap-1.5 z-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="max-w-xl mb-2 mt-1">{description}</p>
        <div className="flex items-center">{action}</div>
      </div>
    </div>
  );
};
