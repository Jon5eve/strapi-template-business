module.exports = function(scope) {
  return {
    package: {
      dependencies: {
        'strapi-plugin-graphql': scope.strapiVersion,
        'strapi-plugin-i18n': scope.strapiVersion,
        'strapi-upload-cloudinary': 'latest',
        'strapi-provider-email-mailgun': 'latest',
      },
    },
  };
};
