const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'Chance and his team are extremely professional and there work is top notch! I highly recommend them! They will go above and beyond for you!',
      author: 'Lindsey Nickel',
      role: 'Client',
    },
    {
      quote:
        'Chance Hyser with H3 Excavation & Construction recently worked on the utility trench for our home. He was great to work with and a good communicator. He has lots of experience in the field and was able to provide good advice to solve some of our complex issues. Best of all, he was reliable, showed up when he said he would, and did great work. We were very pleased.',
      author: 'Jill Elaine',
      role: 'Client',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-black/65">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
          Client Testimonials
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-lg transition-transform hover:scale-105 dark:bg-gray-800/50 dark:text-white"
            >
              <div className="mb-4">
                <svg
                  className="size-8 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="mb-6 italic text-gray-600 dark:text-gray-400">
                {testimonial.quote}
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </h4>
                <span className="text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
