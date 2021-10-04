import { Breadcrumb, ChevronEndMediumIcon } from '@fluentui/react-northstar'

<Breadcrumb aria-label="breadcrumb" size="large">
  <Breadcrumb.Item>
    <Breadcrumb.Link href="#/toolkit">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Divider>
    <ChevronEndMediumIcon size="large" />
  </Breadcrumb.Divider>
  <Breadcrumb.Item disabled>Store</Breadcrumb.Item>
  <Breadcrumb.Divider>
    <ChevronEndMediumIcon size="large" />
  </Breadcrumb.Divider>
  <Breadcrumb.Item aria-current="page">T-shirt</Breadcrumb.Item>
</Breadcrumb>