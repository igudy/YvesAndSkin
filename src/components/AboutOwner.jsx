import React from "react";
import owner from "../assets/ceo.png";

const AboutOwner = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={owner}
            alt="Sarah Johnson, Owner of Serene Beauty"
            className="rounded-lg shadow-xl object-cover w-full max-w-md h-auto md:h-[550px]" // Adjust height as needed
          />
        </div>

        <div className="text-gray-700">
          <p className="text-sm uppercase font-semibold text-gray-500 mb-2">
            THE LADY OF THE HOUR (CEO)
          </p>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Sarah Johnson
          </h2>

          <p className="mb-8 leading-relaxed text-lg">
            Meet Sarah, a visionary hairstylist with a passion for beauty and a
            heart full of dreams. As the owner of Serene Beauty, her journey
            unfolds in the enchanting world of tranquil transformations.
          </p>

          {/* Achievements List */}
          <div className="space-y-6">
            {/* Achievement 1 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0 mr-6">
                <div className="p-4 mr-4 text-2xl bg-gray-900 text-gray-100 font-bold">
                  01
                </div>
                {/* Dot line below 01 */}
                <div className="absolute left-[38%] top-full -translate-x-1/2 w-0.5 h-20 bg-gray-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Master Stylist of the Year:
                </h3>
                <p className="text-gray-600">
                  Sarah's exceptional talent and dedication to her craft earned
                  her the prestigious title of "Master Stylist of the Year" at
                  the National Beauty Excellence Awards.
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0 mr-6">
                <div className="p-4 mr-4 text-2xl bg-gray-900 text-gray-100 font-bold">
                  02
                </div>
                {/* Dot line below 02 */}
                <div className="absolute left-[38%] top-full -translate-x-1/2 w-0.5 h-20 bg-gray-300 "></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Community Impact Award:
                </h3>
                <p className="text-gray-600">
                  Recognized for her commitment to giving back, Sarah received
                  the "Community Impact Award" for her charitable work and
                  contributions to local causes through Serene Beauty.
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="flex items-start">
              <div className="relative flex-shrink-0 mr-6">
                <div className="p-4 mr-4 text-2xl bg-gray-900 text-gray-100 font-bold">
                  03
                </div>
                {/* Dot line below 02 */}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  Green Beauty Innovator:
                </h3>
                <p className="text-gray-600">
                  Sarah's commitment to eco-friendly and sustainable beauty
                  practices was acknowledged with the "Green Beauty Innovator"
                  award.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
