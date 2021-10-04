import React from "react";
import { 
  Animation,
  Avatar,
  Button, 
  Card,
  Carousel,
  DownloadIcon,
  Embed,
  Flex,
  Header, 
  Image,
  Layout,
  MentionIcon,
  MoreIcon,
  Provider,
  Skeleton,  
  StarIcon,
  Text,
  Video } from '@fluentui/react-northstar'
import AnimationCode from '!!raw-loader!../../../assets/code/component/media/AnimationCode.jsx'
import AvatarCode from '!!raw-loader!../../../assets/code/component/media/AvatarCode.jsx'
import CardCode from '!!raw-loader!../../../assets/code/component/media/CardCode.jsx'
import CarouselCode from '!!raw-loader!../../../assets/code/component/media/CarouselCode.jsx'
import EmbedCode from '!!raw-loader!../../../assets/code/component/media/EmbedCode.jsx'
import ImageCode from '!!raw-loader!../../../assets/code/component/media/ImageCode.jsx'
import SkeletonCode from '!!raw-loader!../../../assets/code/component/media/SkeletonCode.jsx'
import VideoCode from '!!raw-loader!../../../assets/code/component/media/VideoCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AnimationItem() {
  const spinner = {
    keyframe: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    duration: '5s',
    iterationCount: 'infinite',
  }
  return (
    <div>
      <Header as="h4" content="Animation" />

      <Text weight="regular" size="large">
        An Animation provides animation effects to rendered elements.
      </Text>
      <Collapse>
        <Code code={ AnimationCode } />
      </Collapse>
      <Provider
        theme={{
          animations: {
            spinner,
          },
        }}
        styles={{ backgroundColor: "#eeeeee" }}
      >
        <Animation name="spinner" direction="alternate-reverse">
          <MentionIcon circular bordered />
        </Animation>
      </Provider>
    </div>
  )
}

function AvatarItem() {
  return (
    <div>
      <Header as="h4" content="Avatar" />

      <Text weight="regular" size="large">
        An Avatar is a graphical representation of a user.
      </Text>
      <Collapse>
        <Code code={ AvatarCode } />
      </Collapse>
      <Avatar
        image="pic/Microsoft.png"
        status={{
          color: 'red',
          title: 'Busy',
        }}
      />
    </div>
  )
}

function CardItem() {
  return (
    <div>
      <Header as="h4" content="Card" />

      <Text weight="regular" size="large">
        A Card is used to display data in sematically grouped way.
      </Text>
      <Collapse>
        <Code code={ CardCode } />
      </Collapse>
      <Flex>
        <Card aria-roledescription="card with avatar, image and action buttons">
          <Card.Header>
            <Flex gap="gap.small">
              <Avatar
                image="pic/Microsoft.png"
                label="Copy bandwidth"
                name="Robert Tolbert"
                status="unknown"
              />
              <Flex column>
                <Text content="Title goes here" weight="bold" />
                <Text content="Secondary line" size="small" />
              </Flex>
            </Flex>
          </Card.Header>
          <Card.Body>
            <Flex column gap="gap.small">
              <Image src="pic/Microsoft.png" />
              <Text content="Citizens of distant epochs muse about at the edge of forever hearts of the..." />
            </Flex>
          </Card.Body>
          <Card.Footer>
            <Flex space="between">
              <Button content="Action" />
              <Flex>
                <Button icon={<StarIcon />} iconOnly text title="Favourite" />
                <Button icon={<DownloadIcon />} iconOnly text title="Download" />
                <Button icon={<MoreIcon />} iconOnly text title="More" />
              </Flex>
            </Flex>
          </Card.Footer>
        </Card>
      </Flex>
    </div>
  )
}

