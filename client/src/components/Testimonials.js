import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      feedback: "Absolutely love the quality of the cards! Free delivery and just Rs. 10 per pack is a steal!",
      location: "Mumbai, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYShqSdEcaOpZGvVlBfmjJsXA-5aySKDmMhw&s"
    },
    {
      name: "Rajveer Singh",
      feedback: "Great experience shopping here. The cards are durable and delivery was super fast!",
      location: "Delhi, India",
      image: "https://media.istockphoto.com/id/157510047/photo/plain-young-indian-american-man.jpg?s=170667a&w=0&k=20&c=MYrJ5JrOHsZBWmDFi-2V4A6vVuOU839kQomeAXOmlrU="
    },
    {
      name: "Amit Verma",
      feedback: "The best playing cards I have bought online. Excellent service and unbeatable price!",
      location: "Bangalore, India",
      image: "https://static.vecteezy.com/system/resources/previews/048/889/010/non_2x/close-up-portrait-of-a-young-man-with-dark-hair-and-green-eyes-photo.jpg"
    },
  ];

  return (
    <div className="w-full h-full bg-black p-6 rounded-xl shadow-xl">
      <h2 className="text-3xl text-yellow-400 font-bold mb-6 text-center">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full border-4 border-yellow-400 mb-4"
            />
            <p className="text-white text-lg italic mb-4 p-4 rounded-lg shadow-md">
              "{testimonial.feedback}"
            </p>
            <div className="text-yellow-200 font-semibold text-xl mb-1">
              {testimonial.name}
            </div>
            <span className="text-yellow-300 text-sm">{testimonial.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;