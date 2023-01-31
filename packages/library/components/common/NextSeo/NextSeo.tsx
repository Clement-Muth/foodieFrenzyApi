import { NextSeo as Seo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import type { FC } from "react";

const NextSeo: FC<NextSeoProps> = ({ title, description, ...props }) => {
  const { pathname } = useRouter();

  return (
    <Seo
      {...props}
      title={`${title} - Nextjs13Template`}
      description={description}
      canonical={`https://Nextjs13Template.com${pathname}`}
      openGraph={{
        title: `${title} - Nextjs13Template`,
        description: description
      }}
    />
  );
};

export default NextSeo;
