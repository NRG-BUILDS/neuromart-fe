import { Button } from '@/components/ui/button';
import video from '@/videos/aiagent_banner.mp4';
import videoPoster from '@/images/video_posters/AI_Agent_Sphere.png';
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

export default AIAgents;
