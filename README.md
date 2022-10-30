# Mise-oeurvre-d-une-architecture-micro-service - Yassine LAMBARKI

- [*] Créer le micro service Customer-service • Créer l’entité Customer • Créer l’interface CustomerRepository basée sur Spring Data • Déployer l’API Restful du micro-service en utilisant Spring Data Rest • Tester le Micro service
- [*] Créer le micro service Inventory-service • Créer l’entité Product • Créer l’interface ProductRepository basée sur Spring Data • Déployer l’API Restful du micro-service en utilisant Spring Data Rest • Tester le Micro service
- [*] Créer la Gateway service en utilisant Spring Cloud Gateway
- [*] Tester la Service proxy en utilisant une configuration Statique basée
   sur le fichier application.yml
- [*] Tester la Service proxy en utilisant une configuration Statique basée
   une configuration Java
- [*] Créer l’annuaire Registry Service basé sur NetFlix Eureka Server
- [*] Tester le proxy en utilisant une configuration dynamique de Gestion des
   routes vers les micro services enregistrés dans l’annuaire Eureka Server
- [*] Créer Le service Billing-Service en utilisant Open Feign pour
   communiquer avec les services Customer-service et Inventory-service
- [-] Créer un client Angular qui permet d’afficher une facture

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


