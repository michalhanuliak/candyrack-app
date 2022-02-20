import React from 'react';

import ProductDetail from '../components/products/ProductDetail';

import {
  PageContent,
  PageHeader,
  PageTitle,
} from '../styles/pages/ProductDetailPage.style';

const ProductDetailPage = () => (
  <main>
    <PageHeader>
      <PageTitle>Get super cool poster</PageTitle>
    </PageHeader>

    <PageContent>
      <ProductDetail />
    </PageContent>
  </main>
);

export default ProductDetailPage;
