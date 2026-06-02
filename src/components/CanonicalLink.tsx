import React from 'react';
import { useLocation } from 'react-router-dom';
import { Head as Helmet } from 'vite-react-ssg';

interface CanonicalLinkProps {
  customUrl?: string;
}

const CanonicalLink: React.FC<CanonicalLinkProps> = ({ customUrl }) => {
  const location = useLocation();
  const baseUrl = 'https://lineal.online';
  const canonicalUrl = customUrl || `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalLink;
