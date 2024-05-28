import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface PageContainerProps {
  title: string
  description?: string
  children: ReactNode
}
const PageContainer = ({ title, description, children }: PageContainerProps) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

export default PageContainer;
