import type { NextApiRequest, NextApiResponse } from 'next';
// const ORIGIN = [
//   'https://cohnreznick-sitecore-qa-358280-cm.azurewebsites.net',
//   'https://cohnreznick-search-dev.vercel.app',
// ];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO for latter use
  // const reqOrigin = req.headers.origin as string;
  // const host = req.headers.host as string;
  // const ip = req.connection.remoteAddress;
  // if (!host.startsWith('localhost') || ip !== '::1') {
  //   if (ORIGIN.includes(reqOrigin)) {
  //     res.setHeader('Access-Control-Allow-Origin', reqOrigin);
  //   } else {
  //     res.status(403).json({ status: true, data: null, message: 'Origin should be whitelisted.' });
  //     return;
  //   }
  // }

  const CKEY = process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY?.split('-')[1];
  const URL = `${process.env.NEXT_PUBLIC_SEARCH_SUGGESTION_END_POINT}/v2/${CKEY}`;
  const keyphrase = req.query.keyphrase;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${process.env.NEXT_PUBLIC_SEARCH_API_KEY}`,
    },
    body: JSON.stringify({
      context: {
        page: { uri: '/search' },
        user: { uuid: '24697167038-ld-d5-4w-1p-4qkfuai394xjgqmsbp7u-1714714385249' },
      },
      widget: {
        items: [
          {
            rfk_id: 'rfkid_6',
            search: {
              suggestion: [{ name: 'auto_named_suggester', max: 10 }],
              limit: 8,
              query: { keyphrase: keyphrase },
            },
            entity: 'content',
          },
        ],
      },
    }),
  };
  const result = await fetch(URL, options).then((response) => {
    if (!response.ok) {
      return res.status(400).json({ status: false, data: null });
    }
    return response.json();
  });

  return res.status(200).json({ status: true, data: result });

  // .then((data) => {
  //   // Here you can work with the JSON data
  //   console.log(data, '///data');
  // })
  // .catch((error) => {
  //   console.error('There was a problem with the fetch operation:', error);
  // });
}
