export const Introduction = {
  title: "Introduction",
  body: `CorePass thanks you for taking the time to review our Privacy Policy. The CorePass ID Application ("Application" or "App") is a distinct, decentralized tool, offering users a digital conversion method, enabling them to retain verified digital identification entirely under their management.`,
  body2: `We define CorePass both as the App and its company owner (“CorePass” or “we” or the “Company”).`,
  body3: `This document concerns data subjects (“Data Subject” or “you”) whose personal information is accessed by us when you act as a user of our App.`,
  body4: `This Privacy Policy is based on the Swiss Federal Act on Data Protection (Data Protection Act, “FADP”) of 25 September 2020 (Status as of 1 September 2023) as amended `,
  body4Link: `https://www.fedlex.admin.ch/eli/cc/2022/491/en`,
  body5: `
  CorePass is authorized to treat and process personal data pursuant to those laws and regulations and by the Swiss Federal Data Protection and Information Commissioner `,
  body5Link: `https://www.edoeb.admin.ch/edoeb/en/home/deredoeb/kontakt.html`,
  body6: `Furthermore, this Privacy Policy is also based on the General Data Protection Regulation (“GDPR”) as amended, `,
  body6Link: `https://eur-lex.europa.eu/eli/reg/2016/679/oj`,
  body7: `In this document, we shall refer to the above mentioned FADP and GDPR.`,
};

export const Definitions = {
  title: "Definitions",
  list: [
    {
      title: "Personal Data and Data Subject",
      body: `Under the FADP personal data is defined as “all information relating to an identified or identifiable individual”. Under the GDPR personal data is defined as “any information relating to an identified or identifiable natural person (“Data Subject”), by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person”.
      `,
    },
    {
      title: "Sensitive Personal Data",
      body: `Personal Data worthy of special protection:`,
      List: [
        `data concerning religious, philosophical, political, or labor unions,`,
        `data concerning health, the intimate sphere, race or ethnicity,`,
        `genetic data,`,
        `biometric data that uniquely identify a natural person,`,
        `data concerning administrative and criminal prosecutions and sanctions, `,
        `data concerning social assistance measures.`,
      ],
    },
    {
      title: "Data Controller",
      body: `Under the FADP, a data controller is the private person or federal body that decides on the purpose and content of a data file. Under the GDPR, a data controller is the individual or legal person who controls and is responsible for keeping and using personal data in paper or electronic files.`,
    },
    {
      title: "Digital Asset",
      body: `Refers to any cryptocurrency or digital commodity, such as Core, Bitcoin, or Ether, built on a cryptographic computer network protocol.`,
    },
    {
      title: "Data Storage",
      body: `The methods employed to save, archive, retrieve, and protect digital information.`,
    },
    {
      title: "Data Encryption",
      body: `A security method wherein data is encoded using a specific algorithm, rendering it unreadable without the appropriate decryption key. Encryption is used to protect sensitive data from unauthorized access, ensuring that even if the data is intercepted or accessed without permission, it remains unintelligible without the corresponding decryption process.`,
    },
    {
      title: "P2P Network",
      body: `P2P Network (Peer-to-Peer Network) - A decentralized network architecture where individual nodes, referred to as "peers," directly connect with each other without the need for centralized intermediaries or servers. In a P2P network, each peer acts both as a client and a server, sharing and consuming resources directly with other peers.`,
    },
    {
      title: "Fingerprinting",
      body: `A process wherein a unique representation (typically a hash value) of data is created and stored on the blockchain to verify its integrity and authenticity. This "fingerprint" is generated using cryptographic hashing algorithms, and because of the immutable nature of the blockchain, once the fingerprint is recorded, it serves as a permanent and tamper-proof reference. Comparing a newly generated fingerprint of the data with the one stored on the blockchain allows for validation of the data's integrity and ensures it hasn't been altered.`,
    },
    {
      title: "CoreID",
      body: `A unique alphanumeric string of characters that represents an account on a blockchain network. It functions similarly to an ID number, allowing for the sending and receiving data on a P2P network and the holding of digital assets or tokens. While a CoreID address can act as an identifier for transactions, it does not inherently disclose the real-world identity of the person behind it.`,
    },
    {
      title: "Requester",
      body: `An individual, organization, or system that requests data or information from the other party identified by CoreID on the P2P network.`,
    },
    {
      title: "Requestee",
      body: `The individual, organization, or system from which data is being requested or sought using CoreID. The data requestee is the party that holds, controls, and manages the data that the data requester is seeking. The requestee has the authority to approve, deny, or modify the data request based on predefined criteria, regulations, or policies.`,
    },
    {
      title: "Data Processor",
      body: `An individual, organization, or system that processes personal data on behalf of a Data Controller, based on the Controller's instructions.`,
    },
    {
      title: "Data Processing",
      body: `The collection, manipulation, and analysis of data to achieve a specific purpose or output. It involves a series of operations that are performed on data, especially by a computer, to retrieve, transform, or classify information.`,
    },
    {
      title: "AML/CFT",
      body: `Anti-Money Laundering / Combating the Financing of Terrorism legal rules and standards as envisaged in FATF recommendations, EU regulations, and national legislation.`,
    },
    {
      title: "Politically Exposed Persons (PEPs)",
      body: `Individuals who are or have been entrusted with prominent public functions (e.g., heads of state or government, senior politicians, senior government, judicial or military officials, senior executives of state-owned corporations, important political party officials), as well as their relatives and close associates.`,
    },
    {
      title: "Blockchain",
      body: `A decentralized and distributed digital ledger technology that records data across multiple computers in a way that ensures the data is secure, transparent, and immutable. Once information is added to the blockchain, it is nearly impossible to alter without altering all subsequent blocks and the consensus of the network.`,
    },
    {
      title: "Private Key",
      body: `A confidential and cryptographic alphanumeric string that allows a user to access, decrypt, and manage the digital assets or data associated with its corresponding public key in an asymmetric encryption system.`,
    },
    {
      title: "Mnemonic Phrase",
      body: `A confidential sequence of words, usually generated from a specified wordlist, used as a more human-readable representation of a cryptographic seed or key.`,
    },
    {
      title: "PIN code",
      body: `PIN code is a security measure designed to protect sensitive information, accounts, or devices from unauthorized access.`,
    },
  ],
};

