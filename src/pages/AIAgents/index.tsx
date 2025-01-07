import { Button } from '@/components/ui/button';
import video from '@/videos/aiagent_banner.mp4';
import videoPoster from '@/images/video_posters/AI_Agent_Sphere.png';
import { HeroCard } from '@/components/Cards/HeroCard';

const AIAgents = () => {
  return (
    <>
      <HeroCard
        title="Upload An Agent"
        description="Discover, explore and connect with the best AI Agents for your benefits."
        video={video}
        videoPoster={videoPoster}
        action={<Button>Upload</Button>}
      />
    </>
  );
};

export default AIAgents;
