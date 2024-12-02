export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        We'd love to hear from you! Get in touch with any questions or special requests.
      </p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2">
          <strong>Email:</strong> victoria@sweetcravings.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p className="mb-2">
          <strong>Address:</strong> 123 Bakery Lane, Sweet Town, ST 12345
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Business hours: Monday - Saturday, 9am - 6pm
        </p>
      </div>
    </div>
  )
}

