/*CREATE DATABASE 'youtube'*/
use('youtube');

db.createCollection('canal',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "nom",
    "descripcio"
  ],
  "properties": {
    "descripcio": {
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

db.createCollection('usario',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "email",
    "PASSWORD",
    "nomUsario",
    "dataNaxement",
    "sexe",
    "pais",
    "codiPostal"
  ],
  "properties": {
    "codiPostal": {
      "bsonType": "int"
    },
    "PASSWORD": {
      "bsonType": "string"
    },
    "dataNaxement": {
      "bsonType": "date"
    },
    "sexe": {
      "bsonType": "string"
    },
    "id": {
      "bsonType": "int"
    },
    "email": {
      "bsonType": "string"
    },
    "nomUsario": {
      "bsonType": "string"
    },
    "pais": {
      "bsonType": "string"
    }
  }
} }});

db.createCollection('video',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "descripcio",
    "grandaria",
    "nom",
    "durada",
    "thumbnail",
    "reproduccions",
    "id etiqueta"
  ],
  "properties": {
    "thumbnail": {
      "bsonType": "string"
    },
    "descripcio": {
      "bsonType": "string"
    },
    "reproduccions": {
      "bsonType": "int"
    },
    "durada": {
      "bsonType": "int"
    },
    "id etiqueta": {
      "bsonType": "int"
    },
    "grandaria": {
      "bsonType": "int"
    },
    "dislikes": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "likes": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('comentari',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id video",
    "id usario",
    "textComentari",
    "dataHora"
  ],
  "properties": {
    "textComentari": {
      "bsonType": "string"
    },
    "id video": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "id usario": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

db.getCollection('comentari').createIndex( { 'id video':1 } , { name:'"id video"'} );

db.getCollection('comentari').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.createCollection('creaciocanal',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "id usario",
    "id canal"
  ],
  "properties": {
    "id canal": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    },
    "id usario": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('creaciocanal').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.getCollection('creaciocanal').createIndex( { 'id canal':1 } , { name:'"id canal"'} );

db.createCollection('creaciopl',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id usario",
    "dataHora"
  ],
  "properties": {
    "id": {
      "bsonType": "int"
    },
    "id usario": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "string"
    }
  }
} }});

db.getCollection('creaciopl').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.createCollection('estatvideo',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "estado"
  ],
  "properties": {
    "estado": {
      "enum": [
        "public",
        "ocult",
        "privat"
      ]
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.createCollection('etiqueta',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id usario",
    "id video",
    "nom",
    "dataHora"
  ],
  "properties": {
    "id video": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "id usario": {
      "bsonType": "int"
    },
    "nom": {
      "bsonType": "string"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

db.getCollection('etiqueta').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.getCollection('etiqueta').createIndex( { 'id video':1 } , { name:'"id video"'} );

db.createCollection('opinion',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataHora",
    "estado",
    "id video",
    "id usario"
  ],
  "properties": {
    "estado": {
      "enum": [
        "like",
        "dislike"
      ]
    },
    "id video": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    },
    "id usario": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('opinion').createIndex( { 'id video':1 } , { name:'"id video"'} );

db.getCollection('opinion').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.createCollection('playlist',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id creacio pl"
  ],
  "properties": {
    "id creacio pl": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('playlist').createIndex( { 'id creacio pl':1 } , { name:'"id creacio pl"'} );

db.createCollection('subscripcio',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "dataSubscripcio",
    "id usario",
    "id canal"
  ],
  "properties": {
    "id canal": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "dataSubscripcio": {
      "bsonType": "date"
    },
    "id usario": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('subscripcio').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.getCollection('subscripcio').createIndex( { 'id canal':1 } , { name:'"id canal"'} );

db.createCollection('videoplaylist',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id video",
    "id playlist"
  ],
  "properties": {
    "id video": {
      "bsonType": "int"
    },
    "id playlist": {
      "bsonType": "int"
    }
  }
} }});

db.getCollection('videoplaylist').createIndex( { 'id playlist':1 } , { name:'"id playlist"'} );

db.createCollection('agrada',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "id usario",
    "id comentari",
    "dataHora"
  ],
  "properties": {
    "id comentari": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "id usario": {
      "bsonType": "int"
    },
    "dataHora": {
      "bsonType": "timestamp"
    }
  }
} }});

db.getCollection('agrada').createIndex( { 'id usario':1 } , { name:'"id usario"'} );

db.getCollection('agrada').createIndex( { 'id comentari':1 } , { name:'"id comentari"'} );

db.createCollection('estatplaylist',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "id",
    "estado"
  ],
  "properties": {
    "estado": {
      "enum": [
        "public",
        "privat"
      ]
    },
    "id": {
      "bsonType": "int"
    }
  }
} }});
