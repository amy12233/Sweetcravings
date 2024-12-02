import Link from 'next/link'

export default function Ordering() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Place Your Order</h1>
      <p className="text-lg mb-4">
        Ready to satisfy your sweet cravings? Fill out our order form to get started!
      </p>
      <Link
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
      >
        Go to Order Form
      </Link>
      <p className="mt-4 text-sm text-gray-600">
        Please allow 48 hours for order processing and confirmation.
      </p>
    </div>
  )
}

