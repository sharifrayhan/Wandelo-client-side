import { useForm, useFieldArray } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../../Axios/useAxiosSecure';

const CreatePackage = () => {

  const axiosSecure = useAxiosSecure()

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      spotImages: [''],
      tourPlan: [{ day: '', spots: [''] }],
    },
  });

  const { fields: spotImagesFields, append: appendSpotImage, remove: removeSpotImage } = useFieldArray({
    control,
    name: 'spotImages',
  });

  const { fields: tourPlanFields, append: appendTourPlan, remove: removeTourPlan } = useFieldArray({
    control,
    name: 'tourPlan',
  });

  const onSubmit = async (data) => {
    console.log(data)
    
    try {
      await axiosSecure.post('/packages', data);
      toast.success('Package created successfully',);
    } catch (error) {
      console.error('Error creating package:', error.message);
      toast.error('Error creating package. Please try again.',);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      
      {/* <div>
        <img className='h-[150px]' src="https://i.ibb.co/mbCyLtz/PACKAGE-BANNER.jpg" alt="" />
      </div> */}

      <div className="bg-[#0b4442] shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-[#f7f5f2] font-bold mb-6">Create a New Package</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex gap-2 items-center'>  
          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="place"
            >
              Place
            </label>
            <input
              {...register('place')}
              className="appearance-none border bg-[#577a7d] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="place"
              type="text"
              required
            />
          </div>
       

          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              {...register('image')}
              className="appearance-none border bg-[#577a7d]  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              required
            />
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="tourTitle"
            >
              Tour Title
            </label>
            <input
              {...register('tourTitle')}
              className="appearance-none border bg-[#577a7d]  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="tourTitle"
              type="text"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="tourType"
            >
              Tour Type
            </label>
            <input
              {...register('tourType')}
              className="appearance-none bg-[#577a7d]  border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="tourType"
              type="text"
              required
            />
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              {...register('price')}
              className="appearance-none border bg-[#577a7d]  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="details"
            >
              Details
            </label>
            <textarea
              {...register('details')}
              className="appearance-none border bg-[#577a7d] h-[38px] w-[210px]  rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="details"
              rows="4"
              required
            />
          </div>
        </div>

        <div className=''>
          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="spotImages"
            >
              Spot Images
            </label>
            {spotImagesFields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2">
                <input
                  {...register(`spotImages.${index}`)}
                  className="appearance-none bg-[#577a7d] mb-2  border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder={`Image URL ${index + 1}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => removeSpotImage(index)}
                  className='flex text-[#f7f5f2] items-center gap-2 mt-2 '
                >
                  <img className='h-5' src="https://i.ibb.co/FhZprfy/remove-from-cart.png" alt="" />
              
                </button>
              </div>
            ))}
            <div>
              <button
                type="button"
                onClick={() => appendSpotImage('')}
                className='flex text-[#f7f5f2] items-center gap-2 mt-2 '
              >
                <p>Add Photo</p>
                <img className='h-5' src="https://i.ibb.co/R9HpfQv/add-image.png" alt="" />
              </button>

              
            </div>

          </div>


          <div className="mb-4">
            <label
              className="block text-[#f7f5f2] text-sm font-bold mb-2"
              htmlFor="tourPlan"
            >
              Tour Plan
            </label>
            {tourPlanFields.map((day, dayIndex) => (
              <div key={day.id}>
                <div className="mb-2">
                  <label className="text-sm text-[#f7f5f2] font-semibold">Day {dayIndex + 1}</label>
                  <input
                    {...register(`tourPlan.${dayIndex}.day`)}
                    readOnly
                    className="appearance-none bg-[#577a7d] text-[#f7f5f2]  border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={`Day ${dayIndex + 1}`}
                  />
                </div>
                {day.spots.map((spot, spotIndex) => (
                  <div key={spot.id} className="flex items-center space-x-2">
                    <input
                      {...register(`tourPlan.${dayIndex}.spots.${spotIndex}`)}
                      className="appearance-none border bg-[#577a7d]  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Spots"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeTourPlan(dayIndex, spotIndex)}
                      className='flex text-[#f7f5f2] items-center gap-2 mt-2 '
                      >
                        <img className='h-5' src="https://i.ibb.co/FhZprfy/remove-from-cart.png" alt="" />
                    </button>
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendTourPlan({ day: '', spots: [''] })}
              className='flex text-[#f7f5f2] items-center gap-2 mt-2 '
            >
              <p>Add Day Plan</p>
              <img className='h-5' src="https://i.ibb.co/MnR4Xyc/add-event.png" alt="" />
              
            </button>
          </div>
        </div>

          <div className="mb-4">
            <button
              className="bg-[#e1a66f] hover:bg-slate-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Package
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePackage;
