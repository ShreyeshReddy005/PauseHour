const EVENT_NAME = 'pausehour-waitlist-update';

export const getWaitlistData = () => {
  // Always return null so that the user's browser is treated as unregistered
  // and we don't save or read waitlist data locally.
  return null;
};

export const registerWaitlist = (email, refCodeFromUrl = null) => {
  // Generate a mock unique 6-char referral code and temporary queue position
  // for the boarding ticket confirmation screen, without saving it locally.
  const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const initialPosition = Math.floor(Math.random() * 300) + 2400; // Rank #2400 - #2700
  
  const tempUserData = {
    email,
    referralCode,
    queuePosition: initialPosition,
    referralsCount: 0,
    referredBy: refCodeFromUrl
  };
  
  // Dispatch update event
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
  return tempUserData;
};

export const getMockReferralsCount = (code) => {
  return 0;
};

export const simulateReferral = () => {
  return null;
};

export const subscribeWaitlist = (callback) => {
  const handler = () => callback(getWaitlistData());
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
};

// Mock leaderboard standings (Top 5 spots)
export const getLeaderboardStandings = () => {
  return [
    { email: "aar***9@gmail.com", referrals: 24, rank: 1, position: 3 },
    { email: "roh***t@outlook.com", referrals: 18, rank: 2, position: 12 },
    { email: "sne***a@yahoo.com", referrals: 15, rank: 3, position: 28 },
    { email: "vik***s@gmail.com", referrals: 12, rank: 4, position: 45 },
    { email: "pri***a@hotmail.com", referrals: 9, rank: 5, position: 88 }
  ];
};
