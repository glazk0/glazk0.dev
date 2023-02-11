import PlausibleProvider from 'next-plausible';

export default function PlausibleTracker() {
  return (
    <PlausibleProvider
      domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!}
      customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST!}
      enabled
      selfHosted
      trackOutboundLinks
    />
  );
}
