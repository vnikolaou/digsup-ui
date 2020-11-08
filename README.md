# DigsUp-UI

## Install locally
1. Clone from repo:

    ```git clone https://github.com/vnikolaou/digsup-ui.git``` 
2. Go to project's root folder:

    ```cd digsup-ui```
3. Run:  

    ```yarn install``` 

## Start the app in dev mode
1. Go to project's root folder:
    cd <root_folder>
2. Run:  
    yarn start

## Compile the app for prod mode
1. Go to project's root folder:
    cd <root_folder>
2. Run:  
    yarn build

## Run the app in prod mode (Option 1 - via http-server)
1. Just for experimenting with the app in this mode,
    install the http-server module by typing:

    sudo npm install -g http-server
2. Go to project's dist folder:
    cd <root_folder>/dist
3. Run:
    http-server
4. Open a browser and visit the address:
    http://localhost:8080 


## Run the app in prod mode (Option 2 - as Docker container)
1. Go to project's dist folder:
    cd <root_folder>/dist
2. Build the image:
    sudo docker build --rm -f Dockerfile -t digsup-ui:latest .
3. Run a container from the new image:
    sudo docker run --rm -d -p 8080:80 digsup-ui:latest
3. Open a browser and visit the address:
    http://localhost:8080 

