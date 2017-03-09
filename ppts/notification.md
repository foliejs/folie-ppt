title: btcc notification service
speaker: JACK SUN
url: https://github.com/BTCChina/notification-service
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: light
usemathjax: yes

[slide]
# notification service
### A stable and high performance service

[slide]
# Key Words
----
* Producer {:&.zoomIn}
  * BTCC Vcode
  * User Service
  * Admin 

* Consumer
    - BTCC Queue Service
        + node-kue
        + redis
        + cluster


[slide]
# Producer Basic Features 
----

  - Delayed jobs
  - Job TTL
  - Job Attempts
  - Job specific logging
  - UI progress indication
  - Optional retries with backoff
  - [Rich integrated UI](127.0.0.1:3050)




[slide]
# Waiting integration
----
  - Full-text search capabilities
  - Infinite scrolling
  - Graceful workers shutdown




[slide]
# Consumer Basic Features
----
    
    * Declare Queue
    * Process Queue
    * Process Job
    * Error Handling
    * Error Handling
    * [RESTful JSON API](https://github.com/BTCChina/notification-service/wiki/REST-API)
    * [Client SDK](https://github.com/BTCChina/notification-service/wiki/Client-SDK)

[slide]

# Display Queue Service


[slide]

# Thank You  
