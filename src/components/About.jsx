import { FaInfoCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          We are dedicated to providing accurate and timely news. Our platform
          aggregates and presents information from reliable sources to keep you
          informed.
        </p>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700">
          Our mission is to deliver high-quality journalism with transparency
          and integrity. We aggregate news from reputable sources to provide you
          with the most reliable and up-to-date information.
        </p>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Data Sources and Integrity
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <div className="w-full sm:w-64 bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <FaInfoCircle className="text-3xl sm:text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Our Data Sources
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We utilize the NewsAPI to aggregate news from various reputable
              sources. This ensures that the information we provide is
              comprehensive and current.
            </p>
          </div>
          <div className="w-full sm:w-64 bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <FaInfoCircle className="text-3xl sm:text-4xl text-blue-700 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Commitment to Honesty
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              We are committed to honesty and transparency in our reporting. We
              strive to present information without bias and verify the accuracy
              of our news articles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
