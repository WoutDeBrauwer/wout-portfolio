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


}
