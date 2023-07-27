CREATE DATABASE 'optica'
use('optica');

db.createCollection('adreca',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "carrer",
    "numero",
    "pis",
    "porta",
    "ciutat",
    "codiPostal",
    "pais"
  ],
  "properties": {
    "codiPostal": {
      "bsonType": "int"
    },
    "numero": {
      "bsonType": "int"
    },
    "ciutat": {
      "bsonType": "string"
    },
    "carrer": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "pis": {
      "bsonType": "int"
    },
    "porta": {
      "bsonType": "int"
    },
    "pais": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('adreca').createIndex( { 'id':1 } , { name:'ind'} );

db.createCollection('client',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "adrecaId",
    "telefon",
    "email",
    "dataRegistre"
  ],
  "properties": {
    "telefon": {
      "bsonType": "string"
    },
    "adrecaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataRegistre": {
      "bsonType": "date"
    },
    "nom": {
      "bsonType": "string"
    },
    "email": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('client').createIndex( { 'id':1 } , { name:'ind'} );

db.getCollection('client').createIndex( { 'adrecaId':1 } , { name:'adrecaId'} );

db.createCollection('empleat',{ validator: { $jsonSchema: {
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

db.getCollection('empleat').createIndex( { 'id':1 } , { name:'ind'} );

db.createCollection('marca',{ validator: { $jsonSchema: {
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

db.getCollection('marca').createIndex( { 'id':1 } , { name:'ind'} );

db.createCollection('proveidor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "adrecaId",
    "telefon",
    "fax"
  ],
  "properties": {
    "telefon": {
      "bsonType": "string"
    },
    "adrecaId": {
      "bsonType": "int"
    },
    "nif": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "fax": {
      "bsonType": "string"
    },
    "nom": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('proveidor').createIndex( { 'nif':1 }, { name:'nif',unique:true } );

db.getCollection('proveidor').createIndex( { 'id':1 } , { name:'ind'} );

db.getCollection('proveidor').createIndex( { 'adrecaId':1 } , { name:'adrecaId'} );

db.createCollection('recomanat',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "clientId",
    "nom"
  ],
  "properties": {
    "clientId": {
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

db.getCollection('recomanat').createIndex( { 'nom':1 } , { name:'ind'} );

db.getCollection('recomanat').createIndex( { 'clientId':1 } , { name:'clientId'} );

db.createCollection('venta',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataV",
    "clientId",
    "empleatId",
    "preuTotal"
  ],
  "properties": {
    "dataV": {
      "bsonType": "date"
    },
    "clientId": {
      "bsonType": "int"
    },
    "preuTotal": {
      "bsonType": "double"
    },
    "id": {
      "bsonType": "int"
    },
    "empleatId": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('venta').createIndex( { 'id':1 } , { name:'ind'} );

db.getCollection('venta').createIndex( { 'clientId':1 } , { name:'clientId'} );

db.getCollection('venta').createIndex( { 'empleatId':1 } , { name:'empleatId'} );

db.createCollection('compra',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataC",
    "preuTotal",
    "poveidorId"
  ],
  "properties": {
    "preuTotal": {
      "bsonType": "double"
    },
    "dataC": {
      "bsonType": "date"
    },
    "poveidorId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('compra').createIndex( { 'id':1 } , { name:'ind'} );

db.getCollection('compra').createIndex( { 'poveidorId':1 } , { name:'poveidorId'} );

db.createCollection('marcaprovridor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "proveidorid",
    "marcaId"
  ],
  "properties": {
    "proveidorid": {
      "bsonType": "int"
    },
    "marcaId": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('marcaprovridor').createIndex( { 'marcaId':1 } , { name:'ind'} );

db.getCollection('marcaprovridor').createIndex( { 'proveidorid':1 } , { name:'proveidorid'} );

db.createCollection('ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "graduacioVidres",
    "tipusMuntura",
    "colorMuntura",
    "ColorVidre",
    "preu",
    "marcaId",
    "compraId"
  ],
  "properties": {
    "graduacioVidres": {
      "bsonType": "int"
    },
    "marcaId": {
      "bsonType": "int"
    },
    "colorMuntura": {
      "bsonType": "string"
    },
    "preu": {
      "bsonType": "double"
    },
    "tipusMuntura": {
      "bsonType": "string"
    },
    "ventaId": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "ColorVidre": {
      "bsonType": "string"
    },
    "compraId": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('ulleres').createIndex( { 'id':1 } , { name:'ind'} );

db.getCollection('ulleres').createIndex( { 'compraId':1 } , { name:'compraId'} );

db.getCollection('ulleres').createIndex( { 'marcaId':1 } , { name:'marcaId'} );

db.getCollection('ulleres').createIndex( { 'ventaId':1 } , { name:'ventaId'} );
