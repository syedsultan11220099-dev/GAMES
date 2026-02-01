"use client";

export default function TermsContent() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to our platform. By using our services, you agree to the
        following terms and conditions...
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>You must be at least 18 years old to use this service.</li>
        <li>Rewards cannot be exchanged outside the platform.</li>
        <li>Any misuse of the system will result in account suspension.</li>
      </ul>
    </div>
  );
}
