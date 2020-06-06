# microCMS-client
This is a microCMS client for javascript and typeScript.
The microCMS is made in Japan. Plus, it's very cool.
[microCMS can be found here.](https://microcms.io/)

## install
npm
```shell
npm install microcms-client
```
yarn
```shell
yarn add microcms-client
```

## How to use

### Creating Clients
```javascript
import { createClient } from 'microcms-client/lib/client';

// create client.
const client = createClient({
  baseUrl: 'https://yourname.microcms.io/api/v1/',
  contentType: 'application/json; charset=utf-8',
  X_API_KEY: 'your_api_key',
});
```

### Getting a single piece of content.
```javascript
const path = 'contents'

// Accessed  'https://yourname.microcms.io/api/v1/contents/${contentId}'
export const getContent = (contentId: string) => {
  return client.getContent<Content>({ path: path, contentId: contentId });
};

```
### Get a collection of content.
```javascript
const path = 'contents'

// Accessed  'https://yourname.microcms.io/api/v1/contents/'
export const getContents = () => {
  return client.getContents<Content>({ path: path });
};
```
### When issuing a query conditionally.

```javascript
const path = 'contents'

// Accessed  'https://yourname.microcms.io/api/v1/contents/filter=tags[contains]${tagContentId}'
export const getContentsByTagsContentId = (tagContentId: string) => {
  // Creating a filter.
  const filters: Filters[] = [
    {
      key: 'tags',
      filterType: 'contains',
      value: tagContentId,
    },
  ];

  const param: GetContentsParams = {
    path,
    filters,
  };

  return client.getContents<Content>(param);
};

```
