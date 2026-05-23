import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: "Who is eligible to vote?",
    a: "All currently enrolled students with an active school ID and student account are eligible to vote. Students with incomplete enrollment or those under academic suspension are not eligible."
  },
  {
    q: "Can I change my vote after submitting?",
    a: "No. Once your vote is submitted it is final and cannot be changed. Please review all your selections carefully before confirming your ballot."
  },
  {
    q: "How are the results announced?",
    a: "Results are published on this platform immediately after the voting period ends and votes are tallied. Winners are also officially announced during the school's election proclamation ceremony."
  },
  {
    q: "Is my vote anonymous?",
    a: "Yes. Your vote is completely confidential. The system only records that you have voted, not which candidates you selected, ensuring a free and fair election."
  },
  {
    q: "What if I encounter a problem while voting?",
    a: "If you experience any technical issues during voting, immediately contact the Election Committee through the Help Desk page or visit the Student Affairs Office before the voting period ends."
  }
];

type FAQItemProps = {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}

function FAQItem({ q, a, open, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white border-2 border-black border-b-4 border-r-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center py-3 pl-5 pr-4 text-left font-medium transition-colors duration-150"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{q}</span>
        <Plus
          className="shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pt-3 pb-4 text-sm text-gray-600 border-t border-dashed border-gray-200 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number | null) => {
    setOpenIndex(prev => prev === i ? null : i);
  };

  return (
    <section className="bg-white px-6 py-10 w-full">
      <div>
        <h1 className="fnt-bungee text-xl bg-black text-yellow-400 w-fit py-1 px-2 -rotate-2">
          Read FAQ'S
        </h1>
        <p className="mt-2">Read about frequently asked questions by users.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
        {faqs.map((f, i) => (
          <FAQItem
            key={i}
            q={f.q}
            a={f.a}
            open={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </div>
    </section>
  );
}