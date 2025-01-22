import { pros } from "../constants"

const Advantages = () => {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-center mb-8">
        Get Started and You'll Have...
      </h1>
      <div className="flex flex-col gap-8">
        {pros.map((item) => (
          <div key={item} className="flex flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold bg-lilac padding">{item.label}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Advantages
