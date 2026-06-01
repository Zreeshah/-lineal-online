
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface CanonicalLinkProps {
  customUrl?: string;
}

const CanonicalLink: React.FC<CanonicalLinkProps> = ({ customUrl }) => {
  const location = useLocation();
  const baseUrl = 'https://linijka-online.pl';
  const canonicalUrl = customUrl || `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalLink;
