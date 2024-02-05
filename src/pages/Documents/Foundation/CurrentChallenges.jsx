import React from 'react';
import DocsHeaderFooter from '../../../components/ui/DocsContents/DocsHeaderFooter';

export default function CurrentChallenges() {
  const doubleCard = [
    {
      leftTitle: "Foundation",
      operation: "Previous",
      path: "/docs/foundation",
    },
    {
      rightTitle: "Whats problem does Bitcoinnano solve",
      operation: "Next",
      path: "/docs/whats-problem-does-bitcoinnano-solve",
    },
  ];
  const content = (
    <div className="p-8 text-gray-800">
      <p className=" ">
      Bitcoin native blockchain, renowned for being the pioneer of decentralized digital currencies, is characterized by its robustness, security, and a decentralized network of nodes. However, Bitcoin's primary function as a store of value has limited its application in more dynamic and complex use cases.  
      </p>
  
     <div className='py-4'>
      <h1 className='font-bold text-xl' id='scalability'>I. SCALABILITY</h1>
     <p className="pt-4">
     Bitcoin's base layer currently faces scalability limitations, which results in slower transaction times during periods of high demand.
      </p>
     </div>
     <div className='py-4 ' id='interoperability'>
      <h1 className='font-bold text-xl'>II. INTEROPERABILITY</h1>
     <p className="pt-4">
     While Bitcoin is a pioneer in the cryptocurrency space, its interoperability with other blockchains, especially those utilizing different protocols, is limited.
      </p>
     </div>
     <div className='py-4 ' id='community_governance'>
      <h1 className='font-bold text-xl'>III. COMMUNITY GOVERNANCE   </h1>
     <p className="pt-4">
     The governance structure of Bitcoin primarily involves miners and developers, and it may not be as inclusive as some community members desire.
      </p>
     </div>
     
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`‼️`}
      title={`Current Challenges`}
      content={content}
      doubleCard={doubleCard}></DocsHeaderFooter>
  );
}
