import { Carousel, Image } from '@fluentui/react-northstar'

export default function CarouselItem() {
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
  )
}