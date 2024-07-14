import { X } from "lucide-react";
import React from "react";
import { InlineWidget } from "react-calendly";

interface CalendlyModalProps {
  onClick: () => void;
}

export default function CalendlyModal({ onClick }: CalendlyModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative">
        <button
          onClick={onClick}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4">Custom Order Request</h2>
        <p className="text-gray-700 mb-4">
          Your order requires a custom quote. Click the button below to schedule
          a call with our team.
        </p>
        <InlineWidget url="https://calendly.com/info-thelectureroom" />
      </div>
    </div>
  );
}
