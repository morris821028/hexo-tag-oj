## Support OJ ##

* [SCARKY: online challenge on your site!](http://www.scarky.com/)

* UVa Online Judge

* Github repo

* Hex image gallery

* Works gallery

one page one use

## Introduction

[![NPM version](https://badge.fury.io/js/hexo-tag-oj.svg)](http://badge.fury.io/js/hexo-tag-oj)

This is a [hexo](https://github.com/tommy351/hexo)
tag plugin which allows you to add ACM online judge problem.

## Installation

To install, run the following command in the root directory of hexo:
```
npm install hexo-tag-oj --save
```

And add this plugin in your ``_config.yml``.

```
plugins:
  - hexo-tag-oj
```

## Example 

```
{% oj scarky P28AP0HS %}
```

```
{% oj uva 100 46705 %}
```

```
{% oj github morris821028 hexo-tag-oj %}
```

```
{% ojblock hex %}
{
  "album" : [
      {
        "cover": {"title": "<p>Stephanie Dola</p>", "class": "hex-1", "img" : "http://i.imgur.com/xaykK2s.jpg"},
        "photo": [
          {"imgur": "http://i.imgur.com/yIoACHc.gif"},
          {"imgur": "http://i.imgur.com/uINck6K.gif"},
          {"imgur": "http://i.imgur.com/zOZJEex.gif"}
        ]
      },
      {
        "cover": {"title": "<p>Moe Moe</p>", "class": "hex-1", "img": "http://i.imgur.com/SOjLn66.jpg"},
        "photo": [
          {"imgur": "http://i.imgur.com/YSmWA3g.gif"},
          {"imgur": "http://i.imgur.com/6G4BDxU.gif"},
          {"imgur": "http://i.imgur.com/kuH4XVL.gif"}
        ]
      }
  ]
}
{% endojblock %}
```

```
{% ojblock works %}
{
  "content" : [

    { "title" : "School", 
      "works" : [
        {
          "title": "Chat Room Application",
          "cover": "http://i.imgur.com/oUO30I6.jpg",
          "description": "Simple Chat Room with online game<br/> Socket programming practice (Java)",
          "download": ["https://github.com/morris821028/hw-ChatRoom"],
          "demo": [],
          "video": ["https://www.youtube.com/watch?v=7ExCn1ipKeg"]
        },
        {
          "title": "Fuzzy System",
          "cover": "http://i.imgur.com/C44Hbrg.png",
          "description": "Car simulation implements PSO, GA, and fuzzy system (Java)",
          "download": ["https://github.com/morris821028/hw-FuzzySystem"],
          "demo": [],
          "video": ["https://www.youtube.com/watch?v=kt2mu679elU"]
        }
       	]
    },
    {
      "title" : "ACMer",
      "works" : [
          {
            "title": "UVa Online Judge",
            "cover": "http://i.imgur.com/y0Y2VRo.png",
            "description": "Solved 2800+ problems <br/> Username: morris821028",
            "link": ["http://uhunt.felix-halim.net/id/46705"],
            "download": ["https://github.com/morris821028/UVa"]
          }
      ]
    }
  ]
}
{% endojblock %}

```