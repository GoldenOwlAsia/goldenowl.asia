/* eslint-disable  max-len */

import React from 'react';
import pImages from './portfolioImages';

export default {
  Collabs: {
    url: 'collabs',
    cover: pImages.collabsCover,
    customer: {
      country: 'Sweden',
      program: 'Our top engineers specializing in React Native & Ruby on Rails',
      timeline: 'Jan 2019 - Present',
      industry: 'Enterprise Solution, KOL Advertising',
      website: 'https://collabs.app/',
    },
    overview:
      'Collabs is the platform that allows organizations to discover millions of influencers, create campaigns, communicate, schedule, approve content, execute, pay commissions to several influencers with one click & analyze the results. In short - it tremendously cuts down on overhead, removes the middlemen & executes campaigns more efficiently than ever!',
    techs:
      'We use Ruby on Rails and React Native. Ruby on Rails is known for its stability and predictability. Ruby on Rails can minimize the website development time by 25-50% as compared to other popular web frameworks. Compared to hybrid technologies – which was the only option for cross-platform in the past – React Native is super fast and very well tuned to mobile devices. Making the mobile experience much better for customers ',
    img: [
      { src: pImages.collabs0, col: 12 },
      { src: pImages.collabs1, col: 12 },
      { src: pImages.collabs2, col: 12 },
      { src: pImages.collabs3, col: 12 },
      'features',
      { src: pImages.collabs4, col: 4 },
      { src: pImages.collabs5, col: 4 },
      { src: pImages.collabs6, col: 4 },
    ],
    // brief: {
    //   title: <h3 className="portfolio-details__item-title">Our effort</h3>,
    //   description:
    //     'With all the effort, Golden Owl’s team spent days and nights making the project successful. Our client and users do experience and they are all pleased with it.',
    // },
    challenges: [
      'Measuring results for report: Unlike other digital marketing channels like display advertising and paid search that do a reasonably good job of measuring the performance of campaigns, influencer marketing is facing strong headwinds around proving a return on investment (ROI) for brands and advertisers.',
      'Campaign management: for big brands to work with many different influencers, there needs to be a campaign management feature that has the ability in executing various campaigns',
      'A complex algorithm is needed to calculate a score for each of thousands of influencers’ profiles',
      'Storing a big volume of data that is always ready to be searched and listed',
    ],
    features: [
      'Feature to find influencers: discover, get suggestions & search for similar.',
      'Campaign Management: create, manage and run up to 200 campaigns at a time',
      'Report tool: allow users to get a good overview of campaign results. Benchmark with other campaigns.',
      'An inbox: to chat directly with influencers in users’ campaigns',
      'Automatic payments for completed campaigns directly to the influencers by card or invoice.',
      'Scoring influencers: detects fake traffic, inactive followers and quality of engagement. Influencers gets a score of 1-10.',
    ],
    result: [
      'Collabs have had 60+million influencers covering a wide range of industries, from food, fashion, fitness to family, beauty & events. They already have 150+ happy customers & 2 offices in Sweden & HCMC. And 129 billions, 839 something millions combined reach was announced recently on their Linkedin page.',
      'They are serving big brand names, even Starbucks. They have succeeded in simplifying the complicated and changing the world of influencer marketing.',
    ],
  },
  'Connect A Job': {
    cover: pImages.connectajobCover,
    url: 'connect-a-job',
    overview:
      'ConnectaJob represents intelligent job management workflows which is one of the emerging trends in this modern world. The platform has been diligently developed and carefully crafted to ensure the right balance of rigour and simplicity. CAJ commits to delivering innovation and excellence in facilities services.',
    techs: ['Angular JS (FE)', 'Ruby on Rails (BE)'],
    img: [
      { src: pImages.connectajob1, col: 4 },
      { src: pImages.connectajob2, col: 4 },
      { src: pImages.connectajob3, col: 4 },
      { src: pImages.connectajob4, col: 4 },
      { src: pImages.connectajob5, col: 4 },
      { src: pImages.connectajob6, col: 4 },
      { src: pImages.connectajob7, col: 4 },
      { src: pImages.connectajob8, col: 4 },
      { src: pImages.connectajob9, col: 4 },
      { src: pImages.connectajob10, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          Most modern
          {' '}
          <br />
          {' '}
          workflow
        </h3>
      ),
      description:
        'Connect a Job is proud to be one of the latest trends in job management for recruiters. The developer team has built the platform by all effort and passion, and hope to bring the client the best product.',
    },
  },
  'Find a Wealth Manager': {
    cover: pImages.findAWealthManagerCover,
    url: 'find-a-wealth-manager',
    overview:
      'A platform uses smart technology combined with human expertise to get users direct access to the best professionals from the leading ﬁrms who commit to best practice and better value fees. Golden Owl has helped maintain this site with bug ﬁxing using Ruby on Rails technology.',
    techs: ['Responsive UI', 'Ruby on Rails'],
    img: [
      { src: pImages.findAWealthManager1, col: 12 },
      { src: pImages.findAWealthManager2, col: 12 },
      { src: pImages.findAWealthManager3, col: 12 },
      { src: pImages.findAWealthManager4, col: 4 },
      { src: pImages.findAWealthManager5, col: 4 },
      { src: pImages.findAWealthManager6, col: 4 },
      { src: pImages.findAWealthManager7, col: 4 },
      { src: pImages.findAWealthManager8, col: 4 },
      { src: pImages.findAWealthManager9, col: 4 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          Good investment
          <br />
          portal
        </h3>
      ),
      description:
        'Finding an investment channel is no longer a problem thanks to Find a Wealth Manager. Users will be able to make more money and receive lots of advice from most professional consultants.',
    },
  },
  'Get Assured': {
    cover: pImages.getAssuredCover,
    customer: {
      country: 'Singapore',
      program: 'Our top engineers specializing in Ruby on Rails',
      timeline: 'Feb 2017 - Nov 2017',
      industry: 'Insurance',
      website: 'http://business.get-assured.co/',
    },
    url: 'get-assured',
    overview:
      'GetAssured, built, and maintained using Ruby on Rails, provides your employees better care with a whole suite of awesome benefits through our platform at no additional cost so you can focus on building and growing your business. Get assured help each employee to run needs analysis and export a personal report on the most suitable insurance packages. And then set them up with an advisor to start applying for the chosen benefits.',
    techs:
      'For this project, we used Ruby on Rails, React Native, Smart Contract on Blockchain platform, Firebase & Appium. Ruby on Rails can help us with both building and securing a website. RoR is known for its stability and predictability. Compared to hybrid technologies – which was the only option for cross-platform in the past – React Native is super fast and very well tuned to mobile devices. Making the mobile experience much better for customers. Smart contracts refer to computer codes that digitally facilitate the verification, control, or execution of parts of all of the agreements or contracts. They are a faster, cheaper, and more secure way of executing and managing agreements. Firebase provides a host of features and modules that an app developer needs, as a service thereby eliminating the need to create these from scratch. Appium is one of the most popular tools for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms. Importantly, Appium is “cross-platform”.',
    img: [
      { src: pImages.getAssured1, col: 12 },
      { src: pImages.getAssured2, col: 12 },
      'features',
      { src: pImages.getAssured3, col: 12 },
    ],
    features: [
      'Needs analysis tool: For employees to input their personal data and get insurance needs calculation through financial algorithms for their own current and future situations',
      'Automation in generating reports, a decorated full detailed report on need analysis will be available to export at the next step',
      'Policies comparison tool: allow employees to compare different benefits packages at the same time.',
      'Email registration & confirmation',
      'Smart contract to eliminate third parties',
    ],
    result: [
      'Get Assured is Singapore’s first life insurance-based employee benefits portal. Golden Owl has helped elevate Get Assured’s 20 years of experience in business and excellent customer service with top-notched technology as the backbone of their solution. Now, Get Assured have had Start-up, SMEs & MNCs clients all over the planet and are forming amazing partnerships with companies that are collectively committed to transforming the employee benefits space.',
    ],
    challenges: [
      'Traditionally in the Finance sector, data and analytics are managed at the product level rather than at the customer level, making it difficult to create a comprehensive view of the customer.',
      'Fractured data and legacy systems prevent insurance companies from extracting value and making the data actionable.',
      'Complicated financial algorithms to calculate the suitable benefits packages',
      'The problem of automatically generating a detailed report for each employee',
      'The need for a powerful digital tool to add different policies to compare cost & benefits',
    ],
    // brief: {
    //   title: (
    //     <h3 className='portfolio-details__item-title'>
    //       Support to <br /> take care employees
    //     </h3>
    //   ),
    //   description:
    //     'Don’t need to spend a large time taking care of employees, Get Assured do it all for your enterprise. Believe it or not, this site is a perfect assistant for every kind of business.',
    // },
  },
  GIG: {
    cover: pImages.gigCover,
    url: 'gig',
    customer: {
      country: 'United Kingdom',
      program: 'Our top engineers specializing in PHP',
      timeline: 'Oct 2017 - present',
      industry: 'Human Resource - HR',
      website: 'www.gigtogig.co.uk/',
    },
    overview:
      'GIG connects part-time job seekers and job providers through job postings and job applications, specializing in Hospitality, Events, Warehousing & Logistics. For the recruiter’s side, GIG supports their accountant to manage timesheet invoices. We have helped build this project for years and we are continuing working with GIG for future maintenance and updates.',
    techs:
      'We used PHP, AWS, Responsive UI, Cordova for this project. We utilize PHP since it results in faster site loading speeds. And this will mean a lot to both parties in the shift work marketplace. AWS has unlimited server capacity. It also has a wide range of functions, including database, software, mobile, analytics, and networking. Responsive UI allows the audience to access the web app from a variety of different devices in all shapes and sizes. And Finally, Cordova, because its UI completely matches all mobile platforms such as iPhone or Android',
    img: [
      { src: pImages.gig1, col: 12 },
      { src: pImages.gig2, col: 12 },
      { src: pImages.gig3, col: 6 },
      { src: pImages.gig4, col: 6 },
      { src: pImages.gig5, col: 12 },
      { src: pImages.gig6, col: 12 },
      'features',
      { src: pImages.gig7, col: 4 },
      { src: pImages.gig8, col: 4 },
      { src: pImages.gig9, col: 4 },
    ],
    // brief: {
    //   title: (
    //     <h3 className="portfolio-details__item-title">Perfect assistant</h3>
    //   ),
    //   description:
    //     'GIG provides job seeks as well as recruiters a great portal where they can meet the demand of each other. Having all useful features, this website has brough lots of benefits for both roles.',
    // },
    challenges: [
      'It is not just a search feature for job titles but also an AI adopted search tool to think humanly and match the best gig results with each personal search.',
      'High volume and wide variety of HR data',
      'Data security is always a concern of HR activities. As companies and job seekers enter their financial & hiring informations, we need to keep the information safe from potential cyber-theft',
      'Based on the demand from the client, we have some complex business requirements for the webapp.',
    ],
    result: [
      'Gig is so happy with the outcome that they continue to work with us through their maintaining and updating process until now',
      'Gig is the largest on demand flexible shift working platform in the UK – providing a fair and transparent platform.',
      'Gig is now staffing some of the biggest hotel chains in Glasgow and Edinburgh, as well as events such as The Stirling Marathon, Scottish Premier league football games, The Six Nations rugby finals and music events such as Rolling Stones, TRNSMT, Spice Girls, Pink and more!',
      'More business collaboration opportunities: Recently GIG joined forces with WiHTL, an influential collaborative community of leaders across the Hospitality, Travel and Leisure sector to help people redeploy their redundant staff so that they have the best possible opportunities to continue to work where they are needed.',
    ],
    features: [
      'Candidate profile page: Showcasing not only their work experience and qualifications, but also reviews from employers, favourite providers, as well as the number of shifts they’ve completed.',
      'GIG Bank - for employees to manage paycheck, what they earned, owed and archived',
      'Notifications including a streamlined direct messaging system between candidates and gig providers',
      'The hub - not only a place for searching and filtering shifts but also for checking in on upcoming and even live shifts as well, so the seekers can categorise their confirmed, upcoming, applied for shifts in one place.',
      'Improved AI algorithms, making it easier to search and apply for the specially wanted gigs',
      'Seeker Signal - so that the availability of seekers will be known within 24 hours',
      'Timesheet invoice management for providers',
    ],
  },
  Mosendo: {
    cover: pImages.mosendoCover,
    url: 'mosendo',
    customer: {
      country: 'United States',
      program: 'Our top engineers specializing in Javascript & React Native',
      timeline: 'Jul 2019 - Nov 2019',
      industry: 'Cryptocurrency, Online Wallet',
      website: 'https://mosendo.com/',
    },
    overview:
      'Mosendo crMosendo is a cryptocurrency wallet Mobile app in which people can easily and safely deposit/send/withdraw their money between their Cryptocurrency accounts. Borderless access to money and wealth, with decentralized personal finance tools. We have helped to build this app that complies with all requirements for a cryptocurrency wallet that is safe to use while there’s still plenty of fraudulent cases in the digital market.',
    techs:
      'We used React Native, Smart Contracts on Blockchain platform, Firebase, Appium, Connext. React Native is super fast and very well tuned to mobile devices. Making the mobile experience much better for customers; Smart contracts refer to computer codes that digitally facilitate the verification, control, or execution of parts of all of the agreements or contracts. They are a faster, cheaper, and more secure way of executing and managing agreements. Firebase provides a host of features and modules that an app developer needs, as a service thereby eliminating the need to create these from scratch. Appium is one of the most popular tools for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms. Connext powers programmable micropayments for the decentralized web. Connext sits on top of the Ethereum blockchain and existing web protocols like HTTP.',
    img: [
      { src: pImages.mosendo1, col: 12 },
      { src: pImages.mosendo2, col: 4 },
      { src: pImages.mosendo3, col: 4 },
      { src: pImages.mosendo4, col: 4 },
      { src: pImages.mosendo5, col: 4 },
      { src: pImages.mosendo6, col: 4 },
      { src: pImages.mosendo7, col: 4 },
      { src: pImages.mosendo8, col: 4 },
      { src: pImages.mosendo9, col: 4 },
      { src: pImages.mosendo10, col: 4 },
      'features',
      { src: pImages.mosendo11, col: 12 },
    ],
    // brief: {
    //   title: <h3 className="portfolio-details__item-title">High security</h3>,
    //   description:
    //     'The priority thing that we focus on when starting the project is the security. We promise to protect our clients’ information by the most up-to-date technology in the app.',
    // },
    challenges: [
      'The biggest problem currently in the crypto market is the lack of security. Indeed, with news of hackings and breaches often making headlines, users are demanding more protection over their assets and data.',
      'Coin Desk reports that each day, $2.7 million is stolen from exchanges, with the amount of cryptocurrency taken in 2018 increased 13 times compared to the previous year. This amounts to $2.7 million in crypto assets being stolen every day, or $1,860 each minute.',
      'While cryptocurrency transactions are known for being fast, delays can happen and can be a way to protect users from hackings or fraudulent cryptocurrency payments. This can affect UI experience',
    ],
    features: [
      'Features that allow owners to sign up, deposit, send, withdraw or make cryptocurrency payments with their BTC, ETH coins',
      'Money to be held in the stable cryptocurrency wallet, without any value volatility.',
      'Non-custodial, private key managed in-app with a social recovery option.',
      'No confusing public keys, users to be able to connect via $motag, social graph, and QR codes.',
      'Setup takes under 15 seconds & no ID required',
      'Seamless UI design across all devices.',
    ],
    result: [
      'Mosendo has come up with a way to lower the drawbridge and cover that last mile by making DAI as easy to use as cash.  That enables everyone to get DAI and change back into local fiat, Mosendo makes it easy to send between peers anywhere in the world for free, and intuitive to secure funds.',
      'In fact, Mosendo is seen as the final piece of the cryptocurrency payments puzzle, the other pieces being critical blockchain and financial technology to come onto the field in the last 18 months',
    ],
  },
  'My Work': {
    cover: pImages.myWorkCover,
    url: 'my-work',
    overview:
      'Optimised for both employees and employers, mywork – an application under MyWork Global – provides an easy-to-use, transparent and interactive platform for all the shift-based sourcing needs. Way more than a job listing service, mywork allows its employee users to apply for jobs they found interested, proceed their billings, receive ratings and comments for their performance. It also supports businesses to nudge, communicate and add appropriate job seekers as favourites via special features integrated within the app.',
    techs: ['PHP', 'React Native', 'React JS'],
    img: [
      { src: pImages.myWork1, col: 12 },
      { src: pImages.myWork2, col: 4 },
      { src: pImages.myWork3, col: 4 },
      { src: pImages.myWork4, col: 4 },
      { src: pImages.myWork5, col: 12 },
    ],
    brief: {
      title: <h3 className="portfolio-details__item-title">Great journey</h3>,
      description:
        'Working with MyWork has been a great journey since we treasure this long-term relationship, especially in this emerging age where technology is expanding at such an accelerating pace.',
    },
  },
  Briidge: {
    cover: pImages.briidgeCover,
    url: 'briidge',
    overview:
      'BRIIDGE is a selective network of experienced trainers and coaches covering a wide range of specialties in Leadership, Management, Communication, Sales, Public Speaking, Team Building and more… With BID4SKILL, you can find a trainer suitable with all demands of your company quickly. This project help you saving time and money to look for a good trainer.',
    techs: ['Angular JS (FE)', 'Ruby on Rails (BE)'],
    img: [
      { src: pImages.briidge1, col: 4 },
      { src: pImages.briidge2, col: 4 },
      { src: pImages.briidge3, col: 4 },
      { src: pImages.briidge4, col: 4 },
      { src: pImages.briidge5, col: 4 },
      { src: pImages.briidge6, col: 4 },
      { src: pImages.briidge7, col: 4 },
      { src: pImages.briidge8, col: 4 },
      { src: pImages.briidge9, col: 4 },
      { src: pImages.briidge10, col: 12 },
    ],
    brief: {
      title: <h3 className="portfolio-details__item-title">Our achievement</h3>,
      description:
        'Building networking is not an easy task, all members in GOLDEN OWL thought and deliberated with each other about how to build this app usefully. We spend much time and high efforts in building BRIIDGE. And now, we gain success!! We have created the whole IOS, Android app, and admin webpage as well as the whole project which lasts for years. Our clients are satisfied with our product and continue cooperating with us.',
    },
  },
  Personifi: {
    cover: pImages.personifiCover,
    url: 'personifi',
    customer: {
      country: 'Australia',
      program: 'Our top engineers specializing in Ruby on Rails',
      timeline: 'Nov 2018 - May 2019',
      industry: 'Finance, Fintech',
      website: 'http://www.personifi.com.au/',
    },
    overview:
      'Personifi is Backed by Telstra, Personifi is Australia’s online personal loan broker that helps users find their personal loans. It offers a loan ranging from $2,000 to $50,000 for debt consolidation, home improvement, and a range of other personal expenses. The specialty of Personifi is that it can help users to borrow money easily without having to meet standard requirements.an Australia’s online personal loan broker which helps users find their personal loans. It offers a loan ranging from $2,000 to $50,000 for debt consolidation, home improvement and a range of other personal expenses. The special of Personifi is this can help users borrow money easier and don’t meet the requirements.',
    techs:
      'We use Ruby on Rails & PostgreSQL. RoR can help us with both building and securing a website. Ruby on Rails is known for its stability and predictability. It can minimize the website development time by 25-50% as compared to other popular web frameworks. PostgreSQL is the most advanced open-source database. With PostgreSQL, data can be stored with diverse indexing techniques, extension functions, and different kinds of techniques for geographic data storage such as PostGIS, Key-Value Store, and DBLink.',
    img: [
      { src: pImages.personifi1, col: 12 },
      { src: pImages.personifi2, col: 12 },
      { src: pImages.personifi3, col: 12 },
      { src: pImages.personifi4, col: 6 },
      { src: pImages.personifi5, col: 6 },
      { src: pImages.personifi6, col: 6 },
      { src: pImages.personifi7, col: 6 },
      { src: pImages.personifi8, col: 6 },
      { src: pImages.personifi9, col: 6 },
      { src: pImages.personifi10, col: 12 },
      'features',
      { src: pImages.personifi11, col: 12 },
    ],
    // brief: {
    //   title: (
    //     <h3 className="portfolio-details__item-title">
    //       We focus
    //       <br />
    //       on the program
    //     </h3>
    //   ),
    //   description:
    //     "We consider the meaning of this app after listening to the client's idea. An app related to money needs the exact in every small thing, so we care a lot about using programs for this app. We choose suitable programs for this app and calculate the solution to make it effective. With a high mission, we build this app successfully and the client is pleased with our product.",
    // },
    challenges: [
      'Some loan calculation formulas were difficult to handle. We had to ensure that formulas will be able to run at high speed and with complete accuracy.',
      'Virtual security: we need to establish a high-level layer of protection for this fintech web to protect users’ identity and also because of money-related issues.',
      'Retaining human touch: we had to make sure the user experience is not overloaded with complicated algorithms & machinery tools. We have to make the journey to solve the problem smooth, simple, and not overwhelming.',
      'Assure smooth web UI across all pages while fetching chunky data & functioning through complex calculation.',
    ],
    features: [
      'A loan application process for users to input their financial status & needs. Afterward, the system automatically finds and matches info with respective suggested loans that can be applied completely online.',
      'A full-functioned page with flawless web UI: a contact form, credit guide, homepage, about us page & regulations confirmation page',
      'Database storage and front-end system that is safe & secure from cybersecurity threats',
      'Integration loan calculation formulas of high-level complexity',
    ],
    result: [
      "Personifi is now Australia's leading digital broker for personal loans",
      "Personifi has been recognized by Telstra as one of Australia's fastest-growing fintech companies. They are Australia's only purely online marketplace specializing in personal loans, and now supporting thousands of Australians each year.",
    ],
  },
  'Referral Candy': {
    customer: {
      country: 'Singapore',
      program: 'Our top engineers specializing in Ruby on Rails',
      timeline: '2015',
      industry: 'Affiliate Marketing',
      website: 'https://www.referralcandy.com/',
    },
    cover: pImages.referralCandyCover,
    url: 'referral-candy',
    overview:
      "ReferralCandy is a system or the refer-a-friend plugin for Shopify stores that grows your e-commerce sales through word-of-mouth marketing. It is also regarded as a customer reward system with functions to share the user's stores with their friends, then getting paid for people they had referred to/ introduced to, and increased their advocates by using a promotion program.",
    techs:
      'We use Ruby on Rails, which can help us with both building and securing a website. It is relatively helpful for e-commerce websites that will be integrated with ReferralCandy. Because if ReferralCandy is down, customers will not make a purchase knowing that they can’t earn referrals. And in this case, they consider the e-commerce site itself is down, every second this happens, the e-com site is losing customers. Therefore, the Ruby on Rails technology is the one to utilize in order to minimize the risk of losing money on an e-commerce project.',
    challenges: [
      'Affiliate Marketing is a new category at that time, we needed to do more research in terms of technology to optimize the functions of the system and meet the requirement of the market.',
      'According to the demand of our client, this is a complex business model with various functions.',
      'The system needs to be customized to each customer of ReferralCandy.',
      'The system needs to handle a large number of users’ accounts.',
      'Security is always a concern of online business. Because of the characteristics of this industry, users need to register online and the number of online members can get huge to a point where it would be hard to control. Therefore, we need to find a way to minimize the risk of privacy threats.',
    ],
    img: [
      { src: pImages.referralCandy1, col: 12 },
      { src: pImages.referralCandy2, col: 12 },
      { src: pImages.referralCandy3, col: 12 },
      'features',
      { src: pImages.referralCandy4, col: 12 },
    ],
    // brief: {
    //   title: (
    //     <h3 className="portfolio-details__item-title">Marketing success</h3>
    //   ),
    //   description:
    //     'Marketing is a very important step in running a business. The more people know your business, the more money you earn. Therefore, Referral Candy is build to increase the productivity of marketing programs.',
    // },
    features: [
      'Seamless integration with each Shopify store',
      'Connection to marketing apps',
      'Complete automation for referral program',
      'Data-driven insights reports',
      'The best brand experience for customers (boost sales, mobile-first experience, easy to use customization, full flexibility for developers (HTML & CSS editing)',
      'Promotion for referral programs across several marketing channels (email, landing page, newsletters,etc.)',
      'Access to best-in-class support',
      'We use technology and build customized Reward options that help users choose from cash rewards, store discounts or custom gifts.',
      'We create user-friendly designs which help them to connect easily to eCommerce and other marketing platforms.',
      'We also build a system which allows users to view the analytics and insights like the industry benchmarks and top referrers.',
    ],
    result: [
      'ReferralCandy has been used widely for over 30,000 online stores and counting.',
      'Nathan Kleiner - CEO of Critical Pass - one of ReferralCandy successful customers showed his happiness with the system and reported that he had been using ReferralCandy for years and it helped his business capitalize on word of mouth referrals. More specifically, Critical Pass’ referral program has generated 24 times ROI, and accounts for 10.42% of revenues and 10.05% of orders.',
      'Top ReferralCandy’s retailers made 26% more sales from referrals last month.',
    ],
  },
  'The Work Project': {
    cover: pImages.twpCover,
    url: 'the-work-project',
    overview:
      'The Work Project is a coworking space and office booking platform. Their serviced ofﬁces and coworking spaces are created by hoteliers committed to delivering hospitality values and standards. Golden Owl has helped them build and maintain Front page using Reactjs and Administration page using Ruby on Rails for user/admin to manage all their bookings.',
    techs: [
      'React JS',
      'Ruby on Rails',
      'Hosting',
      'Database',
      'Responsive UI',
      'Elastic Search',
    ],
    img: [
      { src: pImages.twp1, col: 12 },
      { src: pImages.twp2, col: 12 },
      { src: pImages.twp3, col: 12 },
      { src: pImages.twp4, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">A helpful platform</h3>
      ),
      description:
        'Some magazines like Forbes, Wallpaper, etc. have complimented THE WORK PROJECT as a popular program for helping and supporting to change and design workplace.',
    },
  },
  Bid4Skill: {
    cover: pImages.bid4SkillCover,
    url: 'bid-4-skill',
    customer: {
      country: 'Singapore',
      program: 'Our top engineers specializing in Ruby on Rails and Reactjs',
      timeline: 'Apr 2017 to Apr 2019',
      industry: 'Marketplace',
      website: 'https://www.crunchbase.com/organization/bid4skill',
    },
    overview:
      'Bid4skill is a selective network of the best independent experts in the training and coaching industry across North America, Europe, and APAC. A B2B marketing platform for professional learners and training providers to bid and apply for a suitable range of price that matches their requirements and needs. This site is similar to Upwork and could be popular in the future. We have helped build project from scratch using Ruby on Rails and Reactjs.',
    techs:
      'We use Ruby on Rails and React JS. RoR can help us with both building and securing a website. It is relatively helpful for marketplace websites because any system issues will damage the brand and cause them to lose the trust that is already hard to build. Building a high-load application, it is essential to use technologies such as Reactjs which guarantees better user experience and higher app performance with virtual DOM.',
    img: [
      { src: pImages.bid4Skill1, col: 12 },
      { src: pImages.bid4Skill2, col: 12 },
      'features',
      { src: pImages.bid4Skill3, col: 12 },
    ],
    // brief: {
    //   title: (
    //     <h3 className="portfolio-details__item-title">
    //       We have launched the
    //       {' '}
    //       <br />
    //       {' '}
    //       project with all passion
    //     </h3>
    //   ),
    //   description:
    //     'Golden Owl launched the product, built a transparent workflow and makes updates frequently until it has a big scale. We operated with a high level of efficiency, transparency, responsiveness, attended to client needs and delivered truly sets them apart.',
    // },
    challenges: [
      'The platform and services are equipped for businesses and HR professionals to use instantly',
      'The system needs to handle a large number of users’ accounts and inventories while maintaining a great user experience',
      'Security is always a concern of online business. Because of the characteristics of this industry, users need to register online and the number of online members can get huge to a point where it would be hard to control. Therefore, we need to find a way to minimize the risk of privacy threats.',
      'Based on the customer requirement. This is a complex business request',
    ],
    features: [
      'Easy interaction and extension of offers to interested companies.',
      'A search tool with high customization to save time searching, reach out to only providers that matter, in one go.',
      'Feature for learners to post a request, bid prices, and the system automatically suggests the 3 most suitable offers for the deal.',
      'Registration tools for millions of learners, trainers, and coaches online.',
      'An inventory to store a massive amount of information.',
      'The best user experience for customers.',
      'Payments to be made to the trainers instantly',
    ],
    result: [
      'Bid4Skill are disrupting the search process in a 90-Billion-dollar training industry by revamping the search process for new trainers and coaches that Learning & Development (L&D) professionals',
      'What would typically take 3 weeks for search, Bid4Skill has now brought that process down to just 3 days – making it a platform like no others.',
    ],
  },
  BrdgePay: {
    cover: pImages.brdgePayCover,
    url: 'brdge-pay',
    overview:
      'BrdgePay is one of the most modern platforms which is for internal purpose only. This platform helps enterprises/ companies to manage their internal financial flow. All of the movements and status of money flow will be tracked and noted carefully and day by day. This platform had been a very useful financial assistant for any big enterprises.',
    techs: ['Ruby on Rails'],
    img: [
      { src: pImages.brdgePay1, col: 12 },
      { src: pImages.brdgePay2, col: 12 },
      { src: pImages.brdgePay3, col: 12 },
      { src: pImages.brdgePay4, col: 12 },
      { src: pImages.brdgePay5, col: 12 },
      { src: pImages.brdgePay6, col: 12 },
      { src: pImages.brdgePay7, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          We build the platform
          <br />
          with concentration
        </h3>
      ),
      description:
        'Understanding the difficulty of managing finance, Golden Owl has chosen all best developers and technology to bring clients the best platform. We spend passion and concentration while developing this project.',
    },
  },
  Corpzap: {
    cover: pImages.corpzapCover,
    url: 'corpzap',
    overview:
      'Corpzap is a consulting platform for enterprises. It helps any businesses to solve any issues related to laws. Whatever your business needs, Corpzap can also provide the best service to solve those. As long as it is related to the legal field, this platform can help you with that.',
    techs: ['Ruby on Rails'],
    img: [
      { src: pImages.corpzap1, col: 12 },
      { src: pImages.corpzap2, col: 12 },
      { src: pImages.corpzap3, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">A legal assistant</h3>
      ),
      description:
        'Everything related to the legal field needs a very careful and professional assistant. If you need any advice or legal paperwork, Corpzap is the one you need.',
    },
  },
  'Eye Protec': {
    cover: pImages.eyeProtecCover,
    url: 'eye-protec',
    overview:
      'Eye protec is an app about Terrorist, Danger notice which helps users to protect themselves and their lovers. Golden Owl has helped build admin page, IOS and Android version for this client with social media function: chatting, messaging, post status, etc and upgrading according to their plan.',
    techs: [
      'Swift',
      'Android',
      'Swift',
      'PHP',
      'Web Socket',
      'Wordpress',
      'Real time chat',
      'Social Network',
    ],
    img: [
      { src: pImages.eyeProtec1, col: 4 },
      { src: pImages.eyeProtec2, col: 4 },
      { src: pImages.eyeProtec3, col: 4 },
      { src: pImages.eyeProtec4, col: 4 },
      { src: pImages.eyeProtec5, col: 4 },
      { src: pImages.eyeProtec6, col: 4 },
      { src: pImages.eyeProtec7, col: 4 },
      { src: pImages.eyeProtec8, col: 4 },
      { src: pImages.eyeProtec9, col: 4 },
      { src: pImages.eyeProtec10, col: 4 },
      { src: pImages.eyeProtec11, col: 4 },
      { src: pImages.eyeProtec12, col: 4 },
      { src: pImages.eyeProtec13, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          Protect you and
          {' '}
          <br />
          {' '}
          your lovers as well
        </h3>
      ),
      description:
        'Thanks to Eye Protect, users now can choose the safest way to go and help their friends, relatives and so on to avoid any dangerous route and find a safe way to go home.',
    },
  },
  Glife: {
    cover: pImages.glifeCover,
    url: 'glife',
    overview:
      'Glife is a distributor for products like fresh vegetables, fruits and vegetarian food, an eCommerce web application for B2B in terms of business, not tech, it will be Glife selling products to multiple Business entities.',
    techs: ['React JS', 'Ruby on Rails'],
    img: [
      { src: pImages.glife1, col: 4 },
      { src: pImages.glife2, col: 4 },
      { src: pImages.glife3, col: 4 },
      { src: pImages.glife4, col: 4 },
      { src: pImages.glife5, col: 4 },
      { src: pImages.glife6, col: 4 },
      { src: pImages.glife7, col: 4 },
      { src: pImages.glife8, col: 4 },
      { src: pImages.glife9, col: 4 },
      { src: pImages.glife10, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          Live green with
          <br />
          Glife
        </h3>
      ),
      description:
        'If you want to stay green and have most organic food, Glife is the platform you need. To Glife, green is the key, means we focus on greenest and freshest everything, from fruits to vegetables and so on.',
    },
  },
  Homehub: {
    cover: pImages.homehubCover,
    url: 'homehub',
    overview:
      'With HOMEHUB, you can relax in your bed and all of work will be done. HOMEHUB helps you set up in the new place and connect with service providers around your new house: (electricity; water; internet; etc) to ensure you grab everything cheapest.',
    techs: ['Ruby on Rails', 'PostgreSQL'],
    img: [
      { src: pImages.homehub1, col: 12 },
      { src: pImages.homehub2, col: 12 },
      { src: pImages.homehub3, col: 12 },
      { src: pImages.homehub4, col: 4 },
      { src: pImages.homehub5, col: 4 },
      { src: pImages.homehub6, col: 4 },
      { src: pImages.homehub7, col: 12 },
      { src: pImages.homehub8, col: 6 },
      { src: pImages.homehub9, col: 6 },
      { src: pImages.homehub10, col: 6 },
      { src: pImages.homehub11, col: 6 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">As a helpful platform</h3>
      ),
      description:
        'We have built a CMS platform for service providers to manage their customers whenever there is urgent demand from users. HOMEHUB will be an effective with everybody so that it could help them move home easier and comfortably.',
    },
  },
  Luxify: {
    cover: pImages.luxifyCover,
    url: 'luxify',
    overview:
      'Luxify is a luxurious place. If you’re tired of finding any high-end products on conventional commercial websites, let’s visit Luxify - a special platform which is only for high-end and luxurious products.',
    techs: ['NodeJS', 'AngularJS', 'MongoDB', 'AWS'],
    img: [
      { src: pImages.luxify1, col: 12 },
      { src: pImages.luxify2, col: 12 },
      { src: pImages.luxify3, col: 12 },
      { src: pImages.luxify4, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          A platform for
          <br />
          high-end products
        </h3>
      ),
      description:
        "Understanding the uniqueness of the client's idea about Luxify, we - the development team from Golden Owl tried our best and applied technology selectively to the platform. Hence, now we have one of the greatest platforms for the high-end class.",
    },
  },
  Narratrs: {
    cover: pImages.narratrsCover,
    url: 'narratrs',
    overview:
      'Narratrs provides users the way to tell stories, promote their favorite brand and get paid with your influence. We have helped build from scratch to the launched date and maintain it until now. We have jelpe built both website and mobile app using cross platform technology',
    techs: ['Ruby on Rails', 'PostgreSQL', 'React Native'],
    img: [
      { src: pImages.narratrs1, col: 12 },
      { src: pImages.narratrs2, col: 12 },
      { src: pImages.narratrs3, col: 4 },
      { src: pImages.narratrs4, col: 4 },
      { src: pImages.narratrs5, col: 4 },
      { src: pImages.narratrs6, col: 4 },
      { src: pImages.narratrs7, col: 4 },
      { src: pImages.narratrs8, col: 4 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">A way to be famous</h3>
      ),
      description:
        'Users’ stories would be more interesting and well-known due to Narratrs. Users now can become more famous and are able to earn money from this platform.',
    },
  },
  'Public Insight': {
    cover: pImages.publicInsightCover,
    url: 'public-insight',
    overview:
      'Public Insight is a Swedish newspaper, focusing on public internal finance. It highlights specific news and comments, with or without connection to an in-depth analysis. From the front page there should be easy access to the news flow, tags viewing list (for those who pays much attention to this issue), statistics (for those who have this service) and to calendar (a list of upcoming events).',
    techs: ['Bootstrap', 'PHP Laravel', 'Sanity Studio', 'AWS', 'Auth0'],
    img: [
      { src: pImages.publicInsight1, col: 12 },
      { src: pImages.publicInsight2, col: 12 },
      { src: pImages.publicInsight3, col: 12 },
      { src: pImages.publicInsight4, col: 12 },
      { src: pImages.publicInsight5, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">
          We always try
          <br />
          our best
        </h3>
      ),
      description:
        'Knowing the importance of official information, Golden Owl has tried our best to bring the best product to clients. We are proud to be the one who joined and built this platform.',
    },
  },
  'Open The App': {
    cover: pImages.openCover,
    url: 'open-the-app',
    overview:
      'Open The App is a place to find colleagues and learn through video chat and voice calls between computers and mobile devices via the Internet. It also provides instant messaging services and video conference calls. Users can deal and pay for each other via the app.',
    techs: ['JavaScript', 'NodeJS'],
    img: [
      { src: pImages.open1, col: 4 },
      { src: pImages.open2, col: 4 },
      { src: pImages.open3, col: 4 },
      { src: pImages.open4, col: 4 },
      { src: pImages.open5, col: 4 },
      { src: pImages.open6, col: 4 },
      { src: pImages.open7, col: 4 },
      { src: pImages.open8, col: 4 },
      { src: pImages.open9, col: 4 },
      { src: pImages.open10, col: 4 },
      { src: pImages.open11, col: 4 },
      { src: pImages.open12, col: 4 },
      { src: pImages.open13, col: 4 },
      { src: pImages.open14, col: 4 },
      { src: pImages.open15, col: 4 },
      { src: pImages.open16, col: 12 },
    ],
    brief: {
      title: (
        <h3 className="portfolio-details__item-title">Open a new world</h3>
      ),
      description:
        'Thanks to Open the app, users can talk to each other not only just one but also a group. More ideas and more opinions would be shared widely.',
    },
  },
  'The Luxe Nomad': {
    cover: pImages.theLuxeNomadCover,
    url: 'the-luxe-nomad',
    customer: {
      country: 'Singapore',
      program: 'Our top engineers specializing in Ruby on Rails and PostgreSQL',
      timeline: '2012',
      industry: 'Hospitality',
      website: 'https://theluxenomad.com/',
    },
    overview:
      "The Luxe Nomad is an Asia-Pacific's leading luxury villa and hotel booking portal that offers exclusive deals, travel tips and insider guides for members. In order to meet the demands; using Ruby on Rails and PostgreSQL; we have built a website focusing on the 24/7 segment, boasting a curated list of luxury villas, hotels and resorts to complete any traveller’s dream to escape daily life at anytime and at the best available rates.",
    techs: [
      'Responsive UI',
      'Siteminder',
      'Online Payment',
      'Ruby on Rails',
      'PostgreSQL',
    ],
    img: [
      { src: pImages.theLuxeNomad1, col: 12 },
      { src: pImages.theLuxeNomad2, col: 12 },
      { src: pImages.theLuxeNomad3, col: 12 },
      'features',
      { src: pImages.theLuxeNomad4, col: 4 },
      { src: pImages.theLuxeNomad5, col: 4 },
      { src: pImages.theLuxeNomad6, col: 4 },
    ],
    // brief: {
    //   title: <h3 className="portfolio-details__item-title">Handful site</h3>,
    //   description:
    //     'The Luxe Nomad is bringing lots of opportunities for travellers to find the most suitable and comfortable accommodation for their vacation. No matter where they go, they will always have the greatest time.',
    // },
    challenges: [
      'Storing numerous detailed datas in types of images, texts and icons about each of hundreds of destinations all over Asia Pacific.',
      'A complex search engine that allows sorting for staying duration, area, number of bedrooms, accommodation type & rates.',
      'Web UI: Seamless navigation throughout the site despite the huge load of datas & contents.',
    ],
    result: [
      'The Luxe Nomad is now Asia-Pacific’s leading luxury villa booking portal and management company, getting featured in Elle, Bloomberg, Vogue, CNN, Bazaar, Esquire and South China Morning Post. The company has raised about 1.5 million Singapore dollars ($1 million) in three rounds of funding to date, and counts.',
      'They now have a network of 1,500 properties in 33 destinations around the world - 800 villas and 700 hotels - and four years in business. As of 2019, the Luxe Nomad has a team of nearly 100 and has expanded to include villa management in its repertoire.',
    ],
    features: [
      'Social media log-in into a live chat box - Ensuring potential customers can always communicate their queries with customer service.',
      'An enquiring form that is linked to the back-end system.',
      'Impeccable web UI - a smooth, luxury and consistent branding experience.',
      'A cloud storage for hundreds of hotels & villas inventory in detail.',
      'A search engine that can filter out destinations that match the requirements of viewers on rates, staying duration, city/area, number of people and bedrooms.',
    ],
  },
};
