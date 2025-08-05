import FormInput from './FormInput'

const LeaveAReply = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">Leave a reply</h2>

      <form className="space-y-6">
        {/* Name, Email, Subject */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput placeholder="Name" />
          <FormInput type="email" placeholder="E-mail" />
          <FormInput placeholder="Subject" />
        </div>

        {/* Comment Textarea */}
        <textarea
          rows="5"
          placeholder="Comment"
          className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="save" className="w-4 h-4" />
          <label htmlFor="save" className="text-sm text-gray-700">
            Save my name,email and website in this browser for the next time
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Comment
        </button>
      </form>
    </div>
  )
}

export default LeaveAReply


const FormInput = ({ type = "text", placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}