import { NextSeo } from "library/components/common";
import { Flex, Text } from "rebass";

const Page404 = () => (
  <>
    <NextSeo title="404" description="" />
    <Flex>
      <Flex flexDirection="column" m="auto" width="100%" height="calc(100vh - 64px)" justifyContent="center">
        <Text as="h1" textAlign="center">
          <Text as="p" color="primary" fontWeight="700">
            Oops!
          </Text>
          This page doesn&apos;t not exist :(
        </Text>
      </Flex>
    </Flex>
  </>
);

export default Page404;
