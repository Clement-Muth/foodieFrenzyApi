import { NextSeo } from "next-seo";
import { Layout } from "library/components/common";
import { Text } from "library/components/ui";
import { Flex } from "rebass";

const IndexPage = () => {
  return (
    <>
      <NextSeo />
      <Flex justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <Text fontSize={6}>Hello :)</Text>
        <Text fontSize={6}>Hello :)</Text>
      </Flex>
    </>
  );
};

IndexPage.Layout = Layout;

export default IndexPage;
