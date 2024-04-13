import Link from 'next/link';

interface ISearchProps {}

const articles = [
  {
    description:
      'Named after the year the casino was founded, 1991 Kitchen perfectly encapsulates what makes Grand Casino Mille Lacs great. The down-to-earth service, thoughtfully made menu, and warm atmosphere make it worth visiting time and time again.',
    highlight: {
      description: [
        'Named after the year the casino was founded, 1991 Kitchen perfectly encapsulates what makes <b>Grand</b> Casino Mille Lacs great. The down-to-earth service, thoughtfully made menu, and warm atmosphere make it worth visiting time and time again.',
      ],
    },
    id: '3ca032b3ed08a2dff5bfea13d756aa55caa3ccf7f3b585f08ae968ca',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-0ea-d43b/media/Project/MLCV/Grand-Casino/Master-Site/Dining/1991-Kitchen/1991-hero-img-blue-filter-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-dev',
    location: 'Mille Grid',
    name: '1991 Grid List',
    source_id: '884884',
    type: 'Dining',
    url: 'https://grandcasino-app.vercel.app/Dine/1991-Kitchen',
  },
  {
    description:
      'Named after the year the casino was founded, 1991 Kitchen perfectly encapsulates what makes Grand Casino Mille Lacs great. The down-to-earth service, thoughtfully made menu, and warm atmosphere make it worth visiting time and time again.',
    highlight: {
      description: [
        'Named after the year the casino was founded, 1991 Kitchen perfectly encapsulates what makes <b>Grand</b> Casino Mille Lacs great. The down-to-earth service, thoughtfully made menu, and warm atmosphere make it worth visiting time and time again.',
      ],
    },
    id: 'eab2bde26d7eecd75727537fd5914395989bc722e2d3082fcbf20e15',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-uat-0c25/media/Project/MLCV/Grand-Casino/Master-Site/Dining/1991-Kitchen/1991-hero-img-blue-filter-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-uat',
    location: 'Mille Lacs',
    name: '1991 Kitchen',
    source_id: '885634',
    type: 'Dining',
    url: 'https://mlcv-uat.vercel.app/Dine/1991-Kitchen',
  },
  {
    description:
      'At Grand Casino Mille Lacs and Hinckley, we have a wonderful selection of amenities and activities ready for you. Get your itinerary started with our latest recommendations.',
    highlight: {
      description: [
        'At <b>Grand</b> Casino Mille Lacs and Hinckley, we have a wonderful selection of amenities and activities ready for you. Get your itinerary started with our latest recommendations.',
      ],
    },
    id: 'b0fa17fd05b6aacb7a59a660dec09d3f889e981427db0cc8923b6394',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-0ea-d43b/media/Project/MLCV/Grand-Casino/Master-Site/Do/Do-hero-img-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-dev',
    location: null,
    name: 'Amenities',
    source_id: '884884',
    type: 'Site Page',
    url: 'https://grandcasino-app.vercel.app/Do',
  },
  {
    description:
      'At Grand Casino Mille Lacs and Hinckley, we have a wonderful selection of amenities and activities ready for you. Get your itinerary started with our latest recommendations.',
    highlight: {
      description: [
        'At <b>Grand</b> Casino Mille Lacs and Hinckley, we have a wonderful selection of amenities and activities ready for you. Get your itinerary started with our latest recommendations.',
      ],
    },
    id: '2c6671ae97321b9fd6c706752663d0127f99c0343fce44c5477406fc',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-uat-0c25/media/Project/MLCV/Grand-Casino/Master-Site/Do/Do-hero-img-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-uat',
    location: null,
    name: 'Amenities',
    source_id: '885634',
    type: 'Site Page',
    url: 'https://mlcv-uat.vercel.app/Do',
  },
  {
    description:
      'Grand Casino is much more than a casino, because we want you to feel comfortable on and off the gaming floor. Looking for a game of golf at one of America&rsquo;s favorite courses? An aromatic, relaxing hot stone massage? You name it, and at Grand Casino, we have you covered.',
    highlight: {
      description: [
        '<b>Grand</b> Casino is much more than a casino, because we want you to feel comfortable on and off the gaming floor. Looking for a game of golf at one of America&rsquo;s favorite courses? An aromatic, relaxing hot stone massage? You name it, and at <b>Grand</b> Casino, we have you covered.',
      ],
    },
    id: '52481cbe53c9f9e2d23a98a3c8ddd0c38d9f1fd1ce5d05840b0e970a',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-prod-0352/media/Project/MLCV/Grand-Casino/Master-Site/Listing-Pages/Amenities/AmenitiesHero1.jpg?h=485&iar=0&w=1180',
    index_name: 'grand-casino-prod',
    location: null,
    name: 'Amenities',
    source_id: '887577',
    type: 'Site Page',
    url: 'https://grandcasino-app-prod.vercel.app/Do',
  },
  {
    description:
      'Grand Casino Mille Lacs and Grand Casino Hinckley believe in giving back to our local communities throughout Minnesota. Through our giving program, Grand Casino places priority on monetary donations, community sponsorships, and product donations.',
    highlight: {
      description: [
        '<b>Grand</b> Casino Mille Lacs and <b>Grand</b> Casino Hinckley believe in giving back to our local communities throughout Minnesota. Through our giving program, <b>Grand</b> Casino places priority on monetary donations, community sponsorships, and product donations.',
      ],
    },
    id: '0b06e356021b34874e71cca4449bc9a951d069ba2183be6586b8fc23',
    index_name: 'grand-casino-dev',
    location: null,
    name: 'Community Giving',
    source_id: '884884',
    type: 'Site Page',
    url: 'https://grandcasino-app.vercel.app/Community-Giving',
  },
  {
    description:
      'Grand Casino Mille Lacs and Grand Casino Hinckley believe in giving back to our local communities throughout Minnesota. Through our giving program, Grand Casino places priority on monetary donations, community sponsorships, and product donations.',
    highlight: {
      description: [
        '<b>Grand</b> Casino Mille Lacs and <b>Grand</b> Casino Hinckley believe in giving back to our local communities throughout Minnesota. Through our giving program, <b>Grand</b> Casino places priority on monetary donations, community sponsorships, and product donations.',
      ],
    },
    id: 'a08c73f776e7783faa32390009f0e413df2dfd1178d4798cfadc307c',
    index_name: 'grand-casino-uat',
    location: null,
    name: 'Community Giving',
    source_id: '885634',
    type: 'Site Page',
    url: 'https://mlcv-uat.vercel.app/Community-Giving',
  },
  {
    description:
      'Grand Casino Mille Lacs and Hinckley have an extensive and well-curated collection of restaurants and bars that will provide a top-tier dining and drinking experience.',
    highlight: {
      description: [
        '<b>Grand</b> Casino Mille Lacs and Hinckley have an extensive and well-curated collection of restaurants and bars that will provide a top-tier dining and drinking experience.',
      ],
    },
    id: 'ce116a7643cdd482342911edb9fa36ff876c0a7b941995dfc710bc5a',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-0ea-d43b/media/Project/MLCV/Grand-Casino/Master-Site/Dining/Dine-hero-blue-filter-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-dev',
    location: null,
    name: 'Dining',
    source_id: '884884',
    type: 'Site Page',
    url: 'https://grandcasino-app.vercel.app/Dine',
  },
  {
    description:
      'Grand Casino Mille Lacs and Hinckley have an extensive and well-curated collection of restaurants and bars that will provide a top-tier dining and drinking experience.',
    highlight: {
      description: [
        '<b>Grand</b> Casino Mille Lacs and Hinckley have an extensive and well-curated collection of restaurants and bars that will provide a top-tier dining and drinking experience.',
      ],
    },
    id: 'bc9ef287f2d30dea9ed9ba96bf6eb91ca765131df378ad9575dc6892',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-uat-0c25/media/Project/MLCV/Grand-Casino/Master-Site/Dining/Dine-hero-blue-filter-1000x800.png?h=800&iar=0&w=1000',
    index_name: 'grand-casino-uat',
    location: null,
    name: 'Dining',
    source_id: '885634',
    type: 'Site Page',
    url: 'https://mlcv-uat.vercel.app/Dine',
  },
  {
    description:
      'Mille Lacs or Hinckley, morning or evening, casual or elegant, Grand Casino has the right fare for you. From newly roasted coffee to late-night pizza, tender crab cakes to fresh and healthy salads, mouth-watering tenderloin to decadent ice cream sundaes, we have what you’re craving. No matter what you’re craving.',
    highlight: {
      description: [
        'Mille Lacs or Hinckley, morning or evening, casual or elegant, <b>Grand</b> Casino has the right fare for you. From newly roasted coffee to late-night pizza, tender crab cakes to fresh and healthy salads, mouth-watering tenderloin to decadent ice cream sundaes, we have what you’re craving. No matter what you’re craving.',
      ],
    },
    id: 'f933e673112952de6b0b5a5f5d90463436538a5c828a79c7b96c4285',
    image_url:
      'https://edge.sitecorecloud.io/millelacscorp1-mlcv-prod-0352/media/Project/MLCV/Grand-Casino/Master-Site/Dining/1991_card2_PM3_3778_1_Hero_High.jpg?h=330&iar=0&w=396',
    index_name: 'grand-casino-prod',
    location: null,
    name: 'Dining',
    source_id: '887577',
    type: 'Site Page',
    url: 'https://grandcasino-app-prod.vercel.app/Dine',
  },
];

const SearchContentGrid = ({}: ISearchProps): JSX.Element => {
  return (
    <>
      <div className="searchArticlesGridView">
        {articles.map((a, index) => (
          <div key={`${a.id}@${a.source_id}`}>
            {/* <div className="ImageWrapper">
              <Image src={a.image_url} alt="" fill />
            </div> */}
            <Link title={a.name} href={`/detail/${a.id}`}>
              <div className="Title">{a.name}</div>
              <div className="Subtitle" dangerouslySetInnerHTML={{ __html: a.highlight.description }} />
              <div className="Type">{a.type ? a.type : 'Unknown'}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchContentGrid;
