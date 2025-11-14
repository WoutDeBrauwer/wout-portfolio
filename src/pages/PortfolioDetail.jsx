import { useParams } from 'react-router-dom'
import { portfolioItems } from '../data/portfolioItems'

import React from 'react';
export default function PortfolioDetail() {
  const { id } = useParams()
  const item = portfolioItems.find(p => p.id === parseInt(id))
  if (!item) return <p className="p-10">Item niet gevonden</p>

  // Mapping van id naar custom detail component
  const customDetails = {
    1: React.lazy(() => import('./portfolioDetails/PortfolioDetailKoba')),
    2: React.lazy(() => import('./portfolioDetails/PortfolioDetailOkra')),
    3: React.lazy(() => import('./portfolioDetails/PortfolioDetailArteVerde')),
    4: React.lazy(() => import('./portfolioDetails/PortfolioDetailLeChic')),
    5: React.lazy(() => import('./portfolioDetails/PortfolioDetailHidromek')),
    6: React.lazy(() => import('./portfolioDetails/PortfolioDetailBiaform')),
    7: React.lazy(() => import('./portfolioDetails/PortfolioDetailVdsLandmeters')),
    8: React.lazy(() => import('./portfolioDetails/PortfolioDetailVariablePaginas')),
  };

  const CustomDetail = customDetails[item.id];

  if (CustomDetail) {
    return (
      <React.Suspense fallback={<div className="p-10 min-h-[60vh] bg-dark" aria-hidden="true"></div>}>
        <CustomDetail />
      </React.Suspense>
    );
  }

  // Fallback: standaard template
  return (
    <div className="p-10">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <img
            src={item.image}
            alt={item.title}
               onError={e => { e.currentTarget.src = '/images/Images/Template-portfolio-item.jpg' }}
            className="w-full h-48 md:h-64 object-cover rounded-xl mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <div className="flex flex-wrap gap-2 mb-2">
            {item.tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base text-white/80">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
