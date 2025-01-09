import { Button } from '@/components/ui/button';
import video from '@/videos/datasets_banner.mp4';
import videoPoster from '@/images/video_posters/7020018_Particle_Dot_1920x1080 1.png';
import { HeroCard } from '@/components/Cards/HeroCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/ui/emptystate';
import { Link } from 'react-router-dom';

const tabs = [
  { label: 'All', value: '' },
  { label: 'Business & Productivity', value: 'Business & Productivity' },
  {
    label: 'Creative & Comment Solutions',
    value: 'Creative & Comment Solutions',
  },
  { label: 'Technical & IT Services', value: 'Technical & IT Services' },
  {
    label: 'Personal & Professional Assistance',
    value: 'Personal & Professional Assistance',
  },
];

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

      <section>
        <Tabs defaultValue="" className="py-8">
          <TabsList className="flex-wrap">
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="">
            <EmptyState
              title="No AI Agents Found"
              action={
                <Button asChild>
                  <Link to={'upload'}>Upload Agent</Link>
                </Button>
              }
            />
          </TabsContent>
        </Tabs>{' '}
      </section>
    </>
  );
};

export default Datasets;
