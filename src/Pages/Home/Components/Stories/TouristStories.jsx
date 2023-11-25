import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const stories = [
  {
    id: 1,
    name: "Niloy Ahmed",
    title: 'Exploring the Bandarbans',
    content: 'An thrilling journey towards one of the highest places of Bangladesh. It was a pleasant tour with friends. It was a tour of 4 days. We left from Dhaka at 11:00 pm and reached Ruma district of Bandarban on the next day at 10:00 am. Then, we visited Boga Lake, Chingri Jharna, and other places on that day. We stayed near Boga Lake that night. The next day, we left early in the morning to trek Keokradong. It took us 6 hours to trek to Keokradong. We stayed the night there and left Keokradong the next morning. It was a very exciting and thrilling journey.',
  },
  {
    id: 2,
    name: "Mandana Ashrafi",
    title: 'Jungle Adventure in Sundarbans',
    content: 'Embarking on an unforgettable jungle adventure in the Sundarbans, the largest mangrove forest in the world. The journey started with a boat ride through the winding rivers surrounded by lush greenery. We encountered diverse wildlife, including spotted deer, crocodiles, and various species of birds. The thrill peaked when we spotted a Royal Bengal Tiger from a distance. The mesmerizing beauty of the mangrove forest and the unique ecosystem left us in awe. It was an adventure filled with excitement and a deep connection with nature.',
  },
  {
    id: 3,
    name: "Sefat Al Fami",
    title: 'Relaxing Beach Vacation in Cox\'s Bazar',
    content: 'Indulging in the tranquility of the world\'s longest natural sea beach at Cox\'s Bazar. The sound of the waves, the golden sandy shores, and the breathtaking sunset created a perfect backdrop for relaxation. We strolled along the beach, enjoying the fresh sea breeze and the warmth of the sun. The vibrant beach life, with numerous beach activities and local delicacies, added to the charm of the vacation. It was a rejuvenating experience, providing a perfect blend of serenity and adventure on the shores of Cox\'s Bazar.',
  },
];

export const TouristStories = () => {
  return (
    <div className="mx-auto max-w-2xl my-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center">Tourist Stories</h2>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="swiper-slide">
            <Link to={`/StoryDetails/${story.id}`}>
              <motion.div whileHover={{ scale: 1.05 }} className="story-card bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-700">{story.content}</p>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>

      <Link to="/AllStories" className="block text-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          View All Stories
        </button>
      </Link>

    </div>
  );
};

// export default TouristStories;

