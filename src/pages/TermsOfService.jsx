import { ChevronRight } from "lucide-react";

const TERMS_POINTS = [
  'We Value Your Privacy El Hoda Trade uses cookies to enhance your browsing experience, analyze site traffic, and provide technical support for our medical & lab solutions. By clicking "Accept All," you consent to our use of cookies in accordance with the Egyptian Data Protection Law.',
];

const TermsOfService = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center text-sm text-gray-600 font-medium">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#E81729] whitespace-nowrap">
            Terms of Service
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Term & Conditions
        </h1>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
          <ul className="space-y-5 text-gray-700 leading-relaxed">
            {TERMS_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E81729] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
