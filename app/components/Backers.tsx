import Image from 'next/image'

const backerLogos = []
// "/logos/backer1.png",
// "/logos/backer2.png",
// "/logos/backer3.png",
// ]

export default function Backers() {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Backed By</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {backerLogos.map((logo, idx) => (
                    <Image key={idx} src={logo} alt={`Backer ${idx + 1}`} className="h-16" />
                ))}
            </div>
        </section>
    )
}
