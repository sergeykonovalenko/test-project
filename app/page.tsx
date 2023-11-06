'use client';

import Container from '@/components/Container/Container';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: underline;
`;

export default function Home() {
  return (
    <main>
      <Container>
        <h1>Pages</h1>
        <ul>
          <li>
            <Link href="details">Details</Link>
          </li>
        </ul>
      </Container>
    </main>
  );
}
