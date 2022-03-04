import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '../components/Layout';
import { Error } from '@styles/404.styled';
import Link from 'next/link';
export default function NotFoundPage() {
  return (
    <Layout title = 'Page Not Found'>
      <Error>
          <h1><FaExclamationTriangle/>404</h1>
          <h4>Sorry, there is nothing here</h4>
          <Link href = '/'>GO Back to HomePage</Link>
      </Error>
    </Layout>
  );
}
