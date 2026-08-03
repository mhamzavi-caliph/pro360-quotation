// Pro360 Quotation System — configuration
// Point this at the SAME Supabase project as your Finance system so agents
// sign in with their existing Finance login and quotes save into Finance.
// The anon key is safe in the browser: Row Level Security governs every row.
window.PRO360_CONFIG = {
  SUPABASE_URL: "https://sqmywokeppwcvxpcifhg.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_uxJe_uusoskoqmFSvYDm8Q_Uq4eK29j",
  CURRENCY_SYMBOL: "RM",
  TAX_LABEL: "SST",
  TAX_PCT: 8
};
