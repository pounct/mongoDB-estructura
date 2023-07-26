#~Layout with Sample Tools
Generated using [DbSchema](https://dbschema.com)




### ~Layout with Sample Tools
![img](./~LayoutwithSampleTools.svg)



### Collection pizzeria.beguda 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED  |
|  | categoria| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk beguda | ON id|
| &#128270;  | ind | ON id|

##### Relationships
| | | |
|---|---|---|
|  | beguda ibfk 1 | ( id ) ref [pizzeria.producte](#producte) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.botiga 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | adreca| string  |
| * | codiPostal| int  |
| * &#128270; &#11016; | localitatId| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk botiga | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | localitatId | ON localitatId|

##### Relationships
| | | |
|---|---|---|
|  | botiga ibfk 1 | ( localitatId ) ref [pizzeria.localitat](#localitat) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.client 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |
| * | cognoms| string  |
| * | adreca| string  |
| * | codiPostal| int  |
| * | telefon| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk client | ON id|
| &#128270;  | ind | ON id|

##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.comanda 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | dataHora| timestamp  |
| * &#128270; &#11016; | clientId| int UNSIGNED  |
| * &#128270; &#11016; | botigaId| int UNSIGNED  |
| * | preuTotal| double  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk comanda | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | clientId | ON clientId|
| &#128270;  | botigaId | ON botigaId|

##### Relationships
| | | |
|---|---|---|
|  | comanda ibfk 1 | ( clientId ) ref [pizzeria.client](#client) (id) |
|  | comanda ibfk 2 | ( botigaId ) ref [pizzeria.botiga](#botiga) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=338 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.cuiner 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED AUTO_INCREMENT |
|  | funcio| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk cuiner | ON id|
| &#128270;  | ind | ON id|

##### Relationships
| | | |
|---|---|---|
|  | cuiner ibfk 1 | ( id ) ref [pizzeria.empleat](#empleat) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=478 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.empleat 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |
| * | cognoms| string  |
| * | nif| string  |
| * | telefon| string  |
| * &#128270; &#11016; | botigaId| int UNSIGNED  |
| * | tipo| enum('cuiner','repartidor')  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk empleat | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | botigaId | ON botigaId|

##### Relationships
| | | |
|---|---|---|
|  | empleat ibfk 1 | ( botigaId ) ref [pizzeria.botiga](#botiga) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=478 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.hamburguesa 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED  |
|  | categoria| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk hamburguesa | ON id|
| &#128270;  | ind | ON id|

##### Relationships
| | | |
|---|---|---|
|  | hamburguesa ibfk 1 | ( id ) ref [pizzeria.producte](#producte) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.liniacomanda 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | comandaId| int UNSIGNED  |
| * &#128270; &#11016; | producteId| int UNSIGNED  |
| * | quantitat| int  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk liniacomanda | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | comandaId | ON comandaId|
| &#128270;  | producteId | ON producteId|

##### Relationships
| | | |
|---|---|---|
|  | liniacomanda ibfk 1 | ( comandaId ) ref [pizzeria.comanda](#comanda) (id) |
|  | liniacomanda ibfk 2 | ( producteId ) ref [pizzeria.producte](#producte) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=506 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.lliurament 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |
| * &#128270; &#11016; | comandaId| int UNSIGNED  |
| * &#128270; &#11016; | repartidorId| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk lliurament | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | comandaId | ON comandaId|
| &#128270;  | repartidorId | ON repartidorId|

##### Relationships
| | | |
|---|---|---|
|  | lliurament ibfk 1 | ( comandaId ) ref [pizzeria.comanda](#comanda) (id) |
|  | lliurament ibfk 2 | ( repartidorId ) ref [pizzeria.repartidor](#repartidor) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=1073 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.localitat 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | provinciaId| int UNSIGNED  |
| * | nom| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk localitat | ON id|
| &#128270;  | ind | ON id|
| &#128270;  | provinciaId | ON provinciaId|

##### Relationships
| | | |
|---|---|---|
|  | localitat ibfk 1 | ( provinciaId ) ref [pizzeria.provincia](#provincia) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=217 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.pizza 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED  |
|  | categoria| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk pizza | ON id|
| &#128270;  | ind | ON id|

##### Relationships
| | | |
|---|---|---|
|  | pizza ibfk 1 | ( id ) ref [pizzeria.producte](#producte) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.producte 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |
| * | descripcio| string  |
| * | imatge| string  |
| * | preu| double  |
| * | tipo| enum('hamburguesa','pizza','beguda')  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk producte | ON id|
| &#128270;  | ind | ON id|

##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.provincia 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk provincia | ON id|
| &#128270;  | ind | ON id|

##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection pizzeria.repartidor 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED AUTO_INCREMENT |
|  | funcio| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk repartidor | ON id|
| &#128270;  | ind | ON id|

##### Relationships
| | | |
|---|---|---|
|  | repartidor ibfk 1 | ( id ) ref [pizzeria.empleat](#empleat) (id) |


##### Options 
ENGINE=InnoDB AUTO\_INCREMENT=478 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 



