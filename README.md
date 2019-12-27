
*looking for a demo accordion ? Go here --> [https://danywalls.github.io/edgar-accordion/](https://danywalls.github.io/edgar-accordion/)*  
  
---  
# edgar-accordion
  
This is a project using [WebComponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components) . You can see full source code at https://github.com/danywalls/edgar-accordion.  
  
*Note that you will need to have [Node.js](https://nodejs.org) installed.*  
   
## Get started  
  
Install the dependencies.
  
```bash  
cd edgar-accordion
npm install  
```  
  
I'm using [Parcel](https://parceljs.org) as bundler, it allow hotreload and easy way to compiles es6 and sass files:   

The support for *async* and *await* is required .babelrc "@babel/plugin-transform-runtime".
  
```bash  
npm run dev  
```  

Navigate to [localhost:1234](http://localhost:1234. You should edgar accordion running. 
  
## Building and running in production mode  
  
To create an optimised version of the app:  
  
```bash  
npm run prod  
```  
  
The dist directory will contain all files related with the app, ready to be deployed.  
  