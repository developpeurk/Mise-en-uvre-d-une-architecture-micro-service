# Mise-oeurvre-d-une-architecture-micro-service - Yassine LAMBARKI

- [x] Créer le micro service Customer-service 
- [x] Créer l’entité Customer 
- [x] Créer l’interface CustomerRepository basée sur Spring Data 
- [x] Déployer l’API Restful du micro-service en utilisant Spring Data Rest 
- [x] Tester le Micro service
- [x] Créer le micro service Inventory-service 
- [x] Créer l’entité Product 
- [x] Créer l’interface ProductRepository basée sur Spring Data 
- [x] Déployer l’API Restful du micro-service en utilisant Spring Data Rest 
- [x] Tester le Micro service
- [x] Créer la Gateway service en utilisant Spring Cloud Gateway
- [x] Tester la Service proxy en utilisant une configuration Statique basée
   sur le fichier application.yml
- [x] Tester la Service proxy en utilisant une configuration Statique basée
   une configuration Java
- [x] Créer l’annuaire Registry Service basé sur NetFlix Eureka Server
- [x] Tester le proxy en utilisant une configuration dynamique de Gestion des
   routes vers les micro services enregistrés dans l’annuaire Eureka Server
- [x] Créer Le service Billing-Service en utilisant Open Feign pour
   communiquer avec les services Customer-service et Inventory-service
- [x]  Créer un client Angular qui permet d’afficher une facture

### products
````````
http://localhost:8888/PRODUCT-SERVICE/products
````````

![products](/images/products.jpg)


### Customers
````````
http://localhost:8888/CUSTOMER-SERVICE/customers
````````

![products](/images/customers.jpg)


### Eureka
````````
http://localhost:8761/
````````

![products](/images/eureka.jpg)


### Billing-service
````````
http://localhost:8888/BILLING-SERVICE/fullBill/1
````````

![billing-service](/images/BILLING-SERVICE.jpg)



### Display invoice - Angular 👉 [link](https://github.com/developpeurk/Mise-en-uvre-d-une-architecture-micro-service/tree/Angular)
````````
http://localhost:4200/
````````

![displayInvoice](/images/invoice%20.jpg)



