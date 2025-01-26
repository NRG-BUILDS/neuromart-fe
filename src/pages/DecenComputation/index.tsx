import { Button } from '@/components/ui/button';
import video from '@/videos/datasets_banner.mp4';
import videoPoster from '@/images/video_posters/7020018_Particle_Dot_1920x1080 1.png';
import { HeroCard } from '@/components/Cards/HeroCard';

import { Link } from 'react-router-dom';

const DecentralizedComputation = () => {
  return (
    <>
      <HeroCard
        title="Experience Decentralized Computing"
        description="Welcome to our platform, where you can harness the power of decentralized computing or your ML model computations."
        video={video}
        videoPoster={videoPoster}
        action={
          <Button asChild>
            <Link to={'containers'}>Try Now</Link>
          </Button>
        }
      />

      <section></section>
    </>
  );
};

export default DecentralizedComputation;
