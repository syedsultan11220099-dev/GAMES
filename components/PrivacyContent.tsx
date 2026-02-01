"use client";

export default function PrivacyContent() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your data...
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>We do not sell your personal data to third parties.</li>
        <li>All sensitive information is encrypted and secured.</li>
        <li>
          You may request data deletion anytime by contacting our support team.
        </li>
      </ul>
    </div>
  );
}
