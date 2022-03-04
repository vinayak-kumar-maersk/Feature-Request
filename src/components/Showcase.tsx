import React from 'react';
// import styles from '@/styles/Showcase.module.css'
import { Breadcrumb } from '@anchor/react-components/dist/lib/components';
import { Showcase1 } from '@styles/Showcase.styled';
export default function Showcase() {
  return (
    <Showcase1>
      <Breadcrumb
  activeItem="Maerskfeaturerequest"
  className="breadcrumb-story"
  mainObject={{
    Maerskfeaturerequest: {
      breadcrumbLocator: 'home.windows.Maerskfeaturerequest',
      label: 'Maersk feature request',
      path: '/Maerskfeatuterequest'
    },
    home: {
      breadcrumbLocator: 'home',
      label: 'Home',
      path: '/'
    },
    windows: {
      breadcrumbLocator: 'home.windows',
      label: 'windows',
      path: '/windows'
    }
  }}
  onBreadcrumbClick={function noRefCheck(){}}
  separator="/"
/>
      <h1>Maersk feature requests</h1>
      <h2>Share your ideas for future features and functionality for Maersk —and vote on your favorites!</h2>
      <h5>Note: When submitting a new idea, please select the Enterprise or Business label first.</h5>
    </Showcase1>
  );
}
