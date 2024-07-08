import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How do I stake?",
      answer:
        "First, select the blockchain network and staking provider that suits your needs. Then, delegate your tokens through their platform to start earning rewards.",
    },
    {
      question: "What are the risks of staking?",
      answer:
        "Staking carries risks including potential loss of assets due to slashing events, network vulnerabilities, or issues with the staking provider. It's essential to choose a reliable provider and understand the specific risks involved with each blockchain.",
    },
    {
      question: "What is Proof-of-Stake?",
      answer:
        "Proof-of-Stake (PoS) is a consensus mechanism for blockchains. It involves validators who lock up their cryptocurrency tokens as a stake to propose and validate new blocks. Validators earn rewards for their participation, incentivizing network security and integrity.",
    },
    {
      question: "What is slashing?",
      answer:
        "Slashing is a penalty mechanism in Proof-of-Stake blockchains, where a portion of a validator's stake is forfeited due to malicious behavior or failure to validate correctly. It aims to maintain network security and deter dishonest actions.",
    },
    {
      question: "Is staking safe?",
      answer:
        "Staking can be considered safe if proper precautions are taken, such as selecting a reputable staking provider and understanding the specific blockchain’s staking mechanics. However, risks like slashing and network vulnerabilities always exist.",
    },
    {
      question: "What is the minimum amount needed to stake?",
      answer:
        "The minimum amount needed to stake varies depending on the blockchain network and staking provider. It's best to check the specific requirements for the network you are interested in staking on.",
    },
  ];

  return (
    <div className="text-white p-3 lg:p-0">
      <p className="font-extrabold text-white text-3xl mt-20 lg:mb-9">FAQs</p>

      {faqs.map((faq, index) => (
        <div key={index} className="border-b" data-orientation="vertical">
          <h3 className="flex" data-orientation="vertical">
            <button
              type="button"
              aria-expanded={openItem === index}
              onClick={() => toggleItem(index)}
              className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-[#9D00FF]"
            >
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-5 w-5 transition-transform duration-300 ${
                  openItem === index ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </h3>
          {openItem === index && (
            <div
              className="overflow-hidden text-white transition-max-height duration-700 ease-in-out"
              aria-labelledby={`faq-${index}`}
            >
              <div className="pb-4">
                <p className="text-sm text-white">{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
