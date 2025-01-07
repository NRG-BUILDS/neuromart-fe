import { Button } from '@/components/ui/button';
import video from '@/videos/datasets_banner.mp4';
import videoPoster from '@/images/video_posters/7020018_Particle_Dot_1920x1080 1.png';
import { HeroCard } from '@/components/Cards/HeroCard';

const Datasets = () => {
  return (
    <>
      <HeroCard
        description="Discover, analyze, and share high-quality datasets. Go-to platform
            for seamless exploration, analysis, and collaborative sharing of
            top-notch datasets."
        title="Datasets"
        video={video}
        videoPoster={videoPoster}
        action={<Button>Upload</Button>}
      />
    </>
  );
};

export default Datasets;
