export const menus = [
  { title: "Welcome!", path: "/docs", icon: "👐" },
  {
    title: "Foundation",
    path: "/docs/foundation",
    icon: "🍒",
    accordian: [
      {
        title: "Current Challange",
        icon: "‼️",
        path: "/docs/foundation/current-challenges",
      },
      {
        title: "Whats problem does Bitcoinnano solve?",
        icon: "🔩",
        path: "/docs/foundation/whats-problem-does-bitcoinnano-solve",
      },
    ],
  },

  /* Bitcoinnano blockchain */
  {
    title: "Bitcoinnano Blockchain",
    path: "/docs/bitcoinnano-blockchain",
    icon: "🎮",
    accordian: [
      {
        title: "First Runes-based blockchain",
        icon: "💎",
        path: "/docs/bitcoinnano-blockchain/first-Runes-based-blockchain",
      },
      {
        title: "Polygon CDK implementation",
        icon: "🕎",
        path: "/docs/bitcoinnano-blockchain/polygon-cdk-implementation",
      },
      {
        title: "Celestia DA integration",
        icon: "♓",
        path: "/docs/bitcoinnano-blockchain/celestia-da-integration",
      },
      {
        title: "Valium Scaling solution",
        icon: "♋",
        path: "/docs/bitcoinnano-blockchain/valium-scaling-solution",
      },
    ],
  },
  /* ****** section: BITCOINNANO ECONOMY ******/
  { sectionTitle: "BITCOINNANO ECONOMY" },
  {
    title: "BTC as the native token",
    path: "/docs/bitcoinnano-economy/btc-as-the-native-token",
    icon: "🗝️",
  },
  {
    title: "Bitcoinnano Governance Token",
    path: "/bitcoinnano-economy/bitcoinnano-governance-oken",
    icon: "🏪",
    accordian: [
      {
        title: "Decentralized Decision-Making",
        icon: "🕸️",
        path: "/bitcoinnano-economy/bitcoinnano-governance-oken/decentralized-decision-making",
      },
      {
        title: "Transfer of Value",
        icon: "💵",
        path: "/bitcoinnano-economy/bitcoinnano-governance-oken/transfer-of-value",
      },
      {
        title: "How to claim gOs Token",
        icon: "💰",
        path: "/bitcoinnano-economy/bitcoinnano-governance-oken/how-to-claim-gos-token",
        accordian: [
          {
            title: "Key Holders",
            path: "/bitcoinnano-economy/bitcoinnano-governance-oken/how-to-claim-gos-token/key-holders",
          },
          {
            title: "Ordinay User",
            path: "/bitcoinnano-economy/bitcoinnano-governance-oken/how-to-claim-gos-token/ordinay-user",
            accordian: [
              {
                title: "Gas contributor Airdrop",
                path: "//bitcoinnano-economy/bitcoinnano-governance-oken/how-to-claim-gos-token/ordinay-user/gas-contributor-airdrop",
              },
              {
                title: "Community Airdrop",
                path: "/bitcoinnano-economy/bitcoinnano-governance-oken/how-to-claim-gos-token/ordinay-user/community-airdrop",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "gOs Allocation",
    path: "/bitcoinnano-economy/gos-allocation",
    icon: "🪙",
  },
  { sectionTitle: "BITCOINNANO CONTRACT" },
  {
    title: "Bitcoinnano Contract",
    path: "/bitcoinnano-contract/bitcoinnano-contract",
    icon: "📔",
  },
  { sectionTitle: "BITCOINNANO ECOSYSTEM" },
  {
    title: "Cross-chain Bridge",
    path: "/bitcoinnano-ecosystem/cross-chain-bridge",
    icon: "🌉",
  },
  {
    title: "Referral Program",
    path: "/bitcoinnano-ecosystem/referral-program",
    icon: "🗣️",
  },
];
