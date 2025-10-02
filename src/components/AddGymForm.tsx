import Button from "./Button";

interface AddGymFormProps {
  onCancel: () => void;
  ownerId: string;
}

const AddGymForm = ({ onCancel, ownerId }: AddGymFormProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-2">Add Gym Information</h2>
        <p className="text-gray-600 mb-6">
          Fill in the details below to add your gym to our platform
        </p>

        <form className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-blue-500">ℹ️</span> Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="gymName"
                placeholder="Enter gym name"
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="+1 (555) 000-0000"
                className="w-full border rounded-lg px-4 py-2"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <textarea
              name="description"
              placeholder="Describe your gym, facilities, and what makes it special..."
              rows={3}
              className="w-full border rounded-lg px-4 py-2 mt-4"
            />

            <textarea
              name="address"
              placeholder="Enter complete address including street, city, state, and zip code"
              rows={2}
              className="w-full border rounded-lg px-4 py-2 mt-4"
            />
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-blue-500">📷</span> Gym Photos (Minimum 4
              required)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <label
                  key={index}
                  className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-gray-50"
                >
                  <img
                    alt={`Photo ${index + 1}`}
                    className="h-32 w-full object-cover rounded-md"
                  />
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    className="hidden"
                  />
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              className="bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Gym
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGymForm;
