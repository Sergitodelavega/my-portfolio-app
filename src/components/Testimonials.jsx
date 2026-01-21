import React from 'react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <img
                  alt={testimonial.name}
                  src={testimonial.image}
                  className="w-16 h-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-700 bg-gray-100"
                />
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4">
                  <h2 className="text-white font-medium title-font tracking-wider text-sm">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-500 text-sm uppercase">{testimonial.company}</p>
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>
        
    </section>
  );
}

