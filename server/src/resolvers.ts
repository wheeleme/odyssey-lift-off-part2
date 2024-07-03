export const resolvers = {
    Query: {
      // get all tracks, will be used to populate the homepage grid of our web client
      tracksForHome: (_, __, { dataSources }) => {},
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
        return dataSources.trackAPI.getAuthor(authorId);
        },
      },
  };
