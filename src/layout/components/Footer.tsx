import React from 'react';

interface Props {}

const Footer: React.FC<Props> = () => {
  return <footer style={styles.footer}>{'<Footer />'}</footer>;
};

export default Footer;

const styles = {
  footer: {
    height: '20vh',
    background: 'coral',
  },
} as const;
