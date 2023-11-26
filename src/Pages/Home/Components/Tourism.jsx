import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the styles
import useGuides from '../../Guides/Hook/useGuides';
import usePackages from '../../../Packages/Hook/usePackages';

const Tourism = () => {
  const { allGuides } = useGuides();
  const { allPackages } = usePackages();
  const overviewContent = (
    <div>
      <h2>Overview</h2>
      {/* Add videos or other content for the overview */}
    </div>
  );

  const packagesContent = (
      <center>
          <div>
            <h2>Our Packages</h2>
              <div>
                <div className="flex mx-auto justify-center items-center flex-wrap gap-4">
                {
                  allPackages?.slice(0, 3).map(p=>(
                    <div key={p._id} className="bg-white p-4 rounded-md shadow-md">
                    <img src={p?.image} alt="Package 1" className="mb-2 h-[150px] rounded-md" />
                    <h3 className="text-lg font-semibold">{p?.tourTitle}</h3>
                    <p className="text-gray-500 mb-2">{p?.tourType}</p>
                    <p className="text-gray-700 mb-2">Price: {p?.price} TK</p>
                    <Link to={`/PackageDetails/${p?._id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Package</button></Link>
                  </div>
                  ))
                }
                </div>
                <Link to='/AllPackages'><button className="bg-blue-500 mt-4 text-white px-4 py-2 rounded-md">View All Packages</button></Link>
              </div>
            {/* <div className="flex mx-auto justify-center items-center flex-wrap gap-4">
           
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://via.placeholder.com/150" alt="Package 1" className="mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Package Title 1</h3>
                <p className="text-gray-500 mb-2">Tour Type 1</p>
                <p className="text-gray-700 mb-2">Price: $100</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Package</button>
              </div>

              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://via.placeholder.com/150" alt="Package 1" className="mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Package Title 1</h3>
                <p className="text-gray-500 mb-2">Tour Type 1</p>
                <p className="text-gray-700 mb-2">Price: $100</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Package</button>
              </div>

              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://via.placeholder.com/150" alt="Package 1" className="mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Package Title 1</h3>
                <p className="text-gray-500 mb-2">Tour Type 1</p>
                <p className="text-gray-700 mb-2">Price: $100</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Package</button>
              </div>

            </div>
            <Link to='/AllPackages'><button className="bg-blue-500 text-white px-4 py-2 rounded-md">View All Packages</button></Link> */}
          </div>
      </center>
  );

  const tourGuidesContent = (
      <center>
        <div>
            <h2>Meet Our Tour Guides</h2>
            {/* Replace the placeholder data with your actual data */}
              <div >
                <div className="flex items-center justify-center flex-wrap gap-4">
                  {
                  allGuides?.slice(0, 3).map(g=>(
                    <div key={g?._id} className="bg-white p-4 rounded-md shadow-md">
                    <img src={g?.profile_image} alt="Tour Guide 1" className="mb-2 h-[200px] rounded-full" />
                    <h3 className="text-lg font-semibold">{g?.name}</h3>
                    <p className="text-gray-500 mb-2">Experience: {g?.experience}</p>
                    <Link to={`/GuideDetails/${g._id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</button></Link>
                  </div>
                  ))
                }
                </div>
                <center className='mt-3'>
                    <Link to='/Guides'><button className="bg-blue-500 text-white px-4 py-2 rounded-md">All Guides</button></Link>
                </center>
              </div>
              
            {/* <div className="flex items-center justify-center flex-wrap gap-4">
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://i.ibb.co/5nV25Bf/Nevaan-Ahmed.png" alt="Tour Guide 1" className="mb-2 h-[200px] rounded-full" />
                <h3 className="text-lg font-semibold">Nevaan Ahmed</h3>
                <p className="text-gray-500 mb-2">Experience: 5 years</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</button>
              </div>

              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://i.ibb.co/kgd3kHv/Preyota-Jannam.png" alt="Tour Guide 2" className="mb-2 h-[200px] rounded-full" />
                <h3 className="text-lg font-semibold">Preyota Jannam</h3>
                <p className="text-gray-500 mb-2">Experience: 5 years</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</button>
              </div>

              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="https://i.ibb.co/zr0wwMd/Umong-Jai.png" alt="Tour Guide 3" className="mb-2 h-[200px] rounded-full" />
                <h3 className="text-lg font-semibold">Umong-Jai</h3>
                <p className="text-gray-500 mb-2">Experience: 5 years</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</button>
              </div>

            </div> */}
          </div>
      </center>
  );

  return (
    <center className='my-3'>
      <div>
          <h1 className="text-4xl font-bold mb-6">Tourism and Travel Guides</h1>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Our Tour Guides</Tab>
          </TabList>

          <TabPanel>{overviewContent}</TabPanel>
          <TabPanel>{packagesContent}</TabPanel>
          <TabPanel>{tourGuidesContent}</TabPanel>
        </Tabs>
      </div>
    </center>

  );
};

export default Tourism;
