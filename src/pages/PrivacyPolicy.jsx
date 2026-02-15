import { ChevronRight } from "lucide-react";

const POLICY_POINTS = [
  "We collect basic contact and professional details when you inquire about our medical or lab supplies.",
  "Your data is used solely to respond to inquiries, process orders, provide technical support, and send relevant industry updates.",
  "We operate in accordance with the Egyptian Data Protection Law (No. 151 of 2020).",
  "We use industry-standard encryption and security protocols to prevent unauthorized access or data leaks.",
  "You have the right to access, correct, or request the deletion of your personal data at any time.",
];

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-6 flex items-center text-sm text-gray-600 font-medium">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#E81729] whitespace-nowrap">Privacy Policy</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
          <ul className="space-y-5 text-gray-700 leading-relaxed">
            {POLICY_POINTS.map((point) => (
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

export default PrivacyPolicy;