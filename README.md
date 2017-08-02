# node-api-container
A generic Node Express container application for creating APIs to be used in demonstrations. 

## APIs

### Hello World
- [Access Link](https://nodeapicontainer-gse00001975.apaas.em2.oraclecloud.com/)

### Level 0 Messaging
- [Documentation](http://docs.level0esbmessaging.apiary.io/#)
- [Access Link](https://nodeapicontainer-gse00001975.apaas.em2.oraclecloud.com/messaging)

### RESTful Example
- [Documentation](http://docs.level3restfulapi.apiary.io/#)
- [Access Link](https://nodeapicontainer-gse00001975.apaas.em2.oraclecloud.com/platforms/NSI/domains/somedomain.com/accounts/34159006?clientRequestId=2371264761-23891273) 

### Library
- [Documentation](http://docs.instructional.apiary.io/#)
- [Access Link](https://nodeapicontainer-gse00001975.apaas.em2.oraclecloud.com/) 

## Vendor Neutralilty
- Use the [Dockerfile](Dockerfile) to build it as a Docker container.

		$ docker build . -t node-api-container . 
 
- Alternatively, retrieve the container from DockerHub: [webleonard/node-api-container](https://hub.docker.com/r/wbleonard/node-api-container/)

- By the way, it's continuously built and published to DockerHub by [Wercker](https://app.wercker.com/) using this [wercker.yaml](wercker.yml) configuration file. Note, Wercker can also push images to other container registries, such as Google or Amazon.

- Deploy to Kubernetes:

	    $ kubectl create -f kube-pod.yaml
		$ kubectl create -f kube-service.yaml

- With this [manifest.json](manifest.json), it will deploy to [Oracle Application Container Cloud](https://cloud.oracle.com/en_US/application-container-cloud).

- Because of this [app.yaml](app.yaml) file, the code an also deploy to [Google App Engine](https://cloud.google.com/appengine).


