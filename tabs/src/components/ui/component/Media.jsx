import React from "react";
import { 
  Animation,
  Avatar,
  Box, 
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
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AnimationItem(props) {
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
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Animation" />

      <Text weight="regular" >
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
    </Box>
  )
}

function AvatarItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Avatar" />

      <Text weight="regular" >
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
    </Box>
  )
}

function CardItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Card" />

      <Text weight="regular" >
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
    </Box>
  )
}

function CarouselItem(props) {
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
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Carousel" />

      <Text weight="regular" >
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
    </Box>
  )
}

function EmbedItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Embed" />

      <Text weight="regular" >
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
    </Box>
  )
}

function ImageItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Image" />

      <Text weight="regular" >
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
    </Box>
  )
}

function SkeletonItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Skeleton" />

      <Text weight="regular" >
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
    </Box>
  )
}

function VideoItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Video" />

      <Text weight="regular" >
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
    </Box>
  )
}

export default function Media() {
  return (
    <Box>
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
      <ComponentPrototype title="Media">
        <AnimationItem id="AnimationItem" />
        <AvatarItem id="AvatarItem" />
        <CardItem id="CardItem" />
        <CarouselItem id="CarouselItem" />
        <EmbedItem id="EmbedItem" />
        <ImageItem id="ImageItem" />
        <SkeletonItem id="SkeletonItem" />
        <VideoItem id="VideoItem" />
      </ComponentPrototype>
    </Box>
  )
}
