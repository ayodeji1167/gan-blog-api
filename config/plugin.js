module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: 'djn1shwej',
          api_key: '752412287567136',
          api_secret: 'aFHo5iuYx_Nu329Pg9O2__a3wWo',
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },

  });
  