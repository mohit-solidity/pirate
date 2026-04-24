import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/ui/ProjectCard"; // Using unified ProjectCard
import { motion } from "framer-motion";
import { Users, BarChart3, Send, Layers, Hexagon, Zap } from "lucide-react";
import { Navigate } from "react-router-dom";

const Community = () => {
  const categories = [
    {
      id: "casino",
      name: "Casino & Gaming",
      projects: [
        {
          name: "Rakebit",
          badge: "Crypto Casino / Community",
          description:
            "Managed and scaled the community ecosystem across social platforms, focusing on real-time engagement, moderation, and player retention in a fast-paced crypto gaming environment.",
          metric: "↑ Engagement +35%",
          keyImpact:
            "Implemented structured engagement strategies, handled live community interactions, and improved retention through consistent moderation, campaign execution, and user feedback loops.",
          image:
            "https://pbs.twimg.com/profile_images/2011114712390381573/urzevaQV_400x400.png",
          twitter: "https://x.com/Rakebitcom",
        },
        {
          name: "BetU",
          badge: "Casino / Support",
          description:
            "Managed community support and social engagement across X, Telegram, and in-platform channels, focusing on fast resolution times, clear communication, and consistent user experience in a high-volume crypto gaming environment.",
          metric: " 2 min Avg Response Time",
          keyImpact:
            "Streamlined support workflows, handled VIP users with priority escalation, and maintained active engagement through announcements, campaigns, and real-time moderation—contributing to stronger retention and improved user sentiment.",
          image:
            "https://pbs.twimg.com/profile_images/1773745429689094144/vhx8VHBf_400x400.jpg",
          twitter: "https://x.com/betuglobal",
        },
      ],
    },
    {
      id: "memecoins",
      name: "Memecoins & Social",
      projects: [
        {
          name: "ZkTsunami",
          badge: "Memecoin / L1",
          description:
            "Built and managed the early-stage community across X and Telegram, focusing on organic growth, raid coordination, and consistent engagement during the project’s initial launch phase.",
          metric: "10k+ Early Community Members",
          keyImpact:
            "Coordinated raid campaigns, managed real-time discussions, and supported launch momentum through structured engagement, announcements, and active moderation—helping drive early adoption and visibility.",
          image:
            "https://pbs.twimg.com/profile_images/1627911123767885825/Sa72qYMC_400x400.jpg",
          twitter: "https://x.com/ZkTsunami",
        },
        {
          name: "Trumpcoin",
          badge: "Social / Meme",
          description:
            "Managed community operations across X and Telegram, maintaining engagement quality and moderation standards within a fast-growing meme token community.",
          metric: "50k+ Active Community Members",
          keyImpact:
            "Handled high-volume interactions, moderated discussions to reduce spam and FUD, and maintained consistent communication through announcements and real-time engagement during peak activity periods.",
          image:
            "https://pbs.twimg.com/profile_images/1802697171428315136/ftq17niP_400x400.jpg",
          twitter: "https://x.com/DJTtoken",
        },
        {
          name: "Eyelabs",
          badge: "Meme Tech / NFT",
          description:
            "Managed NFT-focused community channels and supported collaboration efforts with KOLs to expand reach and engagement across the ecosystem.",
          metric: "4k+ KOL & Community Network",
          keyImpact:
            "Coordinated community campaigns, supported KOL activations, and maintained consistent engagement through updates, events, and moderation across NFT initiatives.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTMMHCyREdnmMEfznj3TCpqwQ-nVxdHojnQ&s",
          twitter: "https://x.com/eyelabs_io",
        },
      ],
    },
    {
      id: "gamefi",
      name: "GameFi Ecosystems",
      projects: [
        {
          name: "Avocado",
          badge: "GameFi Guild",
          description:
            "Managed guild community operations and supported onboarding for new players, helping integrate users into GameFi ecosystems through structured guidance and active engagement.",
          metric: "10k+ Guild Members Supported",
          keyImpact:
            "Facilitated onboarding flows for new players, maintained communication across guild channels, and supported engagement through events, updates, and day-to-day moderation.",
          image:
            "https://pbs.twimg.com/profile_images/1447613890272006144/SnBZ7oIs_400x400.jpg",
          twitter: "https://x.com/avocadoguild",
        },
        {
          name: "Blum",
          badge: "Gaming / DeFi",
          description:
            "Supported community growth and user onboarding across gaming and DeFi features, helping users navigate platform mechanics and maintain active engagement.",
          metric: "3M+ User Reach",
          keyImpact:
            "Assisted users with onboarding and trade flows, handled high-volume community interactions, and maintained consistent communication through updates, support, and moderation across channels.",
          image:
            "https://pbs.twimg.com/profile_images/1831623678133506048/29dcl6FV_400x400.jpg",
          twitter: "https://x.com/blumcrypto",
        },
      ],
    },
    {
      id: "infra",
      name: "Infrastructure & DeFi",
      projects: [
        {
          name: "Clore",
          badge: "GPU Computing",
          description:
            "Managed community engagement for a decentralized GPU computing platform, supporting node operators and developers through clear communication, onboarding guidance, and active moderation.",
          metric: "45% Node Growth",
          keyImpact:
            "Supported community expansion by assisting node onboarding, moderating technical discussions, and maintaining engagement through updates, AMAs, and developer-focused interactions.",
          image:
            "https://pbs.twimg.com/profile_images/1668774525020848128/D9cTRbPy_400x400.jpg",
          twitter: "https://x.com/clore_ai",
        },
        {
          name: "Ratex",
          badge: "Technical DeFi",
          description:
            "Handled technical support and community queries for a DeFi protocol, assisting users with trading flows, platform usage, and issue resolution across active channels.",
          metric: "99% Ticket Resolution Rate",
          keyImpact:
            "Resolved complex user queries, maintained fast and accurate support responses, and helped improve user confidence through clear communication and consistent issue handling.",
          image:
            "https://pbs.twimg.com/profile_images/1790703675700355072/wUBLpPIS_400x400.jpg",
          twitter: "https://x.com/RateX_Dex",
        },
        {
          name: "Pumpad",
          badge: "Launchpad",
          description:
            "Supported community operations for token launches, assisting users with whitelist processes, participation steps, and real-time updates during IDO phases.",
          metric: "15+ Token Launches Supported",
          keyImpact:
            "Managed whitelist interactions, guided users through participation flows, and maintained active communication during launches to ensure smooth coordination and user clarity.",
          image:
            "https://pbs.twimg.com/profile_images/1923431257016262656/0iuQCFXY_400x400.jpg",
          twitter: "https://x.com/pumpadgo",
        },
        {
          name: "Miden",
          badge: "L1 / zk-Rollup",
          description:
            "Supported developer and community engagement for a zk-rollup ecosystem, helping simplify complex concepts through structured content and interactive sessions.",
          metric: "200+ Community Sessions Supported",
          keyImpact:
            "Assisted in organizing educational sessions, moderated technical discussions, and maintained consistent communication to improve developer understanding and engagement.",
          image:
            "https://pbs.twimg.com/profile_images/1916961429946499073/_4nWxF8L_400x400.png",
          twitter: "https://x.com/0xMiden",
        },
      ],
    },
  ];

  const metrics = [
    {
      label: "Active Management",
      value: "500K+",
      icon: Users,
      detail: "Real-time flow",
    },
    {
      label: "Increase Engagement",
      value: "32%",
      icon: BarChart3,
      detail: "Node response",
    },
    {
      label: "Core Campaigns",
      value: "80+",
      icon: Send,
      detail: "Tactical drop",
    },
    { label: "Protocols", value: "15+", icon: Layers, detail: "L1/L2 Grid" },
  ];

  return (
    <Layout>
      <div className="py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-primary)] mb-10">
            <Hexagon size={14} /> Community Manager
          </div>
          <h1 className="text-fluid-hero font-extrabold tracking-tighter leading-[0.9] uppercase mb-12">
            Community <br />
            <span className="text-grad-blue">Growth.</span>
          </h1>
          <p className="text-[var(--fs-lg)] text-[var(--color-text-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            I specialize in architecting strategic growth for high-velocity Web3
            protocols, bridging the gap between technical governance and the
            people who use them.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="glass-card p-10 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <metric.icon
                  size={24}
                  className="text-[var(--color-primary)] mb-8"
                />
                <h3 className="text-[var(--fs-2xl)] font-extrabold tracking-tighter mb-2">
                  {metric.value}
                </h3>
                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-black">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-40">
          {categories.map((cat, ci) => (
            <section key={ci}>
              <div className="flex items-center gap-6 mb-16">
                <span className="text-[var(--fs-base)] font-bold text-[var(--color-primary)] opacity-40 italic">
                  0{ci + 1}
                </span>
                <h2 className="text-[var(--fs-xl)] font-extrabold uppercase tracking-tighter">
                  {cat.name}
                </h2>
                <div className="flex-grow h-[1px] bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.projects.map((proj, pi) => (
                  <ProjectCard key={pi} project={proj} index={pi} />
                ))}
                <div class="flex items-center gap-4 mt-8">
                  <div class="flex-1 h-px bg-gray-700"></div>
                  <p class="text-xs text-gray-400 tracking-widest uppercase">
                    And many more
                  </p>
                  <div class="flex-1 h-px bg-gray-700"></div>
                </div>
                <div class="flex items-center gap-4 mt-8">
                  <div class="flex-1 h-px bg-gray-700"></div>
                  <p class="text-xs text-gray-400 tracking-widest uppercase">
                    And many more
                  </p>
                  <div class="flex-1 h-px bg-gray-700"></div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Community;
