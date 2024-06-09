import Image from "next/image";

export default function Home() {
  const candidates = [
    { name: "Doge", image: "/doge.png", votes: 0 }, // Replace with actual image paths
    { name: "Lassi", image: "/lassi.jpg", votes: 0 },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Candidate List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 rounded-t-lg overflow-hidden">
              <Image
                src={candidate.image}
                alt={candidate.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-black  font-bold mb-2">{candidate.name}</h2>
              <p className="text-gray-700">Votes: {candidate.votes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}