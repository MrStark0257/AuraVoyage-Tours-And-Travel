import { Currency, CurrencyRate } from '../types';

export const CURRENCY_RATES: Record<Currency, CurrencyRate> = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  INR: { symbol: '₹', rate: 86.5 },
  AED: { symbol: 'AED ', rate: 3.67 },
};

export function formatPrice(priceUSD: number, currency: Currency): string {
  const rateInfo = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = priceUSD * rateInfo.rate;

  if (currency === 'INR') {
    return `${rateInfo.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
  }

  if (currency === 'AED') {
    return `${rateInfo.symbol}${Math.round(converted).toLocaleString()}`;
  }

  return `${rateInfo.symbol}${Math.round(converted).toLocaleString()}`;
}

export function calculateDiscount(originalPriceUSD: number, currentPriceUSD: number): number {
  if (!originalPriceUSD || originalPriceUSD <= currentPriceUSD) return 0;
  return Math.round(((originalPriceUSD - currentPriceUSD) / originalPriceUSD) * 100);
}

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

