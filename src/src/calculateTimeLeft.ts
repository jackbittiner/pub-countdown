interface TimeUntil {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeLeft = (dateFrom: any, dateTo: any): TimeUntil => {
  const difference = dateTo - dateFrom;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};
