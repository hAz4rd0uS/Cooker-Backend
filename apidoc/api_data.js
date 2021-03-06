define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>It should be a string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/auth/login.js",
    "groupTitle": "Auth",
    "name": "PostAuthLogin"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "",
    "group": "Auth",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profileImageUrl",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>It should be a string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/auth/register.js",
    "groupTitle": "Auth",
    "name": "PostAuthRegister"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "group": "Index",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/Index.js",
    "groupTitle": "Index",
    "name": "Get"
  },
  {
    "type": "delete",
    "url": "/recipe/:id",
    "title": "",
    "group": "Recipe",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/recipe/-id.js",
    "groupTitle": "Recipe",
    "name": "DeleteRecipeId"
  },
  {
    "type": "get",
    "url": "/recipe/:id/suggestions",
    "title": "",
    "group": "Recipe",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/recipe/-id/suggestions.js",
    "groupTitle": "Recipe",
    "name": "GetRecipeIdSuggestions"
  },
  {
    "type": "get",
    "url": "/recipe/seek/:toFind",
    "title": "",
    "group": "Recipe",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/recipe/seek/-toFind.js",
    "groupTitle": "Recipe",
    "name": "GetRecipeSeekTofind"
  },
  {
    "type": "post",
    "url": "/recipe",
    "title": "",
    "group": "Recipe",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredients",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageUrl",
            "description": "<p>It should be a string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/recipe.js",
    "groupTitle": "Recipe",
    "name": "PostRecipe"
  },
  {
    "type": "post",
    "url": "/recipe/:id/suggestion",
    "title": "",
    "group": "Recipe",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ingredients",
            "description": "<p>It should be a string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/recipe/-id/suggestion.js",
    "groupTitle": "Recipe",
    "name": "PostRecipeIdSuggestion"
  },
  {
    "type": "delete",
    "url": "/suggestion/:id",
    "title": "",
    "group": "Suggestion",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/suggestion/-id.js",
    "groupTitle": "Suggestion",
    "name": "DeleteSuggestionId"
  },
  {
    "type": "get",
    "url": "/suggestion/:id/accept",
    "title": "",
    "group": "Suggestion",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "C:/Users/Pierrick/Cooker-Backend/node_modules/koa-smart/dist/ApiDocTmp/suggestion/-id/accept.js",
    "groupTitle": "Suggestion",
    "name": "GetSuggestionIdAccept"
  }
] });
