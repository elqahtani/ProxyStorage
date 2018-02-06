# ProxyStorage

API Backend that displays proxies server from many proxy providers

Site   | URL
-------|----
Web    | https://proxy.rm-rf.web.id
API    | https://proxy.rm-rf.web.id/api/
--------------------------------------------------------------------------------

## Example output data : 

```js
{
  "message": "ok",
  "data": {
    "proxies": [
      {
        "port": 40967,
        "country_code": "US",
        "type": "anonymous",
        "speed": "fast",
        "ip": "x.x.x.x",
        "protocol": "http"
      }
    ]
  }
}
```

## ToDo

- [ ] Get All Proxies Data
- [x] Get proxy data by country
- [x] Get proxy data by protocol
- [x] Get proxy data by type
