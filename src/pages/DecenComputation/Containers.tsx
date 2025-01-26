import { Button } from '@/components/ui/button';
import Image from '@/components/ui/Image';
import { Link } from 'react-router-dom';

const ComputeContainers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-10">
        Introducing our two powerful containers tailored to your specific needs
      </h1>
      <div className="grid items-stretch gap-10 md:grid-cols-2">
        <ContainerCard
          name="Efficient Computing"
          purpose="Designed for general purpose computing tasks, this container is equipped with essential libraries for data manipulation, machine learning and visualization."
          libraries={[
            'Numpy',
            'Sckit-learn',
            'Pandas',
            'Matplotlib',
            'Seaborn',
          ].join(', ')}
        />

        <ContainerCard
          name="Advanced Visualization and Computation"
          purpose="Tailored for demanding computation and advanced visualization, this container houses a comprehensive suite of libraries, enabling you to tackle complex ML models and generate visually compelling outputs."
          libraries={[
            'Numpy',
            'Scipy',
            'Sckit-learn',
            'Theano',
            'TensorFlow',
            'Keros',
            'PyTorch',
            'Pandas',
            'Matplotlib',
            'Seaborn',
            'Plotly',
          ].join(', ')}
        />
      </div>
    </div>
  );
};

export default ComputeContainers;

interface ContainerCardProps {
  name: string;
  libraries: string;
  purpose?: string;
}

const ContainerCard = ({ name, libraries, purpose }: ContainerCardProps) => {
  return (
    <div className="flex flex-col items-start gap-5 p-4 hover:bg-white/10 border border-dashed border-white border-opacity-25 rounded-xl">
      <div className="w-full aspect-video rounded-lg overflow-clip">
        <Image src={'d'} />
      </div>

      <div>
        <h2 className="font-semibold text-xl">{name}</h2>
      </div>
      <div>
        <h3 className="font-semibold">Libraries:</h3>
        <span className="">{libraries}</span>
      </div>
      <div>
        <h3 className="font-semibold">Purpose:</h3>
        <span className="">{purpose}</span>
      </div>
      <div></div>
      <Button variant={'outline'} type="button" asChild>
        <Link to={'#'}>Try Now</Link>
      </Button>
    </div>
  );
};
