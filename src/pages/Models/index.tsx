import { Button } from '@/components/ui/button';
import video from '@/videos/datasets_banner.mp4';
import videoPoster from '@/images/video_posters/7020018_Particle_Dot_1920x1080 1.png';
import { HeroCard } from '@/components/Cards/HeroCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/ui/emptystate';
import { Link } from 'react-router-dom';

const tabs = [
  { label: 'All', value: '' },
  { label: 'Text Generation', value: 'Text Generation' },
  { label: 'Image Generation', value: 'Image Generation' },
  { label: 'Audio Synthesis', value: 'Audio Synthesis' },
  { label: 'Others', value: 'Others' },
];

const Models = () => {
  return (
    <>
      <HeroCard
        title="Models"
        description="Simplifies your search for ready-to-use machine learning models. Discover and deploy hundreds of trained models effortlessly, all in one convenient place."
        video={video}
        videoPoster={videoPoster}
        action={
          <Button asChild>
            <Link to={'upload'}>Upload</Link>
          </Button>
        }
      />

      <section>
        <Tabs defaultValue="" className="py-8">
          <TabsList className="flex-wrap">
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="">
            <EmptyState
              title="No Models Found"
              action={
                <Button asChild>
                  <Link to={'upload'}>Upload Model</Link>
                </Button>
              }
            />
          </TabsContent>
        </Tabs>{' '}
      </section>
    </>
  );
};

export default Models;
