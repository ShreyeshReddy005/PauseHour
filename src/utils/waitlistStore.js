const EVENT_NAME = 'pausehour-waitlist-update';

export const getWaitlistData = () => {
  const data = localStorage.getItem('ph_waitlist');
  if (!data) return null;
  const parsed = JSON.parse(data);
  
  // Keep the user's referrals count synchronized with the mock referrals registry
  const mockCount = getMockReferralsCount(parsed.referralCode);
  if (mockCount > parsed.referralsCount) {
    const diff = mockCount - parsed.referralsCount;
    parsed.referralsCount = mockCount;
    // Each referral jumps the user up by 150-250 spots
    for (let i = 0; i < diff; i++) {
      const jump = Math.floor(Math.random() * 101) + 150;
      parsed.queuePosition = Math.max(1, parsed.queuePosition - jump);
    }
    localStorage.setItem('ph_waitlist', JSON.stringify(parsed));
  }
  
  return parsed;
};

export const registerWaitlist = (email, refCodeFromUrl = null) => {
  // Generate a unique 6-char referral code
  const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const initialPosition = Math.floor(Math.random() * 300) + 2400; // Rank #2400 - #2700
  
  const finalRefCode = refCodeFromUrl || sessionStorage.getItem('ph_referred_by');
  
  const newUserData = {
    email,
    referralCode,
    queuePosition: initialPosition,
    referralsCount: 0,
    referredBy: finalRefCode
  };
  
  localStorage.setItem('ph_waitlist', JSON.stringify(newUserData));
  
  // If there was a referral code, simulate crediting that code
  if (finalRefCode) {
    creditReferralCode(finalRefCode);
  }
  
  // Dispatch update event
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
  return newUserData;
};

// Credit a referral code in a mock database (stored in localStorage)
const creditReferralCode = (code) => {
  const activeReferrals = JSON.parse(localStorage.getItem('ph_mock_referrals') || '{}');
  activeReferrals[code] = (activeReferrals[code] || 0) + 1;
  localStorage.setItem('ph_mock_referrals', JSON.stringify(activeReferrals));
};

export const getMockReferralsCount = (code) => {
  const activeReferrals = JSON.parse(localStorage.getItem('ph_mock_referrals') || '{}');
  return activeReferrals[code] || 0;
};

export const simulateReferral = () => {
  const data = getWaitlistData();
  if (!data) return null;
  
  data.referralsCount += 1;
  // Each referral jumps the user up by 150-250 spots
  const jump = Math.floor(Math.random() * 101) + 150;
  data.queuePosition = Math.max(1, data.queuePosition - jump);
  
  localStorage.setItem('ph_waitlist', JSON.stringify(data));
  // Keep mock referrals database in sync as well
  creditReferralCode(data.referralCode);
  
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
  return data;
};

export const subscribeWaitlist = (callback) => {
  const handler = () => callback(getWaitlistData());
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
};

// Mock leaderboard standings (Top 5 spots)
export const getLeaderboardStandings = () => {
  const defaultStandings = [
    { email: "aar***9@gmail.com", referrals: 24, rank: 1, position: 3 },
    { email: "roh***t@outlook.com", referrals: 18, rank: 2, position: 12 },
    { email: "sne***a@yahoo.com", referrals: 15, rank: 3, position: 28 },
    { email: "vik***s@gmail.com", referrals: 12, rank: 4, position: 45 },
    { email: "pri***a@hotmail.com", referrals: 9, rank: 5, position: 88 }
  ];

  // If current user is registered, check if they deserve to be on the leaderboard
  const userData = getWaitlistData();
  if (!userData) return defaultStandings;

  // Insert current user into rankings if they have more referrals than other mock users
  const allStandings = [...defaultStandings];
  const userRankIndex = allStandings.findIndex(s => s.email === userData.email);
  
  const userItem = {
    email: userData.email,
    referrals: userData.referralsCount,
    rank: 0,
    position: userData.queuePosition,
    isCurrentUser: true
  };

  if (userRankIndex !== -1) {
    allStandings[userRankIndex] = userItem;
  } else {
    allStandings.push(userItem);
  }

  // Sort by referrals descending, then by position ascending
  allStandings.sort((a, b) => b.referrals - a.referrals || a.position - b.position);

  // Recalculate ranks (Top 5 only)
  return allStandings.slice(0, 5).map((item, index) => ({
    ...item,
    rank: index + 1
  }));
};
