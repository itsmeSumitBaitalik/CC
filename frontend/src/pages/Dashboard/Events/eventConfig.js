export const EVENT_CONFIG = {
  hackathon: {
    icon: 'bolt',
    color: '#E05C3A',
    headerBg: 'bg-retro-red',
    barColor: 'bg-retro-red',
    badgeColor: 'text-white',
    textColor: 'white',
    iconBg: 'bg-white'
  },
  cultural: {
    icon: 'music_note',
    color: '#4CAF50',
    headerBg: 'bg-retro-green',
    barColor: 'bg-retro-green',
    badgeColor: 'text-white',
    textColor: 'white',
    iconBg: 'bg-white'
  },
  workshop: {
    icon: 'build',
    color: '#F5A623',
    headerBg: 'bg-retro-yellow',
    barColor: 'bg-retro-yellow',
    badgeColor: 'text-black',
    textColor: 'black',
    iconBg: 'bg-black'
  },
  sports: {
    icon: 'sports_soccer',
    color: '#000',
    headerBg: 'bg-white',
    barColor: 'bg-black',
    badgeColor: 'text-black',
    textColor: 'black',
    iconBg: 'bg-white'
  },
  general: {
    icon: 'event',
    color: '#000',
    headerBg: 'bg-white',
    barColor: 'bg-black',
    badgeColor: 'text-black',
    textColor: 'black',
    iconBg: 'bg-white'
  }
};

export const getEventStyle = (type) => {
  const normType = type?.toLowerCase() || 'general';
  return EVENT_CONFIG[normType] || EVENT_CONFIG['general'];
};
