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
Practically the application runs inside a docker container as a set of static pages (the result of building the React files) inside a Nginx server in port 8080.

The design sets the basis for the communication with the back-end to rely on Nginx's proxy capabilities, ie. allows to talk with another service or container in a seperate process. In this scenarion, the IP address of the back-end server in a production environment would be the IP of an internal load balancer which would delegate all the requests to one or more instances of the back-end application (REST APIs) inside the cluster. 
At the moment the front-end access directly the back-end server via HTTP for reasons that have to do with the networking capabilities of the individual docker containers. Such issues would be handled normally by a tool like Kubernetes.

Finally, due to this design, the front-end application could be scaled properly (eg. with Kubernettes) and in combination with the back-end instances would compose a functional cluster offering high availability, resiliance, failover and other valuable QoS capabilities.

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
1. **IMPORTANT:** Make sure that you have installed and run the digsup-server application:

2. Go to project's dist folder:

    ```cd digsup-ui```
3. Build the image:

    ```sudo docker build --rm -f Dockerfile -t digsup-ui:latest .```
4. Run a container from the new image:

    ```sudo docker run --rm -d -p 8080:80 digsup-ui:latest```
5. Open a browser and visit the address:
    ```http://localhost:8080```
    
    
## Run e2e tests 
1. Go to project's root folder:

    ```cd digsup-ui```
2. Start the app as docker container (as described above)   
3. Run:  

    ```yarn test-e2e```
4. Wait until all the tests run on Chrome and review the results    