function CarouselItem() {
  const imageAltTags = {
    allan: 'Portrait of Allan',
    carole: 'Portrait of Carole',
    johnie: 'Portrait of Johnie',
    kat: 'Portrait of Kat',
  }
  const carouselItems = [
    {
      key: 'allan',
      id: 'allan',
      content: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
          fluid
          alt={imageAltTags.allan}
        />
      ),
      thumbnail: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
          fluid
          alt={imageAltTags.allan}
        />
      ),
      'aria-label': imageAltTags.allan,
    },
    {
      key: 'carole',
      id: 'carole',
      content: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
          fluid
          alt={imageAltTags.carole}
        />
      ),
      thumbnail: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
          fluid
          alt={imageAltTags.carole}
        />
      ),
      'aria-label': imageAltTags.carole,
    },
    {
      key: 'johnie',
      id: 'johnie',
      content: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/JohnieMcConnell.jpg"
          fluid
          alt={imageAltTags.johnie}
        />
      ),
      thumbnail: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/JohnieMcConnell.jpg"
          fluid
          alt={imageAltTags.johnie}
        />
      ),
      'aria-label': imageAltTags.johnie,
    },
    {
      key: 'kat',
      id: 'kat',
      content: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatLarsson.jpg"
          fluid
          alt={imageAltTags.kat}
        />
      ),
      thumbnail: (
        <Image
          src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatLarsson.jpg"
          fluid
          alt={imageAltTags.kat}
        />
      ),
      'aria-label': imageAltTags.kat,
    },
  ]
  return (
    <div>
      <Header as="h4" content="Carousel" />

      <Text weight="regular" size="large">
        A Carousel displays data organised as a gallery.
      </Text>
      <Collapse>
        <Code code={ CarouselCode } />
      </Collapse>
      <Carousel
        circular
        ariaRoleDescription="carousel"
        ariaLabel="Portrait collection"
        thumbnails
        navigation={{
          'aria-label': 'people portraits',
          items: carouselItems.map((item, index) => ({
            key: index,
            'aria-controls': item.id,
            'aria-label': item['aria-label'],
            content: item.thumbnail,
          })),
        }}
        items={carouselItems}
        getItemPositionText={(index, size) => `${index + 1} of ${size}`}
      />
    </div>
  )
}

function EmbedItem() {
  return (
    <div>
      <Header as="h4" content="Embed" />

      <Text weight="regular" size="large">
        An Embed displays content from external websites, like a post from external social network.
      </Text>
      <Collapse>
        <Code code={ EmbedCode } />
      </Collapse>
      <Flex column>
        <Embed
          iframe={{
            allowFullScreen: true,
            src: 'https://www.youtube.com/embed/wYmTkgqbrDM?autoplay=1',
            frameBorder: 0,
            allow: ['autoplay'],
            height: '400px',
            width: '711.11px',
          }}
          placeholder="https://i3.ytimg.com/vi/wYmTkgqbrDM/maxresdefault.jpg"
          title="The new Microsoft icons: diverse and connected"
          variables={{
            height: '400px',
            width: '711.11px',
          }}
        />
        <Text>(c) copyright 2020, Microsoft</Text>
      </Flex>
    </div>
  )
}

function ImageItem() {
  return (
    <div>
      <Header as="h4" content="Image" />

      <Text weight="regular" size="large">
        An Image is a graphic representation of something.
      </Text>
      <Collapse>
        <Code code={ ImageCode } />
      </Collapse>
      <Layout
        styles={{
          maxWidth: '150px',
        }}
        debug
        renderMainArea={() => (
          <Image
            fluid
            src="pic/Microsoft.png"
          />
        )}
      />
    </div>
  )
}

function SkeletonItem() {
  return (
    <div>
      <Header as="h4" content="Skeleton" />

      <Text weight="regular" size="large">
        A Skeleton is a component to be placed while the content is loading.
      </Text>
      <Collapse>
        <Code code={ SkeletonCode } />
      </Collapse>
      <Skeleton animation="wave">
        <Skeleton.Shape />
        <Skeleton.Line width="20%" />
        <Skeleton.Line width="50%" />
      </Skeleton>
    </div>
  )
}

function VideoItem() {
  return (
    <div>
      <Header as="h4" content="Video" />

      <Text weight="regular" size="large">
        A Video provides ability to embed video content.
      </Text>
      <Collapse>
        <Code code={ VideoCode } />
      </Collapse>
      <Video
        poster="pic/Microsoft.png"
        src="http://fabricweb.azureedge.net/fabric-website/assets/videos/2020_MSFT_Icon_Celebration.mp4"
        variables={{
          height: '300px',
          width: '720px',
        }}
      />
    </div>
  )
}

export default function Media() {
  return (
    <div>
      <Header as="h3" content="Media" />
      <ul id="MediaList">
        <li><Button onClick={ () => ScrollToAnchor('AnimationItem') }>Animation</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('AvatarItem') }>Avatar</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('CardItem') }>Card</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('CarouselItem') }>Carousel</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('EmbedItem') }>Embed</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('ImageItem') }>Image</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('SkeletonItem') }>Skeleton</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('VideoItem') }>Video</Button></li>
      </ul>
      <div id="AnimationItem"><AnimationItem /></div>
      <div id="AvatarItem"><AvatarItem /></div>
      <div id="CardItem"><CardItem /></div>
      <div id="CarouselItem"><CarouselItem /></div>
      <div id="EmbedItem"><EmbedItem /></div>
      <div id="ImageItem"><ImageItem /></div>
      <div id="SkeletonItem"><SkeletonItem /></div>
      <div id="VideoItem"><VideoItem /></div>
    </div>
  )
}
