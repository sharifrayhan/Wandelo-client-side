import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TourTypes = () => {
  
    const data = [
    {
      id: 1,
      title: 'Beach and Relaxation',
      image: 'https://i.ibb.co/345ZPgg/beach.png',
      link: '/Beach-tours',
    },
    {
      id: 2,
      title: 'Nature and Culture',
      image: 'https://i.ibb.co/C7hwNXM/forest.png',
      link: '/nature-tours',
    },
    {
      id: 3,
      title: 'Hiking and Nature',
      image: 'https://i.ibb.co/c1qCYrJ/hiking.png',
      link: '/hiking-tours',
    },
    {
      id: 4,
      title: 'Wildlife and Nature',
      image: 'https://i.ibb.co/VjYNS1t/wildlife.png',
      link: '/wildlife-tours',
    },
  ];

  return (
    <div className="mx-auto my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Explore Different Tour Types</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.map((d) => (
          <Link to={d?.link} key={d?.id}>
            <motion.div
              whileHover={{ scale: 1.10 }}
              className="p-4 border border-gray-300 rounded-md overflow-hidden"
            >
              <img src={d?.image} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center">{d?.title}</h3>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourTypes;
