import { useParams } from 'react-router-dom';
import { FacebookShareButton,FacebookIcon, TwitterShareButton,TwitterIcon, LinkedinShareButton,  LinkedinIcon,
} from 'react-share';
import useStories from './Hook/useStories';
import Navbar from '../Navbar';

const StoryDetails = ( ) => {
  const { id } = useParams();
  const {allStories} = useStories()

  console.log(id)

  // const stories = [
  //   {
  //     id: 1,
  //     name: "Niloy Ahmed",
  //     image: 'bandarbans.jpg',
  //     title: 'Exploring the Bandarbans',
  //     content: 'An thrilling journey towards one of the highest places of Bangladesh. It was a pleasant tour with friends. It was a tour of 4 days. We left from Dhaka at 11:00 pm and reached Ruma district of Bandarban on the next day at 10:00 am. Then, we visited Boga Lake, Chingri Jharna, and other places on that day. We stayed near Boga Lake that night. The next day, we left early in the morning to trek Keokradong. It took us 6 hours to trek to Keokradong. We stayed the night there and left Keokradong the next morning. It was a very exciting and thrilling journey.',
  //   },
  //   {
  //     id: 2,
  //     name: "Mandana Ashrafi",
  //     image: 'bandarbans.jpg',
  //     title: 'Jungle Adventure in Sundarbans',
  //     content: 'Embarking on an unforgettable jungle adventure in the Sundarbans, the largest mangrove forest in the world. The journey started with a boat ride through the winding rivers surrounded by lush greenery. We encountered diverse wildlife, including spotted deer, crocodiles, and various species of birds. The thrill peaked when we spotted a Royal Bengal Tiger from a distance. The mesmerizing beauty of the mangrove forest and the unique ecosystem left us in awe. It was an adventure filled with excitement and a deep connection with nature.',
  //   },
  //   {
  //     id: 3,
  //     name: "Sefat Al Fami",
  //     image: 'bandarbans.jpg',
  //     title: 'Relaxing Beach Vacation in Cox\'s Bazar',
  //     content: 'Indulging in the tranquility of the world\'s longest natural sea beach at Cox\'s Bazar. The sound of the waves, the golden sandy shores, and the breathtaking sunset created a perfect backdrop for relaxation. We strolled along the beach, enjoying the fresh sea breeze and the warmth of the sun. The vibrant beach life, with numerous beach activities and local delicacies, added to the charm of the vacation. It was a rejuvenating experience, providing a perfect blend of serenity and adventure on the shores of Cox\'s Bazar.',
  //   },
  // ];

  const story = allStories?.find((s) => s._id.toString() === id);

  const shareUrl = window.location.href;

  return (
<div className='bg-[#0C4848] min-h-screen'>
  <Navbar></Navbar>
<div className="mx-auto p-7 text-[#f7f5f2] max-w-2xl my-8">
  <center>
  <img
                src={story?.profile_image}
                className="mb-4 h-[140px] rounded-full"
              />
  </center>
  <center>
    <h1>STORY: {story?.name}</h1>
  </center>
      <h2 className="text-4xl font-extrabold mb-6 text-center">{story?.title}</h2>
      {story?.image && (
        <img src={story?.image} alt={story?.title} className="mb-4 rounded-lg shadow-md" />
      )}
      <p className="text-gray-300 text-center">{story?.content}</p>
      <div className="mt-4 flex justify-end">
        <div className="flex items-center space-x-4">
          <FacebookShareButton url={shareUrl} quote={story?.title}>
            <span className="text-blue-500 flex items-center gap-2 cursor-pointer"><FacebookIcon size={32} round={true}></FacebookIcon> Share on Facebook</span>
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={story?.title}>
            <span className="text-blue-400 flex items-center gap-2 cursor-pointer"><TwitterIcon size={32} round={true}></TwitterIcon> Share on Twitter</span>
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={story?.title}>
            <span className="text-[#0077B5] flex items-center gap-2 cursor-pointer"><LinkedinIcon size={32} round={true}></LinkedinIcon> Share on LinkedIn</span>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
</div>
  );
};

export default StoryDetails;
