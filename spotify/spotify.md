#~Layout with Sample Tools
Generated using [DbSchema](https://dbschema.com)




### ~Layout with Sample Tools
![img](./~LayoutwithSampleTools.svg)



### Collection youtube.agrada 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * &#128270; &#11016; | id comentari| int UNSIGNED  |
| * | dataHora| timestamp  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk agrada | ON id|
| &#128270;  | id usario | ON id usario|
| &#128270;  | id comentari | ON id comentari|

##### Relationships
| | | |
|---|---|---|
|  | agrada ibfk 1 | ( id usario ) ref [youtube.usario](#usario) (id) |
|  | agrada ibfk 2 | ( id comentari ) ref [youtube.comentari](#comentari) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.canal 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | nom| string  |
| * | descripcio| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk canal | ON id|

##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.comentari 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | id video| int UNSIGNED  |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * | textComentari| string  |
| * | dataHora| timestamp  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk comentari | ON id|
| &#128270;  | id video | ON id video|
| &#128270;  | id usario | ON id usario|

##### Relationships
| | | |
|---|---|---|
|  | comentari ibfk 1 | ( id video ) ref [youtube.video](#video) (id) |
|  | comentari ibfk 2 | ( id usario ) ref [youtube.usario](#usario) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.creaciocanal 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * | dataHora| timestamp  |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * &#128270; &#11016; | id canal| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk creaciocanal | ON id|
| &#128270;  | id usario | ON id usario|
| &#128270;  | id canal | ON id canal|

##### Relationships
| | | |
|---|---|---|
|  | creaciocanal ibfk 1 | ( id usario ) ref [youtube.usario](#usario) (id) |
|  | creaciocanal ibfk 2 | ( id canal ) ref [youtube.canal](#canal) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.creaciopl 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * | dataHora| string  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk creaciopl | ON id|
| &#128270;  | id usario | ON id usario|

##### Relationships
| | | |
|---|---|---|
|  | creaciopl ibfk 1 | ( id usario ) ref [youtube.usario](#usario) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.estatplaylist 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED AUTO_INCREMENT |
| * | estado| enum('public','privat')  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk estatplaylist | ON id|

##### Relationships
| | | |
|---|---|---|
|  | estatplaylist ibfk 1 | ( id ) ref [youtube.playlist](#playlist) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.estatvideo 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id| int UNSIGNED AUTO_INCREMENT |
| * | estado| enum('public','ocult','privat')  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk estatvideo | ON id|

##### Relationships
| | | |
|---|---|---|
|  | estatvideo ibfk 1 | ( id ) ref [youtube.video](#video) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.etiqueta 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * &#128270; &#11016; | id video| int UNSIGNED  |
| * | nom| string  |
| * | dataHora| timestamp  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk etiqueta | ON id|
| &#128270;  | id usario | ON id usario|
| &#128270;  | id video | ON id video|

##### Relationships
| | | |
|---|---|---|
|  | etiqueta ibfk 1 | ( id usario ) ref [youtube.usario](#usario) (id) |
|  | etiqueta ibfk 2 | ( id video ) ref [youtube.video](#video) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.opinion 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * | dataHora| timestamp  |
| * | estado| enum('like','dislike')  |
| * &#128270; &#11016; | id video| int UNSIGNED  |
| * &#128270; &#11016; | id usario| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk opinion | ON id|
| &#128270;  | id video | ON id video|
| &#128270;  | id usario | ON id usario|

##### Relationships
| | | |
|---|---|---|
|  | opinion ibfk 1 | ( id video ) ref [youtube.video](#video) (id) |
|  | opinion ibfk 2 | ( id usario ) ref [youtube.usario](#usario) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.playlist 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * &#128270; &#11016; | id creacio pl| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk playlist | ON id|
| &#128270;  | id creacio pl | ON id creacio pl|

##### Relationships
| | | |
|---|---|---|
|  | playlist ibfk 1 | ( id creacio pl ) ref [youtube.creaciopl](#creaciopl) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.subscripcio 
| | | |
|---|---|---|
| * &#128273;  | id| int UNSIGNED AUTO_INCREMENT |
| * | dataSubscripcio| date  |
| * &#128270; &#11016; | id usario| int UNSIGNED  |
| * &#128270; &#11016; | id canal| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk subscripcio | ON id|
| &#128270;  | id usario | ON id usario|
| &#128270;  | id canal | ON id canal|

##### Relationships
| | | |
|---|---|---|
|  | subscripcio ibfk 1 | ( id usario ) ref [youtube.usario](#usario) (id) |
|  | subscripcio ibfk 2 | ( id canal ) ref [youtube.canal](#canal) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.usario 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | email| string  |
| * | PASSWORD| string  |
| * | nomUsario| string  |
| * | dataNaxement| date  |
| * | sexe| string  |
| * | pais| string  |
| * | codiPostal| int  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk usario | ON id|

##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.video 
| | | |
|---|---|---|
| * &#128273;  &#11019; | id| int UNSIGNED AUTO_INCREMENT |
| * | descripcio| string  |
| * | grandaria| int UNSIGNED  |
| * | nom| string  |
| * | durada| int UNSIGNED  |
| * | thumbnail| string  |
| * | reproduccions| int  |
|  | likes| int  |
|  | dislikes| int  |
| * | id etiqueta| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk video | ON id|

##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 


### Collection youtube.videoplaylist 
| | | |
|---|---|---|
| * &#128273;  &#11016; | id video| int UNSIGNED  |
| * &#128273;  &#11016; | id playlist| int UNSIGNED  |


##### Indexes 
| | | |
|---|---|---|
| &#128273;  | pk videoplaylist | ON id video, id playlist|
| &#128270;  | id playlist | ON id playlist|

##### Relationships
| | | |
|---|---|---|
|  | videoplaylist ibfk 1 | ( id video ) ref [youtube.video](#video) (id) |
|  | videoplaylist ibfk 2 | ( id playlist ) ref [youtube.playlist](#playlist) (id) |


##### Options 
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4\_general\_ci 



