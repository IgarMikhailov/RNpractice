import { TreeType } from '../types/tree'

export const DATA:TreeType = {
    children: [
      {
        id: '1',
        title: 'item 1',
        children: [
          {
            id: '11',
            title: 'item 1-1',
          },
          {
             id: '12',
             title: 'item 1-2',
          },
        ]
      },
      {
        id: '2',
        title: 'item 2',
        children: [
          {
            id: '21',
            title: 'item 2-1',
            children: [
              {
                id: '211',
                title: 'item 2-1-1',
              },
              {
                  id: '212',
                  title: 'item 2-1-2',
                }
            ],
          },
          {
             id: '22',
             title: 'item 2-2',
             children: [
              {
                id: '221',
                title: 'item 2-2-1',
              },
              {
                  id: '222',
                  title: 'item 2-2-2',
                  children: [
                      {
                        id: '2221',
                        title: 'item 2-2-2-1',
                      },
                      {
                          id: '2222',
                          title: 'item 2-2-2-2',
                      },
                    ],
              }
            ]
          },
        ]
      },
      {
        id: '3',
        title: 'item 3',
        children: [
          {
            id: '31',
            title: 'item 3-1',
          },
          {
             id: '32',
             title: 'item 3-2',
          },
        ]
      },
      {
        id: '4',
        title: 'item 4',
        children: [
          {
            id: '41',
            title: 'item 4-1',
          },
          {
             id: '42',
             title: 'item 4-2',
          },
        ]
      },
      {
        id: '5',
        title: 'item 5',
        children: [
          {
            id: '51',
            title: 'item 5-1',
          },
          {
             id: '52',
             title: 'item 5-2',
          },
        ]
      },
    ]
  }
