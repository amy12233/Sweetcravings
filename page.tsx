import Image from 'next/image'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Welcome to Sweet Cravings By Victoria</h1>
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="Delicious Cupcake"
        width={300}
        height={300}
        className="mx-auto rounded-full shadow-lg mb-6"
      />
      <p className="text-lg mb-4">
        Indulge in our delectable treats, baked with love and passion.
      </p>
      <p className="text-lg mb-4">
        From cupcakes to custom cakes, we have something for every sweet tooth!
      </p>
    </div>
  )
}

