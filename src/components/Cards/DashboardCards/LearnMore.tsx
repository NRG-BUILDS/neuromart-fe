import Image from '@/components/ui/Image';
import banner from '@/images/cards/learnmore.jpg';
import { FaArrowRight } from 'react-icons/fa';

const LearnMoreCard = () => {
  return (
    <div className="rounded-3xl text-white relative overflow-clip w-full min-h-100 p-5 px-6">
      <div className="absolute top-0 left-0 size-full">
        <Image src={banner} />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-secondary via-primary/40 to-transparent"></div>
      <div className="relative z-20">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">
            Learn more on models and datasets
          </h2>
          <p className="max-w-100">
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who take the opportunity first.
          </p>
        </div>
      </div>
      <div className="absolute z-20 bottom-6 left-6 font-semibold flex items-center gap-3 text-lg">
        <p>Read more</p>
        <FaArrowRight size={28} />
      </div>
    </div>
  );
};

export default LearnMoreCard;
