Package.describe({
  name: `sidebar2020`,
});

// const version = '@';

Package.onUse((api) => {
  api.use([
    `fourseven:scss@4.12.0`,

    // vulcan core
    `vulcan:core`,

    // vulcan packages
    `vulcan:debug`,
    `vulcan:ui-bootstrap`,
    `vulcan:email`,
    `vulcan:forms`,
    `vulcan:accounts`,
    `vulcan:payments`,
    `vulcan:admin`,

    `vulcan:events`,
    `vulcan:events-internal`,
    `vulcan:events-ga`,
    `vulcan:errors-sentry`,
  ]);

  api.addFiles([`lib/stylesheets/main.scss`], [`client`]);

  api.addAssets(
    [
      `lib/server/emails/common/wrapper2.handlebars`,
      `lib/server/emails/posts/postApproved2.handlebars`,
      `lib/server/emails/newsletter/newsletter2.handlebars`,
      `lib/server/emails/sponsored/sponsoredPaid2.handlebars`,
      `lib/server/emails/webring/webringSiteApproved.handlebars`,
    ],
    [`server`]
  );

  api.mainModule(`lib/server/main.js`, `server`);
  api.mainModule(`lib/client/main.js`, `client`);
});