export const LawfulProcessing = {
  title: "Collection of Data",
  body: `The lawful legal basis for the processing of your personal data is contemplated in Articles 30.3 and 31 of the FADP and Articles 7 and 9 of GDPR. `,
  body2:
    "At least one of these must apply whenever personal data is to be processed:",
  list: [
    {
      title: "Consent: ",
      body: `you have given CorePass or its appointed Data Processors your free, specific, informed, or unambiguous consent for your personal data to be processed for a specific purpose.`,
    },
    {
      title: "Contract performance: ",
      body: `the processing is necessary for the performance of a contract you have with CorePass Company or since you want to use the App services.`,
    },
    {
      title: "Compliance with legal obligation: ",
      body: `the processing is necessary for CorePass Company to comply with the law in the jurisdictions where it operates (not including contractual obligations).`,
    },
    {
      title: "Public interest: ",
      body: `the processing is necessary to perform a task that is in the public interest or for its official functions, and the task or function has a clear basis in law.`,
    },
    {
      title: "Legitimate interests: ",
      body: `the processing is necessary for the CorePass Company's legitimate interests, or the legitimate interests of a third party, including CorePass users, unless there is a good reason to protect the individual’s personal data that overrides those legitimate interests.`,
    },
  ],
};

export const DataRights = {
  title: "Data Rights",
  body: "Your Data Subject rights are listed below:",
  list: [
    "right to be informed, as set out in Articles 19 and 28 of the FADP and in Articles 13 and 14 of the GDPR;",
    "right of access, as set out in Article 25 of the FADP and Article 15 of the GDPR;",
    "right to rectification, as set out in Article 32 of the FADP and Article 16 of the GDPR;",
    "right to erasure or right to be forgotten, as set out in Article 32 of the FADP and Article 17 of the GDPR.",
  ],
  body2:
    "Restrictions on Data Subject's rights are provided for by Articles 26, 29, 30.3, 31, and 32 of the FADP and Article 23 of the GDPR.",
};

export const Collection = {
  title: "Collection of Data",
  body: `Information that you made public or that you provide us or our Data Processors by completing forms in writing, email, or through our App. This includes information provided at the time of registering with us or when you connect with us via our e-mail.`,
  body2: "We access the following classes of information:",
  list: [
    "Name(s), surname(s), address(es), email, phone number(s), and other relevant (e.g. age group, subscriptions, CorePass, work, etc.) personal details,",
    "financial information, proof of identity, proof of residence, proof of funds and source of funds, where they may be relevant in relation to contracts with CorePass or for AML/CFT checks pursuant to anti-money laundering and anti-terrorism regulations if we have to verify them.",
  ],
  body3: "If you contact us, we may keep a record of that correspondence.",
  body4:
    "There are several ways in which we collect your personal data directly from you:",
  list2: [
    "that you provide to us or to our Data Processors;",
    "that you have made public; and",
    "that we automatically collect because of sharing with other parties such as AML/CFT databases if we need to do so.",
  ],
  body5:
    "Please note that CorePass securely stores encrypted data exclusively on your device and will not transfer or stream it elsewhere without your clear consent. External parties may try to access your data via data requests. You can choose to accept, decline, or ignore each request.",
  body6:
    "Should you decline or ignore, no data will be shared. Each request also comes with an adjustable expiration time. CorePass, prioritizing your privacy, allows you to block specific requesters, ensuring their future requests are automatically dismissed.",
};

