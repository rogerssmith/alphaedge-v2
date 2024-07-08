import FAQ from "./Faq";
export default function Others() {
  return (
    <div className="bg-black w-full py-10 lg:px-44 px-0">
      <div className="lg:px-24 px-0 mx-auto">
        <p className="capitalize font-bold text-center text-white text-3xl mb-9">
          What We Do
        </p>
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8 lg:gap-y-0 w-fit mx-auto">
          <div className="border-2 border-[#9D00FF] w-64 p-3 text-center rounded-xl card">
            <img
              alt=""
              loading="lazy"
              width="2432"
              height="1442"
              decoding="async"
              className="w-20 h-20 m-auto"
              src="https://www.assetshedge.live/pvi.svg"
              style={{ color: "transparent" }}
            />
            <h1 className="text-white font-bold capitalize">
              Public Validation Infrastructure
            </h1>
            <p className="text-gray-300">
              We offer robust, open-access validation services for
              Proof-of-Stake blockchains, bolstering network integrity and
              efficiency. Our bare-metal infrastructure fosters a dependable
              ecosystem, enhanced by tailored client support.
            </p>
          </div>
          <div className="border-2 border-[#9D00FF] w-64 p-3 text-center rounded-xl card">
            <img
              alt=""
              loading="lazy"
              width="2432"
              height="1442"
              decoding="async"
              className="w-20 h-20 m-auto"
              src="https://www.assetshedge.live/es.svg"
              style={{ color: "transparent" }}
            />
            <h1 className="text-white font-bold capitalize">
              Enterprise Solutions
            </h1>
            <p className="text-gray-300">
              Experience superior staking at reduced costs and gain control over
              marketing, fee structures, and reward distribution. Our service
              ensures your staking activities remain effectively concealed,
              providing an option for anonymity.
            </p>
          </div>
          <div className="border-2 border-[#9D00FF] w-64 p-3 text-center rounded-xl card">
            <img
              alt=""
              loading="lazy"
              width="2432"
              height="1442"
              decoding="async"
              className="w-20 h-20 m-auto"
              src="https://www.assetshedge.live/ecw.svg"
              style={{ color: "transparent" }}
            />
            <h1 className="text-white font-bold capitalize">
              Ecosystem &amp; Community Work
            </h1>
            <p className="text-gray-300">
              Actively engaged in the blockchain community, we foster growth and
              knowledge for Proof-of-Stake blockchains. We invest in and support
              young projects, protocols, and digital public goods. We catalyst
              usage, demand, and ecosystem evolution.
            </p>
          </div>
        </div>
        <div className="center-2 z-10"></div>
        <p className="capitalize font-bold text-white text-3xl my-9 mt-16">
          Why Stake?
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-10 gap-x-24 gap-y-5 lg:gap-y-0 w-fit">
          <div className="flex w-20">
            <img
              alt=""
              loading="lazy"
              width="2342"
              height="1442"
              decoding="async"
              className="w-20 h-20"
              src="https://www.assetshedge.live/gya.svg"
              style={{ color: "transparent" }}
            />
            <p className="text-white capitalize">Grow Your Assets</p>
          </div>
          <div className="flex w-20">
            <img
              alt=""
              loading="lazy"
              width="2342"
              height="1442"
              decoding="async"
              className="w-20 h-20"
              src="https://www.assetshedge.live/epi.svg"
              style={{ color: "transparent" }}
            />
            <p className="text-white capitalize">Earn Passive Income</p>
          </div>
          <div className="flex w-20">
            <img
              alt=""
              loading="lazy"
              width="2342"
              height="1442"
              decoding="async"
              className="w-20 h-20"
              src="https://www.assetshedge.live/ens.svg"
              style={{ color: "transparent" }}
            />
            <p className="text-white capitalize">Enhance Network Security</p>
          </div>
          <div className="flex w-20">
            <img
              alt=""
              loading="lazy"
              width="2342"
              height="1442"
              decoding="async"
              className="w-20 h-20"
              src="https://www.assetshedge.live/sbe.svg"
              style={{ color: "transparent" }}
            />
            <p className="text-white capitalize">
              Support Blockchain Ecosystem
            </p>
          </div>
        </div>
        <div className="my-12 space-y-5 px-3 lg:px-0">
          <h1 className="text-white font-bold text-3xl">
            Supported blockchain networks and projects
          </h1>
          <p className="text-gray-400 text-md">
            Token holders of these networks, both, retail and institutional can
            help secure the networks by staking their tokens in a non-custodial
            fashion via our validators. For doing so, they earn rewards in the
            form of the respective networks' native token.
          </p>
        </div>
        <div className="mb-20">
          <p className="capitalize font-bold text-white text-3xl mb-9">
            What We Promise
          </p>
          <div className="grid lg:grid-cols-2 max-w-2xl mx-auto gap-x-40 gap-y-12">
            <div className="w-96 text-center border-2 border-[#9D00FF] p-3 space-y-4 card rounded-xl">
              <h2 className="text-white capitalize">High Security</h2>
              <p className="text-gray-400 text-md">
                The security of our customers' stake is of utmost importance to
                us. Through redundant infrastructure and connectivity, failover
                systems, 24/7 monitoring, as well as colocations at top-tier
                data-centers, we provide outstanding standards of security.
              </p>
            </div>
            <div className="w-96 text-center border-2 border-[#9D00FF] p-3 space-y-4 card rounded-xl">
              <h2 className="text-white capitalize">Compliance</h2>
              <p className="text-gray-400 text-md">
                We provide a custom staking framework for a variety of clients
                and offer state-of-the-art reporting. We are fully MaRisk &amp;
                MiCA compliant. We're also pursuing an ISO Certification,
                underlining our commitment to quality standards.
              </p>
            </div>
            <div className="w-96 text-center border-2 border-[#9D00FF] p-3 space-y-4 card rounded-xl">
              <h2 className="text-white capitalize">Sustainability</h2>
              <p className="text-gray-400 text-md">
                We work to make Web 3.0 a reality. Based in Munich, Germany, we
                are committing ourselves to running this new generation of
                infrastructure as sustainable as possible.
              </p>
            </div>
            <div className="w-96 text-center border-2 border-[#9D00FF] p-3 space-y-4 card rounded-xl">
              <h2 className="text-white capitalize">
                Bare Metal Infrastructure
              </h2>
              <p className="text-gray-400 text-md">
                Our dedicated infrastructure guarantees low latency and superior
                routing. By harnessing MEV-optimized nodes and emphasizing bare
                metal deployments, we amplify resilience and fortify network
                security, ensuring a distinct edge for staking.
              </p>
            </div>
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          width="2342"
          height="1442"
          decoding="async"
          className="absolute w-56 lg:w-80 right-20"
          srcSet="https://www.assetshedge.live/_next/image?url=%2Fmoon-bird.png&w=3840&q=75"
          src="https://www.assetshedge.live/_next/image?url=%2Fmoon-bird.png&w=3840&q=75"
          style={{ color: "transparent" }}
        />
        <div className="center z-10"></div>
        <FAQ />
      </div>
    </div>
  );
}
