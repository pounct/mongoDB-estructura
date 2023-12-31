/*CREATE DATABASE 'pizzeria'*/

use('pizzeria');db.createCollection('client',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "cognoms",
    "adreca",
    "codiPostal",
    "telefon"
  ],
  "properties": {
    "codiPostal": {
      "bsonType": "int"
    },
    "cognoms": {
      "bsonType": "string"
    },
    "telefon": {
      "bsonType": "string"
    },
    "adreca": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.getCollection('client').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('producte',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "descripcio",
    "imatge",
    "preu",
    "tipo"
  ],
  "properties": {
    "tipo": {
      "enum": [
        "hamburguesa",
        "pizza",
        "beguda"
      ]
    },
    "descripcio": {
      "bsonType": "string"
    },
    "preu": {
      "bsonType": "double"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "imatge": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.getCollection('producte').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('provincia',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.getCollection('provincia').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('beguda',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "categoria": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('beguda').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('hamburguesa',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "categoria": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('hamburguesa').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('localitat',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "provinciaId",
    "nom"
  ],
  "properties": {
    "provinciaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.getCollection('localitat').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('localitat').createIndex( { 'provinciaId':1 } , { name:'provinciaId'} );

use('pizzeria');db.createCollection('pizza',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "categoria": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('pizza').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('botiga',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "adreca",
    "codiPostal",
    "localitatId"
  ],
  "properties": {
    "codiPostal": {
      "bsonType": "int"
    },
    "adreca": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "localitatId": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('botiga').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('botiga').createIndex( { 'localitatId':1 } , { name:'localitatId'} );

use('pizzeria');db.createCollection('comanda',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "clientId",
    "botigaId",
    "preuTotal"
  ],
  "properties": {
    "clientId": {
      "bsonType": "int"
    },
    "preuTotal": {
      "bsonType": "double"
    },
    "botigaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

use('pizzeria');db.getCollection('comanda').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('comanda').createIndex( { 'clientId':1 } , { name:'clientId'} );

use('pizzeria');db.getCollection('comanda').createIndex( { 'botigaId':1 } , { name:'botigaId'} );

use('pizzeria');db.createCollection('empleat',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "cognoms",
    "nif",
    "telefon",
    "botigaId",
    "tipo"
  ],
  "properties": {
    "tipo": {
      "enum": [
        "cuiner",
        "repartidor"
      ]
    },
    "cognoms": {
      "bsonType": "string"
    },
    "telefon": {
      "bsonType": "string"
    },
    "botigaId": {
      "bsonType": "int"
    },
    "nif": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria');db.getCollection('empleat').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('empleat').createIndex( { 'botigaId':1 } , { name:'botigaId'} );

use('pizzeria');db.createCollection('liniacomanda',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "comandaId",
    "producteId",
    "quantitat"
  ],
  "properties": {
    "comandaId": {
      "bsonType": "int"
    },
    "quantitat": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "producteId": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('liniacomanda').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('liniacomanda').createIndex( { 'comandaId':1 } , { name:'comandaId'} );

use('pizzeria');db.getCollection('liniacomanda').createIndex( { 'producteId':1 } , { name:'producteId'} );

use('pizzeria');db.createCollection('repartidor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "funcio": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('repartidor').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('cuiner',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id"
  ],
  "properties": {
    "funcio": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('cuiner').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.createCollection('lliurament',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "comandaId",
    "repartidorId"
  ],
  "properties": {
    "comandaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "repartidorId": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria');db.getCollection('lliurament').createIndex( { 'id':1 } , { name:'ind'} );

use('pizzeria');db.getCollection('lliurament').createIndex( { 'comandaId':1 } , { name:'comandaId'} );

use('pizzeria');db.getCollection('lliurament').createIndex( { 'repartidorId':1 } , { name:'repartidorId'} );
