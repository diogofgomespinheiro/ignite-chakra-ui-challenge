import { Header } from '@components/organisms';

interface LayoutProps {
  previousPage?: string;
  children?: React.ReactNode;
}

export function Layout({ previousPage, children }: LayoutProps) {
  return (
    <>
      <Header previousPage={previousPage} />
      {children}
    </>
  );
}
