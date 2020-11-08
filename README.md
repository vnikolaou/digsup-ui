# DigsUp-UI

The project implements the sample **Signup** mockup page .

It uses the following tools:

- Node.js (v13.12.x)
- Yarn (v1.22.x)
- React (v16.13.x)
- Jest (v26.6.x)
- Puppeteer (v5.4.x)
- Docker (v19.03.x)
- Nginx (v1.15.x)

The application implements ONLY the front-end based on React.js framework. I chose to separate the front-end from back-end for scaling purposes in the future.
Practically the application runs inside a docker container as a set of static pages (the result of building the React files) inside an Nginx server in port 8080.

The communication with the back-end relies on Nginx's proxy capabilities. From the pages perspective any access to the back-end still targets specific URLs inside the code, but these URLs are relative to the current context path. All these requests pass through the Nginx which takes care to forward the requests to a hardcoded <ip>:<port> scheme that target the back end application. 
    
Practically the IP address of the back-end server in a production environment would be the IP of an internal load balancer which would delegate all the requests to one or more instances of the back-end application (REST APIs) inside the cluster. These instances are docker containers as well.

Similarly, the front-end application can be scaled properly (eg. with Kubernettes) and in combination with the back-end instances would compose a functional cluster offering high availability, resiliance, failover and other valuable QoS capabilities.

## Install locally
1. Clone from repo:

    ```git clone https://github.com/vnikolaou/digsup-ui.git``` 
2. Go to project's root folder:

    ```cd digsup-ui```
3. Run:  

    ```yarn install``` 

## Start the app in dev mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. Run:  

    ```yarn start```    

## Run unit tests in dev mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. For unit tests, run:  

    ```yarn test``` 


## Compile the app for prod mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. Run:  

    ```yarn build```


## Run the app in prod mode (as Docker container)
1. Go to project's dist folder:

    ```cd digsup-ui```
2. Build the image:

    ```sudo docker build --rm -f Dockerfile -t digsup-ui:latest .```
3. Run a container from the new image:

    ```sudo docker run --rm -d -p 8080:80 digsup-ui:latest```
3. Open a browser and visit the address:
    ```http://localhost:8080```
    
    
## Run e2e tests 
1. Go to project's root folder:

    ```cd digsup-ui```
2. Start the app as docker container (as described above)   
3. Run:  

    ```yarn test-e2e```
4. Wait until all the tests run on Chrome and review the results    
