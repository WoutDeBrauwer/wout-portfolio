import { useParams } from 'react-router-dom'
import { portfolioItems } from '../data/portfolioItems'

import React from 'react';
export default function PortfolioDetail() {
  const { slug } = useParams()
  const item = portfolioItems.find(p => p.slug === slug)
  if (!item) return <p className="p-10">Item niet gevonden</p>

  // Mapping van id naar custom detail component
  const customDetails = {
    'koba-metropool': React.lazy(() => import('./portfolioDetails/PortfolioDetailKoba')),
    'okra-reizen': React.lazy(() => import('./portfolioDetails/PortfolioDetailOkra')),
    'arte-verde': React.lazy(() => import('./portfolioDetails/PortfolioDetailArteVerde')),
    'le-chic-hairboetiek': React.lazy(() => import('./portfolioDetails/PortfolioDetailLeChic')),
    'hidromek': React.lazy(() => import('./portfolioDetails/PortfolioDetailHidromek')),
    'biaform-provital': React.lazy(() => import('./portfolioDetails/PortfolioDetailBiaform')),
    'vds-landmeters': React.lazy(() => import('./portfolioDetails/PortfolioDetailVdsLandmeters')),
    'variable-paginas': React.lazy(() => import('./portfolioDetails/PortfolioDetailVariablePaginas')),
  };

  const CustomDetail = customDetails[item.slug];

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
