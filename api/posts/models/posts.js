const slugify = require("slugify");

("use strict");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {

  lifecycles: {
    //Create Slug Based on Title if slug exist then skip
    async beforeCreate(data) {
      if(!data.slug && data.Title){
        data.slug = slugify(data.Title, { lower: true });
      }else{
        data.slug = data.slug
      }
    },
    async beforeUpdate(params, data) {
      if(!data.slug && data.Title){
        data.slug = slugify(data.Title, { lower: true });
      }else{
        data.slug = data.slug
      }
    },
    //SLug Operation Ends
  },
};
