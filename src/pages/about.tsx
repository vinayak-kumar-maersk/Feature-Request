import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

export default function AboutPage() {
  return (
    <div>
    <Layout title = 'About Maersk feature request'>
      <h1>About</h1>
      <p>This is a Maersk Feature request Page</p>
      <p>Version:1.0.0</p>
      <Link href ="/">Home</Link>
    </Layout>
    
    </div>
  );
}