export const PersonalData = {
  title: "How we use your personal data",
  body: `We will process any of your personal data, in accordance with our obligations under the FADP and GDPR, for the following reasons:`,
  list: [
    "to provide you with the services you have requested;",
    "to comply with the FADP and GDPR or other regulations, for instance, AML/CFT;",
    "for administrative purposes;",
    "to assess inquiries, and",
    "to provide you with information about us and our services. If, at any time, you do not wish to receive further information about us and our services, contact us.",
  ],
};

export const DataDisclosure = {
  title: "Data disclosure or communication",
  body: `We will only disclose your personal data if we are obliged to do so to comply with our contractual, legal, or regulatory obligations, for business or administrative reasons, or because you have asked us to do so. This probably also includes disclosure:`,
  list: [
    "within CorePass and its Company;",
    "to third parties who process personal data on our behalf (IT system providers and other service providers);",
    "to any government, regulatory agency, enforcement or exchange body, or court that so requires under applicable law or regulation.",
  ],
};

export const DataProcessors = {
  title: "Data Processors",
  body: "To maintain the accuracy and timeliness of the application's information, CorePass extracts and verifies data. Certain tasks employ data processors. Below is a list of processors used:",
  table: {
    header: ["Name", "Function"],
    rows: [
      {
        name: "SumSub",
        function: "Identity Verification Service",
      },
      {
        name: "Twilio",
        function: "SMS and Calls Communications Platform",
      },
      {
        name: "Sendgrid",
        function: "Email Delivery Service",
      },
    ],
  },
};

export const DataTransfer = {
  title: "Data transfer",
  body: "We do not transfer your data unless you explicitly ask us to do so. In such a case, please read the privacy policy terms of the recipient. We assume no responsibility for the transfer of the data and the recipient's treatment of the data.",
};

export const DataProtection = {
  title: "Data Protection on your device",
  body: "CorePass employs cryptography, leveraging Core Blockchain technology, ED448 cryptography, and an additional PIN for enhanced security. Treat all sensitive information cautiously, ensuring you do not inadvertently disclose it. Remember, your Private key, Mnemonic phrase, and PIN are uniquely yours. Consider periodic encrypted backups, either on external storage or the cloud, to prevent potential data loss.",
};

export const DataRestoration = {
  title: "Data Restoration",
  body: "For account recovery, utilize your backup, mnemonic phrase, and PIN. We cannot access your data.",
};

export const DataSharing = {
  title: "Data Sharing via P2P Network",
  body: "We may disclose your personal information to third parties if we are under a duty to disclose or share your personal data to comply with any legal obligation, to enforce or apply any agreements and contracts, or to protect the rights, property, or safety of the organization, or other individuals. ",
  body2:
    "Via P2P Network: Requesters can seek your fingerprinted data through the CoreID of the requestee. Depending on data availability, a timeframe for the request may be sought. Each request's duration is strictly timed. The requestee will be notified of the data categories sought, with options to accept, decline, or ignore—and additionally, an option to block the requester.",
};

export const ProtectData = {
  title: "Protecting your personal data",
  body: "We do not store your data. We use data processors as indicated above that CorePass has instructed and with which data processing agreements have been implemented and that ensure and guarantee compliance with applicable privacy regulations and an adequate level of data protection. Please, review their data protection policies. ",
};

export const InformationSecurity = {
  title: "Security of your information",
  body: "To help protect the privacy of data and personally identifiable information you transmit through the use of our App, we maintain physical, technical, and administrative safeguards. We update and test our security technology on an ongoing basis.",
};

export const ManagingData = {
  title: "Managing Your Personal Data",
  body: `We employ various methods, including Data Processors, to verify the information. For any discrepancies or concerns, reach out to our support team at: support@corepass.net`,
};

export const PrivacyQueries = {
  title: "Privacy queries and complaints",
  body: `For questions regarding this Privacy Policy or data usage, email our Support Center: support@corepass.net
  We will answer you within a maximum of one month, although we reserve the right to extend this period for more complex requests. We also reserve the right to charge a reasonable administration fee for any manifestly unfounded or excessive requests for access to personal data and for any additional copies of personal data requested.
  Pursuant to the FADP, you may also contact the
  https://www.edoeb.admin.ch/edoeb/it/home/deredoeb/kontakt/anzeigeformular_betroffene.html
  Swiss Federal Data Protection and Information Commissioner, Feldeggweg 1 CH - 3003 Berne.
  `,
};

export const PrivacyPolicyUpdates = {
  title: "Privacy Policy Updates",
  body: "This Privacy Policy may evolve. We reserve the right to vary this Privacy Policy periodically. Updates will be posted here and such variations become effective on posting on our App. Engaging with our Services indicates your acceptance of these terms. If you disagree with any part of this Privacy Policy, please, refrain from using our Services.",
};
